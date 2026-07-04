---
name: memory-index
description: Main index of all memory files for top-tier project
metadata:
  type: reference
---

# Memory Index - top-tier

## Created Memory Files

| File | Description | Purpose |
|------|-------------|---------|
| `memory-index.md` | This file | Main index/navigation |
| `project-structure.md` | Complete file tree + configs | Find any file quickly |
| `component-map.md` | Component hierarchy + data flow | Understand relationships |
| `styling-guide.md` | Tailwind v4 + shadcn patterns | Styling reference |

## Quick Navigation

### Need to find a file?
→ **project-structure.md** - Complete tree with all paths

### Need to understand component relationships?
→ **component-map.md** - Hierarchy, data flow, import paths

### Need to check styling conventions?
→ **styling-guide.md** - Colors, spacing, radius, shadows, dark mode

### Need high-level project info?
→ **MEMORY.md** (root) - Overview + key commands

## Project Summary

**top-tier** = Next.js 15 + React 19 + Tailwind v4 + shadcn/ui
- **Main page**: `app/page.tsx` → Medivia Media Dashboard
- **UI lib**: 39 shadcn components in `components/ui/`
- **Sidebar**: Complex system in `components/ui/sidebar.tsx` (683 lines)
- **Animations**: GSAP in dashboard
- **Icons**: Hugeicons (React + core-free-icons)

## Key Entry Points

| Task | Start Here |
|------|------------|
| Modify dashboard UI | `app/page.tsx` |
| Add new page | `app/[name]/page.tsx` |
| Use UI component | `components/ui/[component].tsx` |
| Modify sidebar | `components/ui/sidebar.tsx` or `components/app-sidebar.tsx` |
| Change theme/colors | `app/globals.css` |
| Add utility | `lib/utils.ts` |
| Mobile logic | `hooks/use-mobile.ts` |