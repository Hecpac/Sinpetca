# SINPETCA Website

Sitio corporativo de **SINPETCA, C.A.** construido con Next.js (App Router), React y TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm ci
npm run dev
```

App disponible en: `http://localhost:3000`

## Calidad y build

```bash
npm run lint
npm run build
npm run start
```

## Variables de entorno

Crea un `.env.local` con base en `.env.example`.

Variables soportadas:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: habilita Google Analytics 4.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: código de verificación de Google Search Console.
- `NEXT_PUBLIC_SENTRY_DSN`: monitoreo frontend con Sentry.
- `SENTRY_DSN` (opcional): DSN para runtime server/edge.
- `RESEND_API_KEY`: API key de Resend para el envío del formulario `/api/contact`.
- `CONTACT_TO_EMAIL`: correo que recibe las solicitudes del formulario.
- `RESEND_FROM_EMAIL`: remitente usado por Resend. Debe pertenecer a un dominio verificado en la cuenta de Resend.

## Estructura

- `src/app`: rutas y layout (App Router)
- `src/components`: componentes por dominio
- `src/lib`: utilidades y schema data
- `public`: assets estáticos
- `docs`: roadmap y progreso

## Nota

El proyecto está optimizado para contenido estático y SEO técnico (sitemap, robots, schema markup y security headers).

Además, registra eventos de conversión en GA4:

- `cta_primary_click`
- `cta_secondary_click`
- `contact_form_submitted`

Guía de hardening de despliegue: `docs/DEPLOY_HARDENING.md`.
Playbook de herramientas y flujo operativo: `docs/WORKFLOW_TOOLS.md`.
