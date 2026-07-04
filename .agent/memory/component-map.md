---
name: component-map
description: Component relationships and data flow in top-tier
metadata:
  type: reference
---

# Component Map - top-tier

## App Layout Hierarchy

```
app/layout.tsx (RootLayout)
├── Providers: TooltipProvider, ThemeProvider (next-themes)
├── Fonts: Geist Sans, Geist Mono, Inter
└── children → app/page.tsx (MediviaDashboard)
```

## Main Dashboard (app/page.tsx)

```
MediaDashboard (client component)
├── State: libraries[], categories[], cards[] (static data)
├── Refs: containerRef (for GSAP)
├── Effects: GSAP timeline on mount
└── Render:
    ├── Main container (1450x860 fixed)
    │   ├── Sidebar (Left) - 280px fixed
    │   │   ├── Logo: Medivia + "Media Directory"
    │   │   ├── Nav Menu: 7 items (Accueil, Bibliothèques, Collections, Catégories, Tier Lists, Favoris, Historique)
    │   │   └── Libraries Section: 4 cards with colored bars + counts
    │   │
    │   └── Content Area (flex-1)
    │       ├── Topbar
    │       │   ├── Filter Dropdown "Tous les médias"
    │       │   ├── Search Input (with SearchIcon)
    │       │   ├── Settings Button
    │       │   └── User Profile Capsule (avatar + "Ma Bibliothèque" + "Premium")
    │       │
    │       └── Scrollable Content
    │           ├── Hero Carousel (280px height)
    │           │   ├── Background stacked cards (visual depth)
    │           │   ├── Main Hero Card (gradient overlay + content + 2 CTAs)
    │           │   └── GSAP class: .anim-hero
    │           │
    │           ├── Category Filter Bar (horizontal scroll)
    │           │   ├── 9 category pills (Tout, Films, Séries, Animés, Manga, Webtoon, Animation, Documentaires, Light Novel)
    │           │   └── Carousel nav arrows
    │           │
    │           └── Media Grid (5 cols, gap-4)
    │               └── MediaCard × 5 (Interstellar, Breaking Bad, Frieren, Solo Leveling, Blue Lock)
    │                   ├── Poster Image (3:4 aspect)
    │                   ├── Type Badge (top-left)
    │                   ├── Rating Badge (bottom-right, star + score)
    │                   ├── Hover Play Button (center)
    │                   └── Title + Year (below)
    │                   └── GSAP class: .anim-card (stagger)
```

## Sidebar System (components/ui/sidebar.tsx)

```
SidebarProvider (Context)
├── State: open, openMobile, isMobile
├── Cookie persistence (7 days)
├── Keyboard shortcut: Ctrl/Cmd + B
└── Provides: { state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar }

Components consuming context:
├── Sidebar (root)
│   ├── Variants: sidebar | floating | inset
│   ├── Collapsible: offcanvas | icon | none
│   └── Mobile: uses Sheet
├── SidebarTrigger → Button (ghost, icon) → toggles sidebar
├── SidebarRail → Visual drag handle (hidden on mobile)
├── SidebarInset → Main content wrapper (peer of Sidebar)
├── SidebarMenu → Navigation container
│   ├── SidebarMenuItem
│   ├── SidebarMenuButton → Link/button with icon + text + badge
│   ├── SidebarMenuSub (collapsible)
│   │   ├── SidebarMenuSubButton (chevron toggle)
│   │   └── SidebarMenuSubItem
│   └── SidebarMenuSeparator
└── SidebarHeader / SidebarFooter / SidebarContent / SidebarGroup
```

## App Sidebar Content (components/layout/sidebar.tsx + app-sidebar.tsx)

```
AppSidebar
├── SidebarProvider
├── Sidebar (variant="sidebar", collapsible="offcanvas")
│   ├── SidebarTrigger (top-left, mobile only)
│   ├── SidebarRail (drag handle)
│   ├── SidebarInset
│   │   └── SidebarContent (scrollable)
│   │       ├── NavMain (nav-main.tsx)
│   │       │   ├── Logo/Title
│   │       │   ├── Primary Nav (Dashboard, Projects, Team, Calendar, Settings)
│   │       │   └── Secondary Nav (Analytics, Reports, etc.)
│   │       ├── NavProjects (nav-projects.tsx) - collapsible project list
│   │       ├── NavUser (nav-user.tsx) - user profile + actions
│   │       └── TeamSwitcher (team-switcher.tsx)
│   └── SidebarSeparator (between sections)
```

## UI Component Patterns (shadcn/ui)

### Button Variants (components/ui/button.tsx)
```tsx
variants: {
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size: "default" | "sm" | "lg" | "xl" | "icon" | "icon-sm"
}
```

### Card Pattern (components/ui/card.tsx)
```
Card → CardHeader → CardTitle + CardDescription
    → CardContent
    → CardFooter
```

### Sidebar Menu Button Pattern
```tsx
<SidebarMenuButton 
  asChild 
  tooltip={tooltip} 
  tooltipPosition="right"
>
  <Link href={href}>
    <Icon /> <span>{label}</span>
  </Link>
</SidebarMenuButton>
```

## Data Flow Patterns

### Static Data (app/page.tsx)
```typescript
// All data defined inline as const arrays
const libraries = [...]
const categories = [...]
const cards = [...]
const menuIcons = { ... }
```

### Context-Based State (Sidebar)
```
SidebarProvider (React Context)
    ↓ provides
useSidebar() hook
    ↓ consumed by
SidebarTrigger, SidebarRail, Sidebar, SidebarInset, SidebarMenuButton, etc.
```

### Theme (next-themes)
```
ThemeProvider (layout.tsx)
    ↓
useTheme() hook in components
    ↓
className={theme === "dark" ? "dark" : ""}
```

## Animation Flow (GSAP)

```
MediaDashboard.mount
    ↓
gsap.context(containerRef)
    ↓
Timeline:
  1. .anim-sidebar (x: -40 → 0, opacity: 0→1, 0.6s)
  2. .anim-topbar (y: -20 → 0, opacity: 0→1, 0.5s) [-=0.4]
  3. .anim-hero (scale: 0.98→1, opacity: 0→1, 0.7s) [-=0.3]
  4. .anim-card (y: 30→0, opacity: 0→1, stagger 0.08, 0.5s) [-=0.2]
    ↓
Cleanup on unmount: ctx.revert()
```

## Key Import Paths

| Import | Path |
|--------|------|
| `cn` | `@/lib/utils` |
| `useIsMobile` | `@/hooks/use-mobile` |
| `Sidebar*` | `@/components/ui/sidebar` |
| `Button` | `@/components/ui/button` |
| `Input` | `@/components/ui/input` |
| `Tooltip*` | `@/components/ui/tooltip` |
| `Sheet*` | `@/components/ui/sheet` |
| `Skeleton` | `@/components/ui/skeleton` |
| `HugeiconsIcon` | `@hugeicons/react` |
| `*Icon` | `@hugeicons/core-free-icons` |
| `gsap` | `gsap` |

## Related Memories
- [[memory-index]] - Main index
- [[project-structure]] - File tree
- [[styling-guide]] - Styling patterns