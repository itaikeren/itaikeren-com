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

**Stack:** Vite 7 (Rolldown) + React 19 + React Router v7 (Declarative) + TypeScript + Tailwind CSS v4 + MDX

**Key Structure:**
- `src/main.tsx` - React entry point with ThemeProvider and BrowserRouter
- `src/app.tsx` - Route definitions using React Router's `<Routes>` and `<Route>`
- `src/layout.tsx` - Shared layout wrapper with Header, Footer, and `<Outlet>`
- `src/pages/` - Page components (home.tsx, notes/slek.mdx)
- `src/components/` - Reusable React components (container, header, footer, list, separator, note-date, mdx-wrapper)
- `src/styles/globals.css` - Tailwind CSS v4 import with custom theme variables

**Routing:** Uses React Router v7 Declarative mode with `<Link to="...">` for navigation and `useLocation()` for pathname detection.

**Theming:** Uses `next-themes` for dark/light mode with system preference detection. Dark mode uses Tailwind's `dark:` class prefix.

**Path Aliases:** `@/*` maps to `src/*` (e.g., `@/components/header`)

## Code Style

- **File naming:** kebab-case for all files (e.g., `note-date.tsx`, not `NoteDate.tsx`)
- **TypeScript:** Avoid `any` type; use real, informative types
- **Formatting:** Double quotes, semicolons required, 120 char print width, no trailing commas
- **Linting:** oxlint with React, TypeScript, and import plugins
- **Formatting:** oxfmt (Prettier-compatible)
