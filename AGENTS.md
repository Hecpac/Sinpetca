# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` holds App Router pages, layouts, and route files.
- `src/components/` contains UI building blocks (layout, sections, services, certifications, about, and shared UI).
- `src/hooks/` and `src/lib/` provide shared hooks, helpers, and structured data (e.g., schema).
- `src/types/` centralizes TypeScript types.
- `public/` stores static assets served at the site root (images, icons, etc.).
- `docs/` captures product and delivery notes (roadmap, progress, etc.).

## Build, Test, and Development Commands
- `npm run dev` starts the Next.js dev server at `http://localhost:3000`.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint (Next.js core-web-vitals + TypeScript rules).

## Coding Style & Naming Conventions
- TypeScript is strict (`tsconfig.json`), so keep types explicit and avoid `any`.
- Follow existing formatting: 2-space indentation, single quotes in TS/TSX, and Tailwind utility classes for styling.
- Use the `@/*` alias for imports under `src` (e.g., `@/components/layout/Navbar`).
- Prefer function components and keep server/client separation clear in `src/app`.

## Testing Guidelines
- No automated test framework is configured in this repository yet.
- If adding tests, document the chosen framework and add a dedicated script in `package.json`.

## Commit & Pull Request Guidelines
- Commit history follows Conventional Commits (e.g., `feat: ...`, `fix: ...`).
- Keep subjects short, imperative, and scoped to a single change.
- PRs should include a concise description, testing notes (`npm run lint`, `npm run build`), and screenshots for UI changes.
- Link related issues or roadmap items when applicable.

## Configuration Notes
- Static assets belong in `public/` and should be referenced by root-relative paths (e.g., `/og-image.jpg`).
- SEO metadata and schema live in `src/app` and `src/lib/schema-data.ts`—update both when adding pages.
