# Project Memory Index - top-tier

## Project Overview
- **Name**: top-tier (Medivia Media Dashboard)
- **Stack**: Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui
- **Type**: Media library dashboard - organize films, series, anime, manga, webtoons

## Key Files Reference

### App Structure
- `app/page.tsx` → **Main dashboard (Medivia)** - Hero carousel, sidebar, media grid, GSAP animations
- `app/layout.tsx` → Root layout with providers (Tooltip, Theme, Fonts)
- `app/globals.css` → Tailwind v4 config + CSS variables (OKLCH colors, dark mode)
- `app/dashboard/page.tsx` → Dashboard page (to explore)
- `app/test/page.tsx` → Test page (to explore)

### Components Architecture
```
components/
├── ui/                    # 40+ shadcn/ui components (button, card, dialog, etc.)
├── layout/
│   ├── sidebar.tsx        # Main sidebar provider + components (collapsible, mobile sheet)
│   ├── header.tsx         # Top header
│   ├── adminShell.tsx     # Admin layout wrapper
│   └── searchCommand.tsx  # Cmd+K search
├── app-sidebar.tsx        # App-specific sidebar content
├── nav-main.tsx           # Main navigation
├── nav-projects.tsx       # Projects navigation
├── nav-user.tsx           # User navigation
├── team-switcher.tsx      # Team switcher
└── idee/                  # Idea components (04, 05, 06)
```

### Core Utilities
- `lib/utils.ts` → `cn()` helper (clsx + tailwind-merge)
- `hooks/use-mobile.ts` → Mobile detection hook

### Key Dependencies
- **Animations**: `gsap` (used in page.tsx for entrance animations)
- **Icons**: `@hugeicons/react` + `@hugeicons/core-free-icons`
- **State**: `@tanstack/react-query`, `zustand`
- **UI**: `shadcn`, `radix-ui`, `class-variance-authority`, `tailwind-merge`, `tw-animate-css`
- **Forms/UX**: `cmdk`, `react-day-picker`, `react-resizable-panels`, `embla-carousel-react`, `vaul`, `sonner`
- **Charts**: `recharts`
- **Auth/Theming**: `next-themes`, `input-otp`

## Visual Theme
- **Dark mode default** with custom colors: `#1a1f26`, `#13171c`, `#0f1318`
- **Accent**: Amber/Yellow `#ffc529` for logo
- **Tailwind v4** with CSS variables (OKLCH color space)

## Animation Patterns (GSAP)
```typescript
// Used in app/page.tsx
gsap.context(() => {
  const tl = gsap.timeline();
  tl.fromTo(".anim-sidebar", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 })
    .fromTo(".anim-topbar", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
    .fromTo(".anim-hero", { scale: 0.98, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7 }, "-=0.3")
    .fromTo(".anim-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 }, "-=0.2");
}, containerRef);
```

## Commands
```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint
```

## Related Memories
- [[project-structure]] - Detailed file tree
- [[component-map]] - Component relationships
- [[styling-guide]] - Tailwind v4 + shadcn patterns

## Created Memory Files (.claude/memory/)
- `memory-index.md` → This file (main index)
- `project-structure.md` → Complete file tree + config
- `component-map.md` → Component hierarchy + data flow
- `styling-guide.md` → Tailwind v4 + shadcn patterns