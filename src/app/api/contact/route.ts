import * as Sentry from '@sentry/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactRequest = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string; // honeypot
  startedAt?: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const MIN_SUBMIT_TIME_MS = 3_000;
const VALID_SERVICES = new Set([
  '',
  'petrolera',
  'naval',
  'aeronautica',
  'ndt',
  'otro',
]);

function getRateLimitStore(): Map<string, RateLimitEntry> {
  const globalStore = globalThis as typeof globalThis & {
    __sinpetcaContactRateLimit?: Map<string, RateLimitEntry>;
  };

  if (!globalStore.__sinpetcaContactRateLimit) {
    globalStore.__sinpetcaContactRateLimit = new Map<string, RateLimitEntry>();
  }

  return globalStore.__sinpetcaContactRateLimit;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(',');
    return firstIp.trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

function rateLimit(ip: string): boolean {
  const store = getRateLimitStore();
  const now = Date.now();

  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }

  const current = store.get(ip);
  if (!current || current.resetAt <= now) {
    store.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  store.set(ip, current);
  return true;
}

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(payload: ContactRequest): string | null {
  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const message = asTrimmedString(payload.message);
  const service = asTrimmedString(payload.service);
  const company = asTrimmedString(payload.company);
  const phone = asTrimmedString(payload.phone);

  if (!name || name.length < 2 || name.length > 120) {
    return 'Nombre inválido.';
  }

  if (!isValidEmail(email)) {
    return 'Correo electrónico inválido.';
  }

  if (!message || message.length < 10 || message.length > 3000) {
    return 'Mensaje inválido.';
  }

  if (!VALID_SERVICES.has(service)) {
    return 'Servicio inválido.';
  }

  if (company.length > 120) {
    return 'Empresa inválida.';
  }

  if (phone.length > 50) {
    return 'Teléfono inválido.';
  }

  return null;
}

async function sendToWebhook(payload: {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  ip: string;
  submittedAt: string;
}): Promise<void> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('Servicio de contacto no configurado.');
  }

  const webhookToken = process.env.CONTACT_WEBHOOK_TOKEN;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'sinpetca-contact/1.0',
      ...(webhookToken ? { 'x-contact-token': webhookToken } : {}),
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Webhook error: ${response.status}`);
  }
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!rateLimit(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Demasiadas solicitudes. Intente nuevamente más tarde.',
      },
      { status: 429 }
    );
  }

  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      { success: false, message: 'Payload inválido.' },
      { status: 400 }
    );
  }

  // Honeypot protection
  if (asTrimmedString(payload.website)) {
    return NextResponse.json({ success: true, message: 'Mensaje recibido.' });
  }

  // Basic bot-timing protection
  if (typeof payload.startedAt === 'number') {
    const elapsed = Date.now() - payload.startedAt;
    if (elapsed < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json(
        {
          success: false,
          message: 'Por favor espere unos segundos antes de enviar.',
        },
        { status: 400 }
      );
    }
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json(
      { success: false, message: validationError },
      { status: 400 }
    );
  }

  const normalized = {
    name: asTrimmedString(payload.name),
    company: asTrimmedString(payload.company),
    email: asTrimmedString(payload.email),
    phone: asTrimmedString(payload.phone),
    service: asTrimmedString(payload.service),
    message: asTrimmedString(payload.message),
    ip,
    submittedAt: new Date().toISOString(),
  };

  try {
    await sendToWebhook(normalized);
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        route: 'api_contact',
      },
      extra: {
        service: normalized.service,
      },
    });

    return NextResponse.json(
      {
        success: false,
        message:
          'No pudimos procesar su solicitud en este momento. Intente nuevamente en unos minutos.',
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente.' });
}
