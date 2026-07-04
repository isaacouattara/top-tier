"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Importations strictes Hugeicons (Séparation Package React / Coeur d'icônes)
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SearchIcon,
  Settings01Icon,
  Home01Icon,
  LibraryIcon,
  Folder01Icon,
  Grid,
  RankingIcon,
  FavouriteIcon,
  Clock01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  StarIcon,
  PlayIcon,
} from "@hugeicons/core-free-icons";

export default function MediaDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  const libraries = [
    { title: "Films", color: "from-orange-400 to-orange-600", progress: "248" },
    { title: "Séries", color: "from-sky-400 to-blue-600", progress: "84" },
    { title: "Animés", color: "from-pink-500 to-fuchsia-600", progress: "132" },
    {
      title: "Films d'animation",
      color: "from-emerald-400 to-green-600",
      progress: "76",
    },
  ];

  const categories = [
    "Tout",
    "Films",
    "Séries",
    "Animés",
    "Manga",
    "Webtoon",
    "Animation",
    "Documentaires",
    "Light Novel",
  ];

  const cards = [
    {
      title: "Interstellar",
      year: 2014,
      type: "Film",
      rate: "9.1",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
    },
    {
      title: "Breaking Bad",
      year: 2008,
      type: "Série",
      rate: "9.8",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    },
    {
      title: "Frieren",
      year: 2023,
      type: "Animé",
      rate: "9.3",
      image:
        "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=600&q=80",
    },
    {
      title: "Solo Leveling",
      year: 2024,
      type: "Manhwa",
      rate: "9.0",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80",
    },
    {
      title: "Blue Lock",
      year: 2022,
      type: "Manga",
      rate: "8.8",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
    },
  ];

  // Association d'icônes pour le menu latéral de la maquette
  const menuIcons: Record<string, any> = {
    Accueil: Home01Icon,
    Bibliothèques: LibraryIcon,
    Collections: Folder01Icon,
    Catégories: Grid,
    "Tier Lists": RankingIcon,
    Favoris: FavouriteIcon,
    Historique: Clock01Icon,
  };

  useEffect(() => {
    // Initialisation des animations fluides GSAP au chargement global de la vue
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".anim-sidebar",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      )
        .fromTo(
          ".anim-topbar",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".anim-hero",
          { scale: 0.98, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "power4.out" },
          "-=0.3",
        )
        .fromTo(
          ".anim-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#1a1f26] flex items-center justify-center p-6 selection:bg-white/10"
    >
      {/* Container Principal répliquant fidèlement original-87d43556d4fe0ac75f6c1f16636e69c0.webp */}
      <div className="w-[1450px] h-[860px] rounded-[32px] bg-[#13171c] shadow-[0_24px_70px_rgba(0,0,0,0.7)] overflow-hidden flex border border-white/[0.03]">
        {/* ─── SIDEBAR GAUCHE ─── */}
        <aside className="anim-sidebar w-[280px] bg-[#0f1318] border-r border-white/[0.04] flex flex-col justify-between py-6">
          <div>
            {/* Header Logo */}
            <div className="px-7 pb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#ffc529] flex items-center justify-center text-black shadow-md shadow-amber-500/10">
                <span className="text-lg font-black leading-none">▣</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold tracking-tight leading-none">
                  Medivia
                </h1>
                <p className="text-[10px] text-zinc-500 tracking-wider font-medium mt-1 uppercase">
                  Media Directory
                </p>
              </div>
            </div>

            {/* Navigation Menus */}
            <nav className="px-4 mt-4 space-y-1">
              {[
                "Accueil",
                "Bibliothèques",
                "Collections",
                "Catégories",
                "Tier Lists",
                "Favoris",
                "Historique",
              ].map((item) => {
                const isActive = item === "Accueil";
                const Icon = menuIcons[item] || Home01Icon;
                return (
                  <button
                    key={item}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-[#1c222b] text-white shadow-inner"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
                    }`}
                  >
                    <HugeiconsIcon
                      icon={Icon}
                      size={16}
                      color="currentColor"
                      strokeWidth={1.8}
                    />
                    {item}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Section Inférieure : Compteurs de Bilbliothèques */}
          <div className="px-4 space-y-2">
            <span className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase pl-3 block mb-1">
              Bibliothèques
            </span>
            <div className="space-y-2 max-h-[240px] overflow-y-auto no-scrollbar pr-1">
              {libraries.map((lib) => (
                <div
                  key={lib.title}
                  className="rounded-xl overflow-hidden bg-[#181e26] border border-white/[0.02] h-[68px] relative group cursor-pointer transition-all hover:border-white/[0.08]"
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${lib.color}`}
                  />
                  <div className="h-full p-3.5 flex flex-col justify-between relative z-10">
                    <div className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                      {lib.title}
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-zinc-500">
                      <span className="font-medium text-zinc-400">
                        {lib.progress} éléments
                      </span>
                      <span className="text-[9px] uppercase tracking-wider bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.02]">
                        Suivi
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ─── ESPACE DE CONTENU CENTRAL ─── */}
        <section className="flex-1 p-7 flex flex-col overflow-hidden bg-[#13171c]">
          {/* TOPBAR UTILITAIRES */}
          <div className="anim-topbar flex items-center gap-4 pb-1">
            <button className="bg-[#1c222b] border border-white/[0.02] hover:bg-[#232b36] rounded-xl px-5 h-12 text-xs font-bold text-zinc-200 whitespace-nowrap transition-all flex items-center gap-2">
              Tous les médias{" "}
              <span className="text-[9px] text-zinc-500">▼</span>
            </button>

            <div className="flex-1 relative flex items-center">
              <div className="absolute left-4 text-zinc-500">
                <HugeiconsIcon icon={SearchIcon} size={14} />
              </div>
              <input
                className="w-full bg-[#1c222b] border border-white/[0.02] focus:border-white/[0.08] rounded-xl pl-11 pr-6 h-12 outline-none text-xs text-white placeholder:text-zinc-500 transition-all"
                placeholder="Films, séries, animés, mangas, webtoons..."
              />
            </div>

            <button className="w-12 h-12 rounded-xl bg-[#1c222b] border border-white/[0.02] hover:bg-[#232b36] text-zinc-400 hover:text-white flex items-center justify-center transition-all">
              <HugeiconsIcon icon={Settings01Icon} size={16} />
            </button>

            {/* Profil Utilisateur Capsule */}
            <div className="bg-[#1c222b] border border-white/[0.02] rounded-xl px-4 h-12 flex items-center gap-3 cursor-pointer hover:bg-[#232b36] transition-all">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-md shadow-purple-500/20" />
              <div className="text-left">
                <p className="text-white text-[11px] font-bold leading-tight">
                  Ma Bibliothèque
                </p>
                <span className="text-yellow-400 text-[9px] font-bold uppercase tracking-wider block mt-0.5">
                  Premium
                </span>
              </div>
            </div>
          </div>

          {/* SECTION DU SCROLL (Contenu principal empilé) */}
          <div className="flex-1 overflow-y-auto no-scrollbar mt-6 space-y-6 pr-1">
            {/* HERO CAROUSEL AVEC EFFET D'EMPILEMENT À DROITE */}
            <div className="anim-hero relative w-full h-[280px] flex items-end">
              {/* Cartes en arrière-plan simulant l'aperçu du slider horizontal */}
              <div className="absolute right-0 top-3 bottom-3 w-40 bg-[#1c222b]/30 border border-white/[0.01] rounded-2xl translate-x-10 scale-90 blur-[1px] z-0" />
              <div className="absolute right-0 top-1 bottom-1 w-56 bg-[#161b22] border border-white/[0.03] rounded-[24px] translate-x-5 scale-95 z-10 overflow-hidden shadow-xl opacity-60" />

              {/* Carte Active Majeure */}
              <div className="relative w-[calc(100%-3.5rem)] h-full rounded-[24px] overflow-hidden border border-white/[0.04] shadow-2xl z-20 group">
                <img
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&q=80"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-101"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Contenu textuel et actions alignés sur le bas */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="flex gap-2 mb-4">
                    {["Films", "Séries", "Animés", "Manga", "Webtoon"].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="px-3 py-1 rounded-md bg-black/40 backdrop-blur-md text-zinc-300 text-[10px] font-semibold tracking-wide border border-white/[0.05]"
                        >
                          {badge}
                        </span>
                      ),
                    )}
                  </div>

                  <h2 className="text-3xl font-black text-white tracking-tight uppercase leading-none">
                    Organisez toute votre collection
                  </h2>

                  <p className="mt-2 text-zinc-400 text-xs max-w-2xl leading-relaxed">
                    Une application servant de répertoire pour les films,
                    séries, animés, mangas, webtoons, films d&apos;animation et
                    tout autre média. Créez vos bibliothèques, collections et
                    Tier Lists facilement.
                  </p>

                  <div className="mt-5 flex gap-3">
                    <button className="bg-white hover:bg-zinc-200 text-black rounded-lg px-5 py-2.5 font-bold text-[10px] uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg">
                      + Nouvelle bibliothèque
                    </button>
                    <button className="bg-white/10 hover:bg-white/15 backdrop-blur rounded-lg px-5 py-2.5 text-white font-bold text-[10px] uppercase tracking-wider transition-all border border-white/[0.05]">
                      Créer une Tier List
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FILTRES PAR CATÉGORIES (Ligne horizontale fluide) */}
            <div className="w-full flex items-center justify-between pt-1">
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar max-w-[85%]">
                {categories.map((cat, index) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all border ${
                      index === 0
                        ? "bg-white text-black border-white shadow-md"
                        : "bg-[#1c222b] text-zinc-400 border-white/[0.01] hover:text-white hover:bg-[#232b36]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Flèches de contrôles de navigation du carrousel de la maquette */}
              <div className="flex gap-1.5">
                <button className="w-8 h-8 rounded-xl bg-[#1c222b] border border-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <HugeiconsIcon icon={ArrowLeft01Icon} size={14} />
                </button>
                <button className="w-8 h-8 rounded-xl bg-[#1c222b] border border-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </button>
              </div>
            </div>

            {/* GRILLE DES MÉDIAS CARDS */}
            <div className="grid grid-cols-5 gap-4 pt-1">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="anim-card group space-y-2 cursor-pointer"
                >
                  {/* Image Affiche avec proportions strictes */}
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] relative border border-white/[0.03] bg-[#161b22]">
                    <img
                      src={card.image}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Floating Badges */}
                    <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md rounded-md px-2 py-0.5 text-[9px] font-bold tracking-widest text-zinc-300 border border-white/[0.05] uppercase">
                      {card.type}
                    </span>

                    <span className="absolute bottom-2.5 right-2.5 bg-white text-black rounded-md px-2 py-0.5 text-[10px] font-black shadow-lg flex items-center gap-0.5">
                      <HugeiconsIcon icon={StarIcon} size={10} fill="black" />{" "}
                      {card.rate}
                    </span>

                    {/* Bouton Play rapide invisible par défaut */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl backdrop-blur-sm">
                        <HugeiconsIcon icon={PlayIcon} size={12} fill="black" />
                      </div>
                    </div>
                  </div>

                  {/* Textes descriptifs sous-jacents */}
                  <div className="px-0.5 space-y-0.5">
                    <h3 className="text-zinc-200 group-hover:text-white font-bold text-xs truncate transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-zinc-500 text-[10px] font-medium">
                      {card.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
