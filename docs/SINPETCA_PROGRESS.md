# SINPETCA Website - Progress Tracker

Seguimiento del progreso basado en el Roadmap Global de Websites.

**Última actualización:** 2026-01-31

---

## Estado General

| Fase | Estado | Progreso |
|------|--------|----------|
| 0) Principios base | ✅ Completado | 100% |
| 1) Descubrimiento y estrategia | ✅ Completado | 100% |
| 2) Arquitectura de información | ✅ Completado | 100% |
| 3) Contenido y narrativa | 🟡 En progreso | 85% |
| 4) UX/UI y sistema visual | ✅ Completado | 100% |
| 5) Plan técnico y stack | ✅ Completado | 100% |
| 6) Desarrollo e implementación | 🟡 En progreso | 90% |
| 7) Performance y calidad | 🟡 Pendiente | 30% |
| 8) Accesibilidad | ✅ Completado | 90% |
| 9) SEO | ✅ Completado | 95% |
| 10) Analítica y tracking | ⬜ Pendiente | 0% |
| 11) QA y pruebas | 🟡 En progreso | 20% |
| 12) Seguridad y compliance | ⬜ Pendiente | 20% |
| 13) Lanzamiento | ⬜ Pendiente | 0% |
| 14) Mantenimiento | ⬜ Pendiente | 0% |

---

## Detalle por Fase

### ✅ 0) Principios base
- [x] Objetivo claro por página
- [x] Performance primero (Next.js 16 + Turbopack)
- [x] Accesibilidad considerada en diseño
- [x] Contenido estructurado antes de estética
- [x] Componentes reutilizables y escalables

### ✅ 1) Descubrimiento y estrategia
- [x] Objetivos definidos: generación de leads, posicionamiento como empresa certificada
- [x] Audiencia: industria petrolera, naval, aeronáutica, gerentes de mantenimiento
- [x] Propuesta de valor: 35+ años de experiencia, certificaciones internacionales
- [x] KPIs: formularios de contacto, cotizaciones solicitadas

### ✅ 2) Arquitectura de información
- [x] Sitemap definido:
  - `/` - Home
  - `/nosotros` - Sobre la empresa
  - `/servicios` - Servicios principales
  - `/servicios/petrolera` - Sector petrolero
  - `/servicios/naval` - Sector naval
  - `/servicios/aeronautica` - Sector aeronáutico
  - `/servicios/ndt` - Ensayos no destructivos
  - `/certificaciones` - Acreditaciones
  - `/proyectos` - Portafolio
  - `/contacto` - Formulario de contacto
- [x] Navegación global implementada
- [x] Jerarquía de contenidos establecida

### 🟡 3) Contenido y narrativa (70%)
- [x] Tono profesional y técnico definido
- [x] Copy orientado a beneficios
- [x] Storytelling por secciones
- [x] Assets visuales finales (fotos reales de proyectos usados en Home y Servicios)
- [ ] Testimonios de clientes reales
- [ ] Casos de estudio detallados

**Páginas con contenido:**
- [x] Home - Completo
- [x] Nosotros - Completo (historia, misión/visión, equipo)
- [x] Certificaciones - Completo (timeline, documentos)
- [x] Servicios principales - Completo
- [x] Servicios Petrolera - Completo
- [x] Servicios Naval - Completo
- [x] Servicios Aeronáutica - Completo
- [x] Servicios NDT - Completo
- [ ] Proyectos - Por desarrollar
- [ ] Contacto - Por completar

### ✅ 4) UX/UI y sistema visual
- [x] Design system implementado (globals.css)
- [x] Mobile-first approach
- [x] Tokens definidos (colores, tipografía, spacing)
- [x] Componentes base creados
- [x] Estados hover/focus implementados
- [x] Animaciones con Framer Motion

**Sistema de colores:**
- Primary: `#0D3B66` (Navy)
- Accent: `#F5A623` (Orange)
- Background: `#121212` (Industrial Dark)

### ✅ 5) Plan técnico y stack
- [x] **Framework:** Next.js 16.1.6 (App Router)
- [x] **Estilos:** Tailwind CSS v4
- [x] **Animaciones:** Framer Motion
- [x] **Iconos:** Lucide React
- [x] **TypeScript:** Habilitado
- [x] **Hosting:** Por definir (Vercel recomendado)
- [ ] CMS: Por implementar si se requiere

