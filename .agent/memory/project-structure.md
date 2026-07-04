---
name: project-structure
description: Complete file tree and structure of top-tier project
metadata:
  type: reference
---

# Project Structure - top-tier

## Root Directory
```
top-tier/
├── .git/
├── .gitignore
├── .claude/
│   ├── settings.json
│   └── memory/
│       ├── component-map.md
│       ├── project-structure.md
│       ├── styling-guide.md
│       └── memory-index.md
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
├── app/
├── components/
├── hooks/
├── lib/
└── public/
```

## App Router (app/)
```
app/
├── favicon.ico
├── globals.css          # Tailwind v4 + CSS variables + base styles
├── layout.tsx           # Root layout + fonts + TooltipProvider
├── page.tsx             # MediaDashboard (main dashboard)
├── dashboard/
│   └── page.tsx         # Empty dashboard page
└── test/
    └── page.tsx         # Test page
```

## Components (components/)
```
components/
├── ui/                          # shadcn/ui components (39 files)
│   ├── alert.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── breadcrumb.tsx
│   ├── button-group.tsx
│   ├── button.tsx
│   ├── calendar.tsx
│   ├── card.tsx
│   ├── checkbox.tsx
│   ├── chart.tsx
│   ├── collapsible.tsx
│   ├── command.tsx
│   ├── combobox.tsx
│   ├── context-menu.tsx
│   ├── drawer.tsx
│   ├── dropdown-menu.tsx
│   ├── empty.tsx
│   ├── field.tsx
│   ├── hover-card.tsx
│   ├── input-group.tsx
│   ├── input-otp.tsx
│   ├── input.tsx
│   ├── item.tsx
│   ├── kbd.tsx
│   ├── label.tsx
│   ├── menubar.tsx
│   ├── navigation-menu.tsx
│   ├── pagination.tsx
│   ├── popover.tsx
│   ├── progress.tsx
│   ├── resizable.tsx
│   ├── scroll-area.tsx
│   ├── select.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── sidebar.tsx          # Complex sidebar system (683 lines)
│   ├── skeleton.tsx
│   ├── slider.tsx
│   ├── sonner.tsx
│   ├── spinner.tsx
│   ├── switch.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   ├── textarea.tsx
│   ├── toggle.tsx
│   └── tooltip.tsx
│
├── idee/                       # Idea/experimental components
│   ├── 04.tsx
│   ├── 05.tsx
│   └── 06.tsx
│
├── layout/                     # Layout components
│   ├── adminShell.tsx
│   ├── header.tsx
│   ├── searchCommand.tsx
│   └── sidebar.tsx
│
├── app-sidebar.tsx             # App sidebar (shadcn sidebar)
├── nav-main.tsx                # Main navigation
├── nav-projects.tsx            # Projects navigation
├── nav-user.tsx                # User navigation
└── team-switcher.tsx           # Team switcher
```

## Hooks (hooks/)
```
hooks/
└── use-mobile.ts               # useIsMobile hook (matchMedia)
```

## Lib (lib/)
```
lib/
└── utils.ts                    # cn() helper (clsx + tailwind-merge)
```

## Public Assets (public/)
```
public/
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## Configuration Files

### package.json - Key Dependencies
```json
{
  "dependencies": {
    "next": "16.2.9",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "@tanstack/react-query": "^5.101.2",
    "zustand": "^5.0.14",
    "gsap": "^3.15.0",
    "@hugeicons/react": "^1.1.9",
    "@hugeicons/core-free-icons": "^4.2.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.6.0",
    "tw-animate-css": "^1.4.0",
    "shadcn": "^4.12.0",
    "radix-ui": "^1.6.1",
    "next-themes": "^0.4.6",
    "sonner": "^2.0.7",
    "vaul": "^1.1.2",
    "embla-carousel-react": "^8.6.0",
    "react-day-picker": "^10.0.1",
    "date-fns": "^4.4.0",
    "input-otp": "^1.4.2",
    "cmdk": "^1.1.1",
    "react-resizable-panels": "^4.12.0",
    "recharts": "^3.8.0",
    "@base-ui/react": "^1.6.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.2.9",
    "postcss.config.mjs"
  }
}
```

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Default config
};

export default nextConfig;
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### components.json (shadcn/ui config)
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "hugeicons"
}
```

## Key Architectural Notes

### 1. Dual Sidebar Systems
- **components/ui/sidebar.tsx** - Full shadcn sidebar system (683 lines, complex)
- **components/app-sidebar.tsx** - App-specific sidebar wrapper
- **components/layout/sidebar.tsx** - Layout sidebar component

### 2. Dashboard is Self-Contained
- `app/page.tsx` = Single 405-line component (MediaDashboard)
- All data inline (libraries, categories, cards, menuIcons)
- GSAP animations via useEffect + context
- Hardcoded dark theme (ignores next-themes)

### 3. UI Library = shadcn/ui "new-york" style
- 39 components in components/ui/
- Uses Radix UI primitives
- CVA for variants
- Hugeicons for icons

### 4. Path Aliases
```typescript
"@/*": ["./*"]  // Enables @/components, @/lib, @/hooks, @/app
```

## Related Memories
- [[memory-index]] - Main index
- [[component-map]] - Component relationships
- [[styling-guide]] - Styling patterns