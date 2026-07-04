"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  CalendarIcon,
  Clock01Icon,
  FavouriteIcon,
  FilmIcon,
  Folder01Icon,
  Grid,
  Home01Icon,
  LibraryIcon,
  PlayIcon,
  RankingIcon,
  SparklesIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navigationItems = [
  {
    title: "Accueil",
    url: "/",
    icon: Home01Icon,
    subtitle: "Vue globale du tracking",
  },
  {
    title: "Bibliotheques",
    url: "/",
    icon: LibraryIcon,
    subtitle: "Films, series, animes et lectures",
  },
  {
    title: "Collections",
    url: "/",
    icon: Folder01Icon,
    subtitle: "Playlists thematiques",
  },
  {
    title: "Tier Lists",
    url: "/",
    icon: RankingIcon,
    subtitle: "Classements visuels",
  },
];

const mediaItems = [
  {
    title: "Frieren",
    meta: "Anime • 2023 • 9.3",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=400&q=80",
    icon: StarIcon,
  },
  {
    title: "Interstellar",
    meta: "Film • 2014 • 9.1",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80",
    icon: FilmIcon,
  },
  {
    title: "Solo Leveling",
    meta: "Webtoon • En cours • 8.9",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    icon: SparklesIcon,
  },
];

const libraryItems = [
  { title: "Films vus", count: "248", icon: FilmIcon },
  { title: "Series terminees", count: "84", icon: PlayIcon },
  { title: "Mangas suivis", count: "76", icon: Grid },
  { title: "Favoris", count: "84", icon: FavouriteIcon },
];

const quickActions = [
  {
    title: "Creer une bibliotheque",
    url: "/",
    icon: Add01Icon,
    shortcut: "N",
  },
  {
    title: "Reprendre un contenu",
    url: "/",
    icon: Clock01Icon,
    shortcut: "R",
  },
  {
    title: "Voir le calendrier",
    url: "/",
    icon: CalendarIcon,
    shortcut: "C",
  },
  {
    title: "Crée une tier list",
    url: "/",
    icon: RankingIcon,
    shortcut: "T",
  },
];

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (url: string) => {
    router.push(url);
    onOpenChange(false);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Recherche Top Tier"
      description="Rechercher un media, une bibliotheque ou une action"
      className="top-[8vh] max-h-[86vh] max-w-[calc(100%-1rem)] translate-y-0 rounded-[32px]! border border-white/[0.08] bg-[#4b5c68]/95 p-0 text-white shadow-[0_32px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:max-w-[880px]"
    >
      <Command className="rounded-[32px] bg-transparent p-0 text-white">
        <div className="border-b border-white/[0.08] p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between px-1">
            <div>
              <h2 className="mt-1 text-lg font-black tracking-tight text-white">
                Explorer Top Tier
              </h2>
            </div>
            <span className="hidden rounded-full bg-[#0f141c] px-3 py-1.5 text-[10px] font-semibold text-zinc-400 sm:block">
              Ctrl K
            </span>
          </div>
          <div className=" ">
            <CommandInput
              placeholder="Titre, auteur, genre, bibliotheque..."
              className="h-11 px-3 text-sm font-semibold text-white placeholder:text-zinc-400"
            />
          </div>
        </div>

        <CommandList className="max-h-[62vh] px-3 py-3 sm:px-4">
          <CommandEmpty className="py-10 text-center text-sm text-zinc-300">
            Aucun media ou raccourci trouve.
          </CommandEmpty>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="min-w-0 space-y-3">
              <CommandGroup
                heading="Librairies"
                className="rounded-[26px] border border-white/[0.06] bg-[#0f141c]/70 p-2 text-white"
              >
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                  {libraryItems.map((item) => (
                    <CommandItem
                      key={item.title}
                      value={`${item.title} ${item.count}`}
                      onSelect={() => handleSelect("/")}
                      className="min-h-14 cursor-pointer rounded-[18px] p-3 text-white data-selected:bg-white/[0.08]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/[0.08] text-zinc-300">
                        <HugeiconsIcon
                          icon={item.icon}
                          size={15}
                          strokeWidth={1.8}
                        />
                      </span>
                      <span>
                        <span className="block text-xs font-bold">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-[11px] text-zinc-400">
                          {item.count} elements
                        </span>
                      </span>
                    </CommandItem>
                  ))}
                </div>
              </CommandGroup>
              <CommandGroup
                heading="Medias suivis"
                className="rounded-[26px] border border-white/[0.06] bg-white/[0.05] p-2 text-white"
              >
                {mediaItems.map((item) => (
                  <CommandItem
                    key={item.title}
                    value={`${item.title} ${item.meta}`}
                    onSelect={() => handleSelect("/")}
                    className="min-h-20 cursor-pointer rounded-[22px] p-2.5 text-white data-selected:bg-white/[0.1]"
                  >
                    <div
                      className="h-12 w-12 shrink-0 rounded-2xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{item.title}</p>
                      <p className="mt-1 text-xs text-zinc-400">{item.meta}</p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f141c] text-zinc-300">
                      <HugeiconsIcon
                        icon={item.icon}
                        size={15}
                        strokeWidth={1.8}
                      />
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>

            <div className="space-y-3">
              <CommandGroup
                heading="Actions rapides"
                className="rounded-[26px] border border-white/[0.06] bg-white/[0.05] p-2 text-white"
              >
                {quickActions.map((action) => (
                  <CommandItem
                    key={action.title}
                    value={action.title}
                    onSelect={() => handleSelect(action.url)}
                    className="min-h-12 cursor-pointer rounded-[18px] p-3 text-white data-selected:bg-white/[0.1]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950">
                      <HugeiconsIcon
                        icon={action.icon}
                        size={14}
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-xs font-bold">{action.title}</span>
                    <CommandShortcut className="rounded-full bg-[#0f141c] px-2 py-1 text-[10px] text-zinc-400">
                      {action.shortcut}
                    </CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup
                heading="Navigation"
                className="rounded-[26px] border border-white/[0.06] bg-white/[0.05] p-2 text-white"
              >
                <div className="grid gap-2 ">
                  {navigationItems.map((item) => (
                    <CommandItem
                      key={item.title}
                      value={`${item.title} ${item.subtitle}`}
                      onSelect={() => handleSelect(item.url)}
                      className="min-h-16 cursor-pointer rounded-[20px] p-3 text-white data-selected:bg-white/[0.1]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0f141c] text-zinc-300">
                        <HugeiconsIcon
                          icon={item.icon}
                          size={16}
                          strokeWidth={1.8}
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold">
                          {item.title}
                        </span>
                        <span className="mt-1 block truncate text-[11px] text-zinc-400">
                          {item.subtitle}
                        </span>
                      </span>
                    </CommandItem>
                  ))}
                </div>
              </CommandGroup>
            </div>
          </div>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
