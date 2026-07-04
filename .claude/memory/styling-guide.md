---
name: styling-guide
description: Tailwind v4 + shadcn/ui styling patterns and conventions in top-tier
metadata:
  type: reference
---

# Styling Guide - top-tier

## Tailwind CSS v4 Configuration

### globals.css Structure
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Color mappings to CSS variables */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  /* ... sidebar, chart, radius mappings */
}

:root {
  /* Light theme (OKLCH) */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --radius: 0.625rem;
  /* ... */
}

.dark {
  /* Dark theme (OKLCH) */
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --border: oklch(1 0 0 / 10%);
  /* ... */
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
  html { @apply font-sans; }
}
```

## Color System

### CSS Variables (OKLCH)
| Variable | Light | Dark | Usage |
|----------|-------|------|-------|
| `--background` | `oklch(1 0 0)` | `oklch(0.145 0 0)` | Page bg |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Text |
| `--card` | `oklch(1 0 0)` | `oklch(0.205 0 0)` | Card bg |
| `--primary` | `oklch(0.205 0 0)` | `oklch(0.922 0 0)` | Primary actions |
| `--muted` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Subtle bg |
| `--border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Borders |

### Custom Colors in Dashboard (app/page.tsx)
```css
/* Hardcoded in component (not using CSS variables) */
bg-[#1a1f26]      /* Main page background */
bg-[#13171c]      /* Container background */
bg-[#0f1318]      /* Sidebar background */
bg-[#1c222b]      /* Elevated surfaces */
bg-[#181e26]      /* Library cards */
bg-[#161b22]      /* Deeper surfaces */
border-white/[0.02]  /* Subtle borders */
border-white/[0.04]  /* Visible borders */
text-zinc-400     /* Muted text */
text-zinc-500     /* Secondary text */
text-zinc-200     /* Primary text */
text-white        /* High contrast text */
```

### Gradient Colors (Libraries)
```typescript
// From libraries array in page.tsx
"from-orange-400 to-orange-600"    // Films
"from-sky-400 to-blue-600"         // Séries
"from-pink-500 to-fuchsia-600"     // Animés
"from-emerald-400 to-green-600"    // Films d'animation
```

## Typography

### Fonts (layout.tsx)
```typescript
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
```

### Applied Classes
```tsx
// Root layout
className={cn(
  "h-full", "antialiased",
  geistSans.variable, geistMono.variable,
  "font-sans", inter.variable
)}

// Dashboard text hierarchy
text-xl font-bold           // Logo "Medivia"
text-[10px] font-medium     // "Media Directory"
text-xs font-semibold       // Nav items
text-3xl font-black         // Hero title
text-xs                     // Body text
text-[9px]                  // Tiny labels
```

## Spacing & Sizing

### Fixed Dimensions (Dashboard)
```tsx
w-[1450px] h-[860px]      // Main container
w-[280px]                 // Sidebar width
h-[280px]                 // Hero height
h-[68px]                  // Library card height
aspect-[3/4]              // Media card poster
w-9 h-9                   // Logo icon
w-7 h-7                   // User avatar
w-12 h-12                 // Icon buttons
h-12                      // Input/button height
```

### Responsive Breakpoints
```tsx
md:block                  // Sidebar visible on md+
hidden md:flex            // Desktop only
max-w-[85%]               // Category filter max width
```

## Border Radius Scale
```css
/* From globals.css @theme */
--radius-sm: calc(var(--radius) * 0.6);   /* ~0.375rem = 6px */
--radius-md: calc(var(--radius) * 0.8);   /* ~0.5rem = 8px */
--radius-lg: var(--radius);                /* 0.625rem = 10px */
--radius-xl: calc(var(--radius) * 1.4);    /* ~0.875rem = 14px */
--radius-2xl: calc(var(--radius) * 1.8);   /* ~1.125rem = 18px */
--radius-3xl: calc(var(--radius) * 2.2);   /* ~1.375rem = 22px */
--radius-4xl: calc(var(--radius) * 2.6);   /* ~1.625rem = 26px */

/* Dashboard custom */
rounded-[32px]        // Main container
rounded-[24px]        // Hero card
rounded-2xl           // Media cards (1rem = 16px)
rounded-xl            // Buttons, inputs (0.75rem = 12px)
rounded-lg            // Small elements (0.5rem = 8px)
rounded-md            // Badges (0.375rem = 6px)
```

