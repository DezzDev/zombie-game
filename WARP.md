# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Commands

### Development
- `npm run dev` - Start development server with Turbopack (localhost:3000)
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Package Management
The project uses pnpm as evidenced by `pnpm-lock.yaml`. Use pnpm commands for dependency management:
- `pnpm install` - Install dependencies
- `pnpm add <package>` - Add new dependency
- `pnpm add -D <package>` - Add dev dependency

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Build Tool**: Turbopack (Next.js's bundler)

### Project Structure
```
zombie-game/
├── src/app/           # Next.js App Router pages and layouts
│   ├── layout.tsx     # Root layout with font configuration
│   ├── page.tsx       # Home page component
│   └── globals.css    # Global styles with Tailwind and CSS variables
├── public/            # Static assets (SVG icons for Next.js template)
├── next.config.ts     # Next.js configuration (minimal setup)
├── tsconfig.json      # TypeScript configuration with path aliases
└── eslint.config.mjs  # ESLint configuration with Next.js rules
```

### Key Configuration Details
- **Path Aliases**: `@/*` maps to `./src/*` for cleaner imports
- **TypeScript**: Target ES2017 with strict mode and Next.js plugin
- **Styling**: Uses CSS variables for theming with dark mode support via `prefers-color-scheme`
- **Linting**: Next.js core web vitals and TypeScript rules via flat config format

### Current State
This is a freshly scaffolded Next.js project with the default template. The application currently shows the standard Next.js welcome page with links to documentation and deployment options. No zombie game functionality has been implemented yet.

### Development Notes
- The project is configured for modern development with Turbopack for fast rebuilds
- Uses the new App Router pattern (not Pages Router)
- CSS-in-JS is not used; styling relies on Tailwind CSS classes
- Font optimization is handled via `next/font/google`
- Dark mode theming is implemented at the CSS level using media queries
