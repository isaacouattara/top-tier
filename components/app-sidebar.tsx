"use client";

import * as React from "react";

import { NavMedia } from "@/components/nav-media";
import { NavLibraries } from "@/components/nav-libraries";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { LayoutBottomIcon } from "@hugeicons/core-free-icons";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="relative p-2">
        <div className="relative flex h-12 items-center gap-2 rounded-[calc(var(--radius-sm)+2px)] px-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <div className="group/logo relative flex size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <HugeiconsIcon
              icon={LayoutBottomIcon}
              strokeWidth={2}
              className="transition duration-150 group-data-[collapsible=icon]:group-hover/logo:scale-90 group-data-[collapsible=icon]:group-hover/logo:opacity-0"
            />
            <SidebarTrigger className="pointer-events-none absolute inset-0 hidden size-8 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground opacity-0 shadow-none transition duration-150 hover:bg-sidebar-accent group-data-[collapsible=icon]:flex group-hover/logo:pointer-events-auto group-hover/logo:opacity-100" />
          </div>

          <div className="grid min-w-0 flex-1 text-left text-sm leading-tight transition group-data-[collapsible=icon]:hidden">
            <span className="truncate font-semibold">Top Tier</span>
            <span className="truncate text-xs text-sidebar-foreground/60">
              Media tracker
            </span>
          </div>

          <SidebarTrigger className="pointer-events-none ml-auto size-7 rounded-full border border-white/[0.06] bg-white/[0.04] text-sidebar-foreground/50 opacity-0 shadow-none transition hover:bg-white/[0.08] hover:text-sidebar-foreground group-hover:pointer-events-auto group-hover:opacity-100 group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMedia />
        <NavLibraries />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
