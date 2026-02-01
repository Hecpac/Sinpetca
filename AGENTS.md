# SINPETCA Website - Agent Instructions

## Proyecto
Website corporativo para SINPETCA (Servicios de Inspección Petrolera C.A.), empresa venezolana con 35+ años de experiencia en inspección industrial.

## Stack Técnico
- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19 + TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

## Estructura del Proyecto

```
sinpetca-website/
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # Dynamic robots.txt
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Home sections
│   │   ├── services/          # Service page components
│   │   ├── certifications/    # Certification components
│   │   ├── about/             # About page components
│   │   └── ui/                # Reusable UI
│   └── lib/
│       ├── hooks/             # Custom React hooks
│       └── schema-data.ts     # SEO schema data
├── public/                    # Static assets
├── docs/                      # Documentation
│   ├── WEBSITE_ROADMAP.md     # Development roadmap
│   └── SINPETCA_PROGRESS.md   # Progress tracker
└── .cursor/
    ├── rules/                 # Cursor rules (.mdc)
    │   ├── animation-standards.mdc
    │   ├── accessibility-standards.mdc
    │   ├── react-nextjs-patterns.mdc
    │   └── image-optimization.mdc
    └── skills/                # Agent skills
        └── frontend-design/
```

## Sistema de Diseño

### Colores
```
Primary:    #0D3B66 (Navy)
Accent:     #F5A623 (Orange)
Background: #121212 (Industrial Dark)
Surface:    #1E1E1E (Gray)
Text:       #FFFFFF / #B0B0B0
```

### Tipografía
- **Font:** Montserrat
- **Headings:** Bold
- **Body:** Regular

### Patrones de Componentes

1. **Server Component (page.tsx):** Metadata y wrapper
2. **Client Component (PageContent.tsx):** Lógica interactiva

```tsx
// page.tsx
export const metadata = { title: '...', description: '...' };
export default function Page() {
  return <PageContent />;
}

// PageContent.tsx
'use client';
export default function PageContent() {
  // Framer Motion, hooks, etc.
}
```

## Reglas de Desarrollo

### Código
- TypeScript estricto
- Componentes funcionales
- Props tipadas con interfaces
- Separar server/client components

### Estilos
- Tailwind CSS utilities
- Design tokens en globals.css
- Mobile-first responsive
- Dark theme by default

### Animaciones
- Framer Motion para scroll animations
- useInView con { once: true }
- Respetar prefers-reduced-motion
- Transiciones sutiles y profesionales

### Accesibilidad
- WCAG 2.2 AA objetivo
- Semántica HTML correcta
- Focus visible
- Alt text en imágenes
- Contraste verificado

### SEO
- Metadata por página
- Open Graph tags
- Estructura de headings correcta
- Schema.org markup

## Comandos

```bash
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Build producción
npm run lint     # Linter
```

## Documentación

- `docs/WEBSITE_ROADMAP.md` - Roadmap de desarrollo
- `docs/SINPETCA_PROGRESS.md` - Progreso actual
- `.cursor/rules/*.mdc` - Estándares de código
- `.cursor/skills/frontend-design/SKILL.md` - Guía de diseño
