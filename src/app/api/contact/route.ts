import * as Sentry from '@sentry/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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
const DEFAULT_CONTACT_TO_EMAIL = 'sinpetca68@gmail.com';
const DEFAULT_RESEND_FROM_EMAIL = 'contacto@mail.pachanodesign.com';
const VALID_SERVICES = new Set([
  '',
  'petrolera',
  'naval',
  'aeronautica',
  'ndt',
  'izamiento',
  'especiales',
  'estructural',
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

function normalizeEnvString(value: string | undefined): string {
  if (!value) {
    return '';
  }

  return value.trim().replace(/^['"]+|['"]+$/g, '').trim();
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

async function sendEmail(payload: {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  ip: string;
  submittedAt: string;
}): Promise<void> {
  const apiKey = normalizeEnvString(process.env.RESEND_API_KEY);
  if (!apiKey) {
    throw new Error('Servicio de correo no configurado (RESEND_API_KEY).');
  }

  const toEmail =
    normalizeEnvString(process.env.CONTACT_TO_EMAIL) || DEFAULT_CONTACT_TO_EMAIL;
  const fromEmail =
    normalizeEnvString(process.env.RESEND_FROM_EMAIL) || DEFAULT_RESEND_FROM_EMAIL;

  if (!isValidEmail(toEmail)) {
    throw new Error('Configuración inválida (CONTACT_TO_EMAIL).');
  }

  if (!isValidEmail(fromEmail)) {
    throw new Error('Configuración inválida (RESEND_FROM_EMAIL).');
  }

  const resend = new Resend(apiKey);

  const serviceLabel = payload.service || 'No especificado';

  const { error } = await resend.emails.send({
    from: `SINPETCA Web <${fromEmail}>`,
    to: [toEmail],
    replyTo: payload.email,
    subject: `Nueva consulta de ${payload.name} — ${serviceLabel}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a3a5c; border-bottom: 3px solid #e07b2a; padding-bottom: 8px;">
          Nueva consulta desde sinpetca.com
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Nombre</td><td style="padding: 8px;">${payload.name}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding: 8px; font-weight: bold;">Empresa</td><td style="padding: 8px;">${payload.company || '—'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
          <tr style="background:#f5f5f5;"><td style="padding: 8px; font-weight: bold;">Teléfono</td><td style="padding: 8px;">${payload.phone || '—'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Servicio</td><td style="padding: 8px;">${serviceLabel}</td></tr>
        </table>
        <h3 style="color: #1a3a5c; margin-top: 24px;">Mensaje</h3>
        <div style="background: #f9f9f9; padding: 16px; border-left: 4px solid #e07b2a; white-space: pre-wrap;">${payload.message}</div>
        <p style="color: #888; font-size: 12px; margin-top: 24px;">
          Enviado: ${payload.submittedAt} · IP: ${payload.ip}
        </p>
      </div>
    `,
  });

  if (error) {
    if (
      error.statusCode === 403 &&
      fromEmail.endsWith('@resend.dev') &&
      toEmail.toLowerCase() !== 'pachanohector15@gmail.com'
    ) {
      throw new Error(
        'Resend requiere un dominio verificado para enviar a ese destinatario. Configure RESEND_FROM_EMAIL con un dominio propio verificado.'
      );
    }

    throw new Error(`Resend error: ${error.message}`);
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
    await sendEmail(normalized);
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
