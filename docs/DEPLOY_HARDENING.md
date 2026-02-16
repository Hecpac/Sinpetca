# Deploy Hardening Checklist (SINPETCA)

Checklist breve para dejar el despliegue sólido en producción.

## 1) Variables de entorno (Production)

Configurar en tu plataforma (Vercel/host):

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_SENTRY_DSN`
- `SENTRY_DSN` (opcional, recomendado si separas DSN server)
- `CONTACT_WEBHOOK_URL`
- `CONTACT_WEBHOOK_TOKEN` (opcional)

### Recomendaciones

- No uses valores de prueba en Production.
- Mantén `CONTACT_WEBHOOK_TOKEN` como secreto (no público).
- Verifica que los DSN apunten al proyecto correcto de Sentry.

## 2) Protección de ramas y CI

Asegurar en GitHub:

- Branch protection en `main`.
- Requerir check `CI` antes de merge.
- Requerir PR (sin pushes directos a `main`, si aplica a tu flujo).

CI actual ejecuta:

- `npm ci`
- `npm run lint`
- `npm run build`

## 3) Security/Audit continuo

Flujos recomendados:

- Dependabot para npm y GitHub Actions.
- Workflow de `npm audit` (prod deps, severidad alta/crítica).

## 4) Sentry (alertas mínimas)

Crear alertas:

- **P1**: `api/contact` con errores >= 3 en 5 min.
- **P2**: cualquier error frontend >= 10 en 15 min.

Habilitar notificación a Slack/Email de guardia.

## 5) GA4 eventos de conversión

Validar en DebugView:

- `cta_primary_click`
- `cta_secondary_click`
- `contact_form_submitted`

## 6) Webhook de contacto

- Confirmar que `CONTACT_WEBHOOK_URL` recibe payload JSON.
- Confirmar que el token (`x-contact-token`) se valida en el receptor (si aplica).
- Verificar respuesta HTTP 2xx del webhook.

## 7) Smoke test post-deploy

Probar manualmente:

- `/`
- `/contacto`
- envío real de formulario
- revisar evento en GA4
- revisar ausencia de errores nuevos en Sentry

## 8) Frecuencia operativa

- Revisar CI y alertas diariamente.
- Revisar dependencias semanalmente (Dependabot/audit).
- Revisar métricas de conversión semanalmente.
