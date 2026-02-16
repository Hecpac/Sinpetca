# Workflow Tools (Code + Design + SEO/AEO)

Playbook operativo para ejecutar trabajo de alta calidad con consistencia.

## 1) Command stack (local)

- Desarrollo: `npm run dev`
- Calidad rápida: `npm run check`
- Verificación completa: `npm run verify`
- Fix automático lint: `npm run lint:fix`
- Formateo: `npm run format`

## 2) CI stack (GitHub)

- `CI` (PR + push): lint + typecheck + build
- `Security Audit` (PR + push + semanal): `npm audit --omit=dev --audit-level=high`
- Dependabot semanal: npm + GitHub Actions

## 3) Agent stack recomendado

### Implementación
- `builder`: construir features/refactors.

### Calidad técnica
- `reviewer`: revisión técnica final.
- `performance`: optimización CWV/bundle/render.
- `qa-e2e`: validación de flujos críticos.
- `release-manager`: checklist de release.

### Diseño/UX
- `design-guardian`: consistencia visual, accesibilidad y UX.

### Contenido/SEO
- `seo-audit`: SEO/AEO técnico y semántico.
- `docs-writer`: copy, docs y storytelling.
- `researcher`: research competitivo y ángulos de contenido.

## 4) Skills recomendadas

- `vercel-react-best-practices`
- `web-design-guidelines`
- `vercel-composition-patterns`
- `github`
- `coding-agent`

## 5) Flujo estándar por tarea

1. **Research**: objetivo + audiencia + intención de búsqueda.
2. **Copy/story**: propuesta de valor + CTA.
3. **Build**: implementación en componentes/rutas.
4. **Design review**: accesibilidad, jerarquía visual, legibilidad.
5. **SEO/AEO review**: metadata/schema/intenciones semánticas.
6. **Verify**: `npm run verify`.
7. **PR** con checklist completo.

## 6) DoD (Definition of Done)

- Código: lint + typecheck + build en verde.
- Diseño: UI validada en desktop/mobile.
- SEO/AEO: metadata y contenido estructurado listos.
- Conversión: CTA principal y secundaria instrumentadas.
- Observabilidad: sin errores nuevos críticos en Sentry.