### 🟡 6) Desarrollo e implementación (75%)

**Componentes creados:**
- [x] Layout (Navbar, Footer)
- [x] Hero section
- [x] Services section
- [x] Stats section
- [x] Clients section
- [x] CTA section
- [x] Service pages components
- [x] Certification components (Timeline, Documents, Cards)
- [x] About components (Timeline, Mission/Vision, Team)
- [ ] Contact form component
- [ ] Projects gallery component

**Páginas implementadas:**
- [x] Home (`/`)
- [x] Nosotros (`/nosotros`)
- [x] Servicios (`/servicios`)
- [x] Servicios - Petrolera (`/servicios/petrolera`)
- [x] Servicios - Naval (`/servicios/naval`)
- [x] Servicios - Aeronáutica (`/servicios/aeronautica`)
- [x] Servicios - NDT (`/servicios/ndt`)
- [x] Certificaciones (`/certificaciones`)
- [ ] Proyectos (`/proyectos`)
- [x] Contacto (`/contacto`)

### 🟡 7) Performance y calidad (30%)
- [x] Next.js optimizado con Turbopack
- [x] Componentes client/server separados
- [ ] Auditoría Lighthouse completa
- [ ] Optimización de imágenes (WebP/AVIF)
- [ ] Lazy loading implementado
- [ ] Core Web Vitals verificados

**Objetivos:**
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

### 🟡 8) Accesibilidad (80%)
- [x] Semántica HTML correcta
- [x] Contraste de colores (dark theme)
- [x] Focus visible en elementos interactivos
- [x] Navegación completa por teclado
- [x] ARIA labels donde aplica
- [x] Reduced motion preferences (CSS + Framer Motion)
- [x] Skip link implementado
- [x] Role landmarks (banner, navigation, contentinfo)
- [ ] Auditoría WCAG 2.2 AA completa

### ✅ 9) SEO (90%)
- [x] Metadata por página (title, description)
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Estructura H1-H3 correcta
- [x] Schema.org (SchemaMarkup component)
- [x] Sitemap.xml (dinámico con Next.js)
- [x] Robots.txt (dinámico con Next.js)
- [ ] Verificar indexación post-deploy

### ⬜ 10) Analítica y tracking (0%)
- [ ] Google Analytics 4
- [ ] Eventos de conversión
- [ ] Tracking de formularios
- [ ] Dashboard de KPIs

### ⬜ 11) QA y pruebas (10%)
- [x] Build sin errores
- [ ] Tests en múltiples dispositivos
- [ ] Tests de formularios
- [ ] Validación de enlaces
- [ ] Tests E2E

### ⬜ 12) Seguridad y compliance (20%)
- [x] TypeScript para type safety
- [ ] HTTPS configurado
- [ ] Headers de seguridad
- [ ] Protección de formularios
- [ ] Página de privacidad
- [ ] Página de términos

### ⬜ 13) Lanzamiento (0%)
- [ ] Contenido final revisado
- [ ] DNS configurado
- [ ] Certificado SSL
- [ ] Monitoreo activo
- [ ] Plan de rollback

### ⬜ 14) Mantenimiento (0%)
- [ ] Plan de actualizaciones
- [ ] Backlog de mejoras
- [ ] Métricas mensuales

---

## Próximos pasos prioritarios

1. **Completar página de Contacto** con formulario funcional
2. **Desarrollar página de Proyectos** con galería/portafolio
3. **Agregar imágenes reales** del equipo y proyectos
4. **Implementar sitemap.xml y robots.txt**
5. **Configurar Google Analytics**
6. **Auditoría de accesibilidad**
7. **Pruebas de performance con Lighthouse**
8. **Páginas legales** (Privacidad, Términos)

---

## Notas técnicas

### Estructura de carpetas
```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Home
│   ├── nosotros/          # About
│   ├── servicios/         # Services
│   ├── certificaciones/   # Certifications
│   ├── proyectos/         # Projects (pendiente)
│   └── contacto/          # Contact (pendiente)
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Home sections
│   ├── services/          # Service page components
│   ├── certifications/    # Certification components
│   ├── about/             # About page components
│   ├── ui/                # Reusable UI components
│   └── seo/               # SEO components
└── lib/                   # Utilities (si se requiere)
```

### Comandos útiles
```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
npm run lint     # Linter
```
