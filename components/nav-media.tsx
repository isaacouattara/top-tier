"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  LibraryIcon,
  Folder01Icon,
  Grid,
  RankingIcon,
  FavouriteIcon,
  Clock01Icon,
  CalendarIcon,
} from "@hugeicons/core-free-icons"

export function NavMedia() {
  const navItems = [
    { title: "Accueil", icon: Home01Icon, url: "#", isActive: true },
    { title: "Bibliothèques", icon: LibraryIcon, url: "#" },
    { title: "Collections", icon: Folder01Icon, url: "#" },
    { title: "Catégories", icon: Grid, url: "#" },
    { title: "Tier Lists", icon: RankingIcon, url: "#" },
    { title: "Calendrier", icon: CalendarIcon, url: "#" },
    { title: "Favoris", icon: FavouriteIcon, url: "#" },
    { title: "Historique", icon: Clock01Icon, url: "#" },
  ]

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Médias</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              variant={item.isActive ? "default" : "default"}
            >
              <a href={item.url}>
                <HugeiconsIcon icon={item.icon} size={16} strokeWidth={1.8} />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}