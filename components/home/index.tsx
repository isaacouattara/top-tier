
"use client";

import { useEffect, useRef, useState } from "react";
import AdminShell from "@/components/layout/adminShell";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  FavouriteIcon,
  FilmIcon,
  FilterIcon,
  FireIcon,
  FlashIcon,
  Folder01Icon,
  Grid,
  LibraryIcon,
  MenuTwoLineIcon,
  MoonIcon,
  PlayIcon,
  RankingIcon,
  SmileIcon,
  SparklesIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { gsap } from "gsap";

const categories = [
  { name: "Tout", icon: FireIcon },
  { name: "Films", icon: FilmIcon },
  { name: "Series", icon: PlayIcon },
  { name: "Animes", icon: SmileIcon },
  { name: "Mangas", icon: FlashIcon },
  { name: "Webtoon", icon: FavouriteIcon },
  { name: "Light Novel", icon: MoonIcon },
  { name: "Tier Lists", icon: RankingIcon },
];

const heroPanels = [
  {
    title: "Demon Slayer: Infinity Castle",
    subtitle: "Anime ajoute a la watchlist",
    cta: "Continuer le suivi",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1000&q=80",
    overlay: "from-[#17385c]/95 via-[#1a446c]/65 to-transparent",
  },
  {
    title: "Bibliotheque mangas en progression",
    subtitle: "76 titres classes et notes",
    cta: "Voir la collection",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000&q=80",
    overlay: "from-[#59768a]/95 via-[#6a8b9f]/55 to-transparent",
  },
];

const media = [
  {
    title: "Frieren",
    year: 2023,
    type: "Anime",
    rating: "9.3",
    category: "Animes",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=700&q=80",
  },
  {
    title: "Interstellar",
    year: 2014,
    type: "Film",
    rating: "9.1",
    category: "Films",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=700&q=80",
  },
  {
    title: "Solo Leveling",
    year: 2024,
    type: "Manhwa",
    rating: "8.9",
    category: "Webtoon",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700&q=80",
  },
  {
    title: "The Bear",
    year: 2022,
    type: "Serie",
    rating: "8.8",
    category: "Series",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80",
  },
  {
    title: "Vagabond",
    year: 1998,
    type: "Manga",
    rating: "9.7",
    category: "Mangas",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700&q=80",
  },
  {
    title: "Omniscient Reader",
    year: 2018,
    type: "Light Novel",
    rating: "9.0",
    category: "Light Novel",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&q=80",
  },
];

const libraries = [
  { label: "Films vus", value: "248", progress: "82%" },
  { label: "Series terminees", value: "84", progress: "64%" },
  { label: "Animes en cours", value: "12", progress: "46%" },
  { label: "Mangas suivis", value: "76", progress: "71%" },
];

