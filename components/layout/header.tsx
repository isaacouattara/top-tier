"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  LibraryIcon,
  Folder01Icon,
  Grid,
  RankingIcon,
  FavouriteIcon,
  Clock01Icon,
  ArrowRight01Icon,
  Notification01Icon,
  SearchIcon,
  Menu01Icon,
  MultiplicationSignIcon,
  CalendarIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { SearchCommand } from "@/components/layout/searchCommand";
import { NavUser } from "@/components/nav-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  currentPage: string;
  onPageChange: (pageName: string) => void;
}

const user = {
  name: "Sarah J",
  email: "Premium",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
};

const notifications = [
  {
    title: "Nouveau chapitre disponible",
    subtitle: "Solo Leveling est pret dans votre bibliotheque.",
    time: "2 min",
  },
  {
    title: "Tier list sauvegardee",
    subtitle: "Votre classement Films 2026 a ete mis a jour.",
    time: "18 min",
  },
  {
    title: "Objectif hebdo atteint",
    subtitle: "5 episodes termines cette semaine.",
    time: "1 h",
  },
];

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuCardRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const tl = gsap.timeline();

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.24, ease: "power2.out" },
    )
      .fromTo(
        closeBtnRef.current,
        { opacity: 0, scale: 0.7, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: "back.out(1.7)" },
        "-=0.05",
      )
      .fromTo(
        menuCardRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.45, ease: "power4.out" },
        "-=0.18",
      );

    if (menuContentRef.current) {
      tl.fromTo(
        menuContentRef.current.querySelectorAll(".menu-nav-item"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.045,
          duration: 0.28,
          ease: "power3.out",
        },
        "-=0.22",
      );
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsOpen(false),
    });

    tl.to(menuCardRef.current, {
      yPercent: 100,
      duration: 0.28,
      ease: "power3.in",
    })
      .to(closeBtnRef.current, { opacity: 0, scale: 0.8, duration: 0.16 }, "<")
      .to(overlayRef.current, { opacity: 0, duration: 0.18 }, "<");
  };

  const menuItems = [
    {
      name: "Accueil",
      link: "#",
      subtitle: "Tableau de bord",
      icon: Home01Icon,
    },
    {
      name: "Bibliotheques",
      link: "#",
      subtitle: "Mes collections",
      icon: LibraryIcon,
    },
    {
      name: "Collections",
      link: "#",
      subtitle: "Playlists thematiques",
      icon: Folder01Icon,
    },
    { name: "Categories", link: "#", subtitle: "Filtres par type", icon: Grid },
    {
      name: "Tier Lists",
      link: "#",
      subtitle: "Classements visuels",
      icon: RankingIcon,
    },
    {
      name: "Calendrier",
      link: "#",
      subtitle: "Evenements a venir",
      icon: CalendarIcon,
    },
    {
      name: "Favoris",
      link: "#",
      subtitle: "Oeuvres preferees",
      icon: FavouriteIcon,
    },
    {
      name: "Historique",
      link: "#",
      subtitle: "Activite recente",
      icon: Clock01Icon,
    },
  ];

  const libraryItems = [
    { name: "Films", count: "248", icon: LibraryIcon },
    { name: "Series", count: "84", icon: Grid },
    { name: "Animes", count: "132", icon: FavouriteIcon },
    { name: "Mangas", count: "76", icon: Folder01Icon },
  ];

  const quickItems = [
    {
      name: "Nouvelle bibliotheque",
      subtitle: "Creer un espace",
      icon: LibraryIcon,
    },
    {
      name: "Tier list rapide",
      subtitle: "Lancer un classement",
      icon: RankingIcon,
    },
    { name: "A reprendre", subtitle: "9 contenus en cours", icon: Clock01Icon },
  ];

  return (
    <>
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />

      <header
        ref={headerRef}
        className="relative p-2 md:p-0 z-50 flex w-full items-center justify-between gap-3 "
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
              Top Tier
            </p>
            <h1 className="mt-0.5 truncate text-base font-black tracking-tight text-white">
              {currentPage}
            </h1>
          </div>
        </div>

        <button
          onClick={() => setSearchOpen(true)}
          className="hidden min-w-[280px] items-center gap-3 rounded-full border border-white/[0.04] bg-[#212c3d] p-1 pl-1 text-left shadow-inner transition hover:bg-[#141a24] lg:flex"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c232e] text-zinc-300">
            <HugeiconsIcon icon={SearchIcon} size={14} strokeWidth={2} />
          </span>
          <span className="flex-1 text-xs font-semibold tracking-wide text-zinc-400">
            Rechercher
          </span>
          <kbd className="mr-1 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-zinc-400">
            Ctrl K
          </kbd>
        </button>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.06] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white md:flex lg:hidden"
            aria-label="Rechercher"
          >
            <HugeiconsIcon icon={SearchIcon} size={16} strokeWidth={1.8} />
          </button>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.06] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white md:hidden"
            aria-label="Rechercher"
          >
            <HugeiconsIcon icon={SearchIcon} size={16} strokeWidth={1.8} />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.06] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white data-[state=open]:bg-white/[0.1]"
                aria-label="Notifications"
              >
                <HugeiconsIcon
                  icon={Notification01Icon}
                  size={16}
                  strokeWidth={1.8}
                />
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#4b5c68] bg-red-500 text-[9px] font-bold text-white">
                  8
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-80 rounded-[24px] border-white/10 bg-[#0f141c] p-2 text-zinc-200 shadow-2xl shadow-black/40"
            >
              <DropdownMenuLabel className="flex items-center justify-between px-3 py-2 text-white">
                <span className="text-sm font-bold">Notifications</span>
                <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-bold text-red-300">
                  8 new
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <div className="flex flex-col gap-1 py-1">
                {notifications.map((item) => (
                  <button
                    key={item.title}
                    className="flex w-full items-start gap-3 rounded-2xl p-2.5 text-left transition hover:bg-white/[0.06]"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold text-white">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[11px] leading-4 text-zinc-400">
                        {item.subtitle}
                      </span>
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-zinc-500">
                      {item.time}
                    </span>
                  </button>
                ))}
              </div>
              <DropdownMenuSeparator className="bg-white/10" />
              <button className="w-full rounded-2xl px-3 py-2 text-center text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.06] hover:text-white">
                Tout afficher
              </button>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavUser user={user} />

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.06] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white md:hidden"
            aria-label="Ouvrir le menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={17} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          <div
            ref={overlayRef}
            onClick={handleClose}
            className="absolute inset-0 bg-black/55 opacity-0 backdrop-blur-sm"
          />

          <div className="relative z-10 mb-4 flex w-full justify-center">
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-2xl transition hover:scale-95"
              aria-label="Fermer le menu"
            >
              <HugeiconsIcon
                icon={MultiplicationSignIcon}
                size={18}
                strokeWidth={2.4}
              />
            </button>
          </div>

          <div
            ref={menuCardRef}
            style={{ transform: "translateY(100%)", opacity: 0 }}
            className="relative z-10 max-h-[86vh] w-full overflow-y-auto rounded-t-[32px] border border-white/[0.08] bg-[#4b5c68] px-5 pb-6 pt-7 text-white shadow-2xl"
          >
            <div ref={menuContentRef} className="space-y-7">
              <div className="menu-nav-item flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                    Top Tier
                  </p>
                  <h2 className="mt-1 text-2xl font-black tracking-tight">
                    Menu
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    handleClose();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f141c] text-zinc-300"
                  aria-label="Rechercher"
                >
                  <HugeiconsIcon icon={SearchIcon} size={17} strokeWidth={2} />
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = currentPage === item.name;

                  return (
                    <Link
                      href={item.link}
                      key={item.name}
                      onClick={() => {
                        onPageChange(item.name);
                        handleClose();
                      }}
                      className={`menu-nav-item group flex items-center justify-between rounded-[22px] p-3 transition ${
                        isActive
                          ? "bg-white/[0.14] text-white"
                          : "text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                            isActive ? "bg-white/[0.16]" : "bg-white/[0.06]"
                          }`}
                        >
                          <HugeiconsIcon
                            icon={item.icon}
                            size={17}
                            strokeWidth={isActive ? 2.2 : 1.8}
                          />
                        </span>
                        <span>
                          <span className="block text-[20px] font-bold leading-tight tracking-tight">
                            {item.name}
                          </span>
                          <span className="mt-1 block text-[11px] font-medium text-zinc-400">
                            {item.subtitle}
                          </span>
                        </span>
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-zinc-400 transition group-hover:text-white">
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={14}
                          strokeWidth={2.2}
                        />
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <section className="menu-nav-item">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold">
                    Acces rapide aux librairies
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Tracking
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {libraryItems.map((item) => (
                    <button
                      key={item.name}
                      className="rounded-[22px] border border-white/[0.06] bg-white/[0.06] p-3 text-left transition hover:bg-white/[0.1]"
                    >
                      <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0f141c] text-zinc-300">
                        <HugeiconsIcon
                          icon={item.icon}
                          size={16}
                          strokeWidth={1.8}
                        />
                      </span>
                      <span className="block text-lg font-black">
                        {item.count}
                      </span>
                      <span className="mt-1 block text-xs font-medium text-zinc-400">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="menu-nav-item space-y-2">
                <h3 className="text-sm font-bold">Volets rapides</h3>
                {quickItems.map((item) => (
                  <button
                    key={item.name}
                    className="flex w-full items-center justify-between rounded-[20px] bg-[#0f141c]/70 p-3 text-left transition hover:bg-[#0f141c]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/[0.08]">
                        <HugeiconsIcon
                          icon={item.icon}
                          size={15}
                          strokeWidth={1.8}
                        />
                      </span>
                      <span>
                        <span className="block text-sm font-bold">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-zinc-400">
                          {item.subtitle}
                        </span>
                      </span>
                    </span>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={14}
                      className="text-zinc-500"
                      strokeWidth={2.2}
                    />
                  </button>
                ))}
              </section>

              <div className="menu-nav-item flex items-center justify-between border-t border-white/[0.08] pt-5">
                <div>
                  <p className="text-sm font-bold">{user.name}</p>
                  <p className="mt-1 text-xs text-zinc-400">{user.email}</p>
                </div>
                <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition hover:bg-zinc-200">
                  Compte
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
