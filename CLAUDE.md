# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

This project uses **bun** as the package manager.

```bash
bun dev           # Start Vite development server (localhost:5173)
bun run build     # Build for production
bun run preview   # Preview production build locally
bun run lint      # Run oxlint
bun run format    # Format code with oxfmt
```

Always run `bun run lint` after editing files to ensure code quality.

## Architecture

**Stack:** Vite 8 + React 19 + React Router v7 (Declarative) + TypeScript + Tailwind CSS v4

**Key Structure:**
- `src/main.tsx` - React entry point with BrowserRouter and StrictMode
- `src/app.tsx` - Route definitions using React Router's `<Routes>` and `<Route>`
- `src/layout.tsx` - Shared layout wrapper with Header, Footer, and `<Outlet>`
- `src/pages/` - Page components (home.tsx)
- `src/components/` - Reusable React components (container, header, footer, projects, marks)
- `src/styles/globals.css` - Tailwind CSS v4 import + design tokens (OKLCH color system, motion keyframes)

**Routing:** Uses React Router v7 Declarative mode with `<Link to="...">` for navigation and `useLocation()` for pathname detection.

**Theming:** Semantic OKLCH color tokens (`--paper`, `--ink`, `--muted`, `--line`, `--accent`, plus per-project `--mdv` / `--locutory`) defined in `:root` and swapped under `@media (prefers-color-scheme: dark)`. Mapped to Tailwind utilities via `@theme inline` (e.g. `bg-paper`, `text-ink`). No theme provider or toggle — it follows the OS.

**Fonts:** Geist (sans), Geist Mono, and Geist Pixel are loaded from Google Fonts in `index.html` and exposed as `font-sans` / `font-mono` / `font-pixel`. Geist Pixel is a signature accent (the `ik` monogram, favicon).

**Path Aliases:** `@/*` maps to `src/*` (e.g., `@/components/header`)

## Code Style

- **File naming:** kebab-case for all files (e.g., `local-time.tsx`, not `LocalTime.tsx`)
- **TypeScript:** Avoid `any` type; use real, informative types
- **Formatting:** Double quotes, semicolons required, 120 char print width, no trailing commas
- **Linting:** oxlint with React, TypeScript, and import plugins
- **Formatting:** oxfmt (Prettier-compatible)