## Shadow System
```tsx
// Dashboard custom shadows
shadow-[0_24px_70px_rgba(0,0,0,0.7)]    // Main container
shadow-md shadow-amber-500/10           // Logo
shadow-2xl                              // Hero card
shadow-lg                               // CTA buttons
shadow-inner                            // Active nav item
shadow-xl                               // Stacked hero cards
```

## Animation Classes (GSAP Targets)

### CSS Classes for GSAP
```tsx
// In page.tsx - classes targeted by GSAP
className="anim-sidebar"    // Sidebar entrance
className="anim-topbar"     // Topbar entrance
className="anim-hero"       // Hero entrance
className="anim-card"       // Card stagger entrance

// Hover transitions (pure CSS)
transition-all              // Most interactive elements
transition-transform duration-500  // Image zoom
transition-opacity           // Overlay fade
duration-300                // Play button
```

### Tailwind Animation Utilities
```tsx
// From tw-animate-css (imported in globals.css)
animate-in                  // Entrance
animate-out                 // Exit
fade-in                     // Opacity
slide-in-from-left          // X transform
zoom-in                     // Scale
// etc.
```

## Component Styling Patterns

### shadcn/ui Button (components/ui/button.tsx)
```tsx
// Base
"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"

// Variants via CVA
default: "bg-primary text-primary-foreground hover:bg-primary/90"
destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
ghost: "hover:bg-accent hover:text-accent-foreground"
link: "text-primary underline-offset-4 hover:underline"

// Sizes
default: "h-10 px-4 py-2"
sm: "h-9 rounded-md px-3"
lg: "h-11 rounded-md px-8"
xl: "h-12 rounded-md px-10"
icon: "h-10 w-10"
icon-sm: "h-8 w-8"
```

### shadcn/ui Input (components/ui/input.tsx)
```tsx
"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
```

### shadcn/ui Card (components/ui/card.tsx)
```tsx
Card: "rounded-lg border bg-card text-card-foreground shadow-sm"
CardHeader: "flex flex-col space-y-1.5 p-6"
CardTitle: "text-2xl font-semibold leading-none tracking-tight"
CardDescription: "text-sm text-muted-foreground"
CardContent: "p-6 pt-0"
CardFooter: "flex items-center p-6 pt-0"
```

## Dark Mode Strategy

### Class-based (next-themes)
```tsx
// layout.tsx
<html className={cn(..., "font-sans", inter.variable)}>

// globals.css
@custom-variant dark (&:is(.dark *));

.dark {
  --background: oklch(0.145 0 0);
  /* ... */
}
```

### Dashboard Override
The dashboard **forces dark mode** with hardcoded colors:
```tsx
className="min-h-screen bg-[#1a1f26] ..."  // Ignores theme
```

## Utility Helpers

### cn() (lib/utils.ts)
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Usage Patterns
```tsx
// Conditional classes
className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "outline" && "outline-classes"
)}

// Merging conflicting Tailwind classes
className={cn("p-4", "p-2")}  // Results in p-2
```

## Responsive Patterns

### Mobile-First (Sidebar)
```tsx
// Sidebar.tsx
if (isMobile) {
  return <Sheet>...</Sheet>  // Mobile: bottom sheet
}
return <div className="md:block hidden">...</div>  // Desktop: fixed sidebar
```

### Container Queries (Sidebar)
```tsx
group-data-[collapsible=icon]:w-(--sidebar-width-icon)
group-data-[collapsible=offcanvas]:w-0
```

## Related Memories
- [[memory-index]] - Main index
- [[project-structure]] - File tree
- [[component-map]] - Component relationships