export default function Home() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState("Accueil");
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".anim-board",
        { scale: 0.98, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55, ease: "power4.out" },
      )
        .fromTo(
          ".anim-hero",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: "power3.out" },
          "-=0.25",
        )
        .fromTo(
          ".anim-pill",
          { x: -10, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.04, ease: "power2.out" },
          "-=0.2",
        )
        .fromTo(
          ".anim-media-card",
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.38, stagger: 0.06, ease: "power3.out" },
          "-=0.1",
        );
    }, boardRef);

    return () => ctx.revert();
  }, []);

  const filteredMedia =
    selectedCategory === "Tout"
      ? media
      : media.filter((item) => item.category === selectedCategory);

  return (
    <AdminShell currentPage={currentPage} onPageChange={setCurrentPage}>
        <div ref={boardRef} className="anim-board">
          <section className="grid gap-5 lg:grid-cols-2">
            {heroPanels.map((panel) => (
              <article
                key={panel.title}
                className="anim-hero group relative h-[220px] overflow-hidden rounded-lg border border-white/[0.08] shadow-lg sm:h-[250px]"
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${panel.overlay}`} />
                <div className="absolute inset-0 flex flex-col items-start justify-between p-6 sm:p-8">
                  <div>
                    <p className="mb-3 inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase text-zinc-200 backdrop-blur">
                      {panel.subtitle}
                    </p>
                    <h2 className="max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {panel.title}
                    </h2>
                  </div>
                  <button className="flex items-center gap-2.5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white backdrop-blur-md transition hover:bg-black/45">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                      <HugeiconsIcon icon={PlayIcon} size={8} fill="black" />
                    </span>
                    <span className="text-[11px] font-semibold">{panel.cta}</span>
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-5 flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
            {categories.map((category) => {
              const isSelected = selectedCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`anim-pill flex shrink-0 items-center gap-2.5 rounded-[20px] border px-5 py-3 text-xs font-semibold transition-all ${
                    isSelected
                      ? "border-white/[0.25] bg-white/[0.22] text-white shadow-md"
                      : "border-white/[0.03] bg-white/[0.05] text-zinc-300 hover:bg-white/[0.09] hover:text-white"
                  }`}
                >
                  <HugeiconsIcon
                    icon={category.icon}
                    size={14}
                    color="currentColor"
                    strokeWidth={2}
                  />
                  {category.name}
                </button>
              );
            })}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase text-zinc-400">
                    Exploration
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    Trending dans {selectedCategory}
                  </h2>
                </div>
                <div className="flex rounded-full border border-white/[0.04] bg-black/30 p-1">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:text-white"
                    aria-label="Vue liste"
                  >
                    <HugeiconsIcon icon={MenuTwoLineIcon} size={13} />
                  </button>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c232e] text-white shadow-sm"
                    aria-label="Filtres"
                  >
                    <HugeiconsIcon icon={FilterIcon} size={13} />
                  </button>
                </div>
              </div>

              <div className="grid gap-5 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6">
                {filteredMedia.map((item) => (
                  <article
                    key={item.title}
                    className="anim-media-card group flex cursor-pointer flex-col gap-2"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] border border-white/[0.06] bg-white/[0.02] shadow-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                      <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                        {item.type}
                      </span>
                      <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-zinc-950">
                        <HugeiconsIcon icon={StarIcon} size={11} />
                        {item.rating}
                      </span>
                    </div>
                    <div className="px-1">
                      <h3 className="truncate text-xs font-bold text-white transition group-hover:text-zinc-200">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-[10px] font-medium text-zinc-400">
                        <span className="text-amber-400">{item.rating}</span>
                        <span>{item.year}</span>
                        <span>{item.category}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.05] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-zinc-400">
                      Bibliotheques
                    </p>
                    <h2 className="mt-1 text-base font-bold text-white">
                      Progression
                    </h2>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-zinc-200">
                    <HugeiconsIcon icon={LibraryIcon} size={15} />
                  </span>
                </div>
                <div className="space-y-4">
                  {libraries.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-zinc-200">
                          {item.label}
                        </span>
                        <span className="text-xs font-bold text-white">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-black/25">
                        <div
                          className="h-full rounded-full bg-white/70"
                          style={{ width: item.progress }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/[0.06] bg-[#0f141c]/80 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-10 sm:w-15 items-center justify-center rounded-full bg-white text-zinc-950">
                    <HugeiconsIcon icon={SparklesIcon} size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Nouvelle bibliotheque
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Creez un espace pour suivre une collection precise.
                    </p>
                  </div>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition hover:bg-zinc-200">
                  Creer
                  <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
                </button>
              </div>

              <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.05] p-4">
                <div className="mb-3 flex items-center gap-2 text-white">
                  <HugeiconsIcon icon={Folder01Icon} size={15} />
                  <h2 className="text-sm font-bold">Collections actives</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Favoris", "A finir", "Top 2026", "Classiques"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.08] px-3 py-1.5 text-[11px] font-semibold text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>
    </AdminShell>
  );
}

