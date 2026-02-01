# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for SINPETCA (Servicios de Inspección Petrolera C.A.), a Venezuelan industrial inspection company with 35+ years in NDT, petroleum, naval, and aeronautic sectors.

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
npx prettier --write .  # Format code
```

## Tech Stack

- **Next.js 16.1.6** (App Router)
- **React 19** + TypeScript (strict mode)
- **Tailwind CSS v4** with custom design tokens in `globals.css`
- **Framer Motion** for animations
- **Lucide React** for icons

Path alias: `@/*` resolves to `./src/*`

## Architecture

### Server/Client Component Pattern

Every route follows this structure:
- `page.tsx` - Server component with metadata export
- `PageContent.tsx` - Client component (`'use client'`) with interactivity

```tsx
// page.tsx (server)
export const metadata: Metadata = { title: '...', description: '...' };
export default function Page() {
  return <PageContent />;
}

// PageContent.tsx (client)
'use client';
export default function PageContent() {
  // Framer Motion, hooks, state
}
```

### Directory Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── globals.css        # Design tokens (colors, spacing, animations)
│   ├── sitemap.ts         # Dynamic sitemap.xml
│   ├── robots.ts          # Dynamic robots.txt
│   └── [routes]/          # Each route has page.tsx + PageContent.tsx
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Home page sections
│   ├── services/          # Service page components
│   ├── certifications/    # Certification components
│   ├── about/             # About page components
│   ├── seo/               # SchemaMarkup component
│   └── ui/                # Reusable UI components
└── lib/
    └── schema-data.ts     # SEO structured data
```

## Design System

### Colors
- Primary: `#0D3B66` (Navy) / `#1E5A8A` (Light)
- Accent: `#F5A623` (Orange) - used for CTAs
- Background: `#121212` (Industrial Dark)
- Surface: `#1E1E1E`
- Text: `#FFFFFF` / `#B0B0B0` (secondary)

### Typography
- Font: Montserrat (loaded via next/font)
- Headings: Bold (700-800)
- Body: Regular (400)

### Animation Standards
- Framework: Framer Motion
- Entry pattern: `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`
- Scroll animations use `useInView` with `{ once: true, margin: '-50px' }`
- Durations: Fast (150ms), Normal (300ms), Slow (500ms)
- Always respect `prefers-reduced-motion`
- Animate only `transform` and `opacity` for performance

## Development Standards

### Accessibility (WCAG 2.2 AA target)
- Semantic HTML with proper heading hierarchy (single H1 per page)
- Focus visible on interactive elements (orange outline)
- ARIA labels where needed
- Skip link implemented in layout
- Color contrast verified for dark theme

### SEO
- Metadata per page with Open Graph
- Schema.org markup (Organization, BreadcrumbList)
- Dynamic sitemap.xml and robots.txt
- Canonical URLs

### Code Conventions
- TypeScript strict mode
- Props typed with interfaces (`ComponentNameProps`)
- PascalCase for component files
- Group imports: React → Next → libs → local
- `export default` for main components

## Documentation

- `docs/WEBSITE_ROADMAP.md` - Development phases
- `docs/SINPETCA_PROGRESS.md` - Current progress (~70% complete)
- `.cursor/rules/*.mdc` - Detailed code standards (accessibility, animations, React patterns, images)
