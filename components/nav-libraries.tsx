"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FilmIcon,
  TvIcon,
  SparklesIcon,
  ClapperboardIcon,
} from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const libraries = [
  {
    title: "Films",
    color: "from-orange-400 to-orange-600",
    progress: "248",
    icon: FilmIcon,
    cover: "/img/cover-1.jpeg",
  },
  {
    title: "Séries",
    color: "from-sky-400 to-blue-600",
    progress: "84",
    icon: TvIcon,
    cover: "/img/cover-2.jpg",
  },
  {
    title: "Animés",
    color: "from-pink-500 to-fuchsia-600",
    progress: "132",
    icon: SparklesIcon,
    cover: "/img/cover-3.jpg",
  },
  {
    title: "Films d'animation",
    color: "from-emerald-400 to-green-600",
    progress: "76",
    icon: ClapperboardIcon,
    cover: "/img/cover-4.jpg",
  },
];

export function NavLibraries() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
        Bibliothèques
      </SidebarGroupLabel>
      <SidebarGroupContent className={isCollapsed ? "p-0" : "space-y-2"}>
        {isCollapsed ? (
          // Mode collapsed: afficher les covers en grille avec tooltips
          <div className="space-y-2 ">
            {libraries.map((lib) => (
              <Tooltip key={lib.title}>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="group relative flex aspect-square items-center justify-center rounded-lg overflow-hidden border border-zinc-700/50 hover:border-zinc-600 transition-all hover:scale-105"
                  >
                    <Image
                      src={lib.cover}
                      alt={lib.title}
                      fill
                      className="object-cover group-hover:brightness-110 transition-all"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[9px] font-bold text-white truncate">
                        {lib.title}
                      </span>
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xs">{lib.title}</p>
                    <p className="text-[10px] text-zinc-300">
                      {lib.progress} éléments
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        ) : (
          // Mode expanded: afficher la liste complète
          <>
            {libraries.map((lib) => (
              <a
                key={lib.title}
                href="#"
                className="group relative flex h-17 items-center gap-3 rounded-xl bg-[#181e26] p-3.5 border border-white/2 transition-all hover:border-white/8 hover:bg-[#1c222b]"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg overflow-hidden shrink-0 border border-white/5">
                  <Image
                    src={lib.cover}
                    alt={lib.title}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-zinc-200 group-hover:text-white truncate transition-colors">
                    {lib.title}
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    {lib.progress} éléments
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-wider bg-white/4 px-1.5 py-0.5 rounded border border-white/2 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Suivi
                </span>
              </a>
            ))}
          </>
        )}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
