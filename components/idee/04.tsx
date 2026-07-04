"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Intégration stricte de Hugeicons selon tes spécifications
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  SearchIcon, 
  Home01Icon, 
  StarIcon, 
  Clock01Icon, 
  TrendingUpDownIcon, 
  Settings01Icon, 
  HelpCircleIcon, 
  Notification01Icon, 
  PlayIcon, 
  FavouriteIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Grid,
  Layers01Icon
} from "@hugeicons/core-free-icons";

// Mock Data adapté à la diversité des catégories de ton application
const CONTINUE_TRACKING = [
  { id: 1, title: "Arcane: League of Legends", details: "S2 • Ép. 6", progress: 55, bg: "from-blue-600/30 to-zinc-900" },
  { id: 2, title: "Chainsaw Man (Manga)", details: "Vol. 16 • Ch. 152", progress: 85, bg: "from-orange-600/30 to-zinc-900" },
  { id: 3, title: "Solo Leveling (Webtoon)", details: "Saison 1 complète", progress: 100, bg: "from-purple-600/30 to-zinc-900" },
];

const CATEGORIES_PILLS = [
  "Tout", "Tendances", "Action", "Shonen", "Seinen", "Sci-Fi", "Webtoons", "Tier Lists"
];

const MAIN_CONTENT = [
  { id: 1, title: "Demon Slayer: Infinity Castle", type: "Animé", year: "2025", score: "9.8", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80" },
  { id: 2, title: "Dune: Part Two", type: "Film", year: "2024", score: "9.4", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80" },
  { id: 3, title: "Lookism", type: "Webtoon", year: "2025", score: "8.9", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80" },
  { id: 4, title: "Jujutsu Kaisen", type: "Manga", year: "2024", score: "9.3", img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=80" },
  { id: 5, title: "Severance", type: "Série", year: "2025", score: "9.1", img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80" },
];

export default function PixelPerfectDashboard() {
  const [activeCategory, setActiveCategory] = useState("Action");
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialisation des animations avec GSAP dans un useEffect standard
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Animation d'entrée pour la structure globale
      tl.fromTo(".anim-sidebar", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        .fromTo(".anim-topbar", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.4")
        .fromTo(".anim-hero", { scale: 0.98, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "power4.out" }, "-=0.3")
        .fromTo(".anim-grid-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }, "-=0.2");
    }, dashboardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={dashboardRef} className="w-full h-screen bg-[#0e1012] text-zinc-100 flex p-4 font-sans antialiased select-none overflow-hidden">
      
      {/* ─── SIDEBAR GAUCHE (Exactitude de la structure de original-87d43556d4fe0ac75f6c1f16636e69c0.webp) ─── */}
      <aside className="anim-sidebar w-64 h-full bg-[#131517] rounded-[24px] flex flex-col justify-between p-5 border border-zinc-800/20">
        <div className="space-y-7">
          {/* Logo */}
          <div className="flex items-center gap-3 pl-2">
            <div className="w-6 h-6 bg-[#ffc529] rounded-lg flex items-center justify-center text-black">
              <HugeiconsIcon icon={Grid} size={14} strokeWidth={2.5} />
            </div>
            <span className="text-md font-bold tracking-tight text-white">cortex.</span>
          </div>

          {/* Navigation Principale */}
          <nav className="space-y-1">
            {[
              { text: "Accueil", icon: Home01Icon, active: true },
              { text: "Mes Favoris", icon: StarIcon },
              { text: "Prochainement", icon: Clock01Icon },
              { text: "Tendances", icon: TrendingUpDownIcon },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  item.active ? "bg-[#1a1d21] text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <HugeiconsIcon icon={item.icon} size={16} color="currentColor" />
                {item.text}
              </div>
            ))}
          </nav>

          {/* Séparateur / Outils */}
          <div className="pt-2 space-y-1 border-t border-zinc-800/40">
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-semibold text-zinc-500 hover:text-zinc-300 cursor-pointer">
              <HugeiconsIcon icon={Settings01Icon} size={16} />
              Paramètres
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-semibold text-zinc-500 hover:text-zinc-300 cursor-pointer">
              <HugeiconsIcon icon={HelpCircleIcon} size={16} />
              Support
            </div>
          </div>
        </div>

        {/* Section de Suivi Continu (Dossiers en cours) */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase pl-2">En cours</span>
          <div className="space-y-2 max-h-[220px] overflow-y-auto no-scrollbar">
            {CONTINUE_TRACKING.map((item) => (
              <div key={item.id} className="p-3 bg-[#1a1d21] border border-zinc-800/30 rounded-xl relative overflow-hidden group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.bg} opacity-20`} />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <h4 className="text-[11px] font-bold text-zinc-200 truncate group-hover:text-white transition-colors">{item.title}</h4>
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-2">
                    <span>{item.details}</span>
                    <span className="font-semibold text-zinc-400">{item.progress}%</span>
                  </div>
                  {/* Barre de Progression Mini */}
                  <div className="w-full h-[3px] bg-zinc-800 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-white transition-all duration-500" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ─── ZONE PRINCIPALE DE CONTENU ─── */}
      <main className="flex-1 h-full flex flex-col pl-5 overflow-hidden">
        
        {/* TOPBAR */}
        <header className="anim-topbar w-full flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            {/* Menu Sélecteur Global */}
            <div className="bg-[#131517] px-4 py-2.5 rounded-xl border border-zinc-800/40 text-xs font-semibold flex items-center gap-2 cursor-pointer text-zinc-200">
              <span>Tout voir</span>
              <span className="text-[10px] text-zinc-500">▼</span>
            </div>

            {/* Barre de recherche stylisée */}
            <div className="relative flex items-center bg-[#131517] border border-zinc-800/30 rounded-xl w-[32rem] px-3.5 py-2.5 text-zinc-500">
              <HugeiconsIcon icon={SearchIcon} size={14} />
              <input 
                type="text" 
                placeholder="Rechercher des films, animés, mangas, listes..." 
                className="w-full bg-transparent text-xs pl-3 text-zinc-200 focus:outline-none placeholder-zinc-500"
              />
              <span className="text-[10px] font-mono tracking-widest bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">⌘K</span>
            </div>
          </div>

          {/* Profil & Notifications */}
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 bg-[#131517] border border-zinc-800/30 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
              <HugeiconsIcon icon={Notification01Icon} size={16} />
            </button>
            <div className="bg-[#131517] border border-zinc-800/30 p-1.5 pr-4 rounded-xl flex items-center gap-3 cursor-pointer">
              <div className="w-7 h-7 bg-gradient-to-tr from-[#ffc529] to-amber-600 rounded-lg text-black font-black flex items-center justify-center text-xs shadow-md">
                YR
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">Yuki R.</p>
                <p className="text-[9px] text-[#ffc529] font-semibold tracking-wider uppercase leading-none mt-0.5">Crateur Pro</p>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENU SCROLLABLE SANS SCROLLBAR APPARENTE */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-6 space-y-6">

          {/* HERO BANNER SLIDER (Fidélité de placement et d'empilement) */}
          <section className="anim-hero relative w-full h-[320px] flex items-end">
            
            {/* Cartes de fond empilées créant la profondeur à droite */}
            <div className="absolute right-0 top-4 bottom-4 w-48 bg-[#1a1d21]/40 border border-zinc-800/20 rounded-[24px] translate-x-12 scale-90 blur-[2px] z-0" />
            <div className="absolute right-0 top-2 bottom-2 w-64 bg-[#131517] border border-zinc-800/40 rounded-[24px] translate-x-6 scale-95 z-10 overflow-hidden shadow-xl opacity-80">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=80')` }} />
            </div>

            {/* Carte Principale active du Slider */}
            <div className="relative w-[calc(100%-4rem)] h-full rounded-[24px] overflow-hidden border border-zinc-800/40 shadow-2xl z-20">
              {/* Image d'illustration adaptée (Thématique Fantastique / Animé) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-102"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Badges / Meta-données de la carte */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                {["Action", "Manga Masterpiece", "2026", "Rank S"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-semibold tracking-wide text-zinc-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Indicateur de pages discrets en haut à droite */}
              <div className="absolute top-5 right-5 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>

              {/* Contrôles inférieurs */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-extrabold text-white tracking-tight uppercase">Solo Leveling: Ragnarok</h2>
                  <button className="flex items-center gap-2 bg-white text-black font-semibold text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-zinc-200 transition-all">
                    <HugeiconsIcon icon={PlayIcon} size={10} fill="black" />
                    Consulter la fiche
                  </button>
                </div>
                
                <button className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all">
                  <HugeiconsIcon icon={FavouriteIcon} size={14} />
                </button>
              </div>
            </div>
          </section>

          {/* LIGNE DE FILTRES DES CATÉGORIES (Pills horizontales) */}
          <section className="w-full flex items-center justify-between pt-2">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar max-w-[85%]">
              {CATEGORIES_PILLS.map((pill) => {
                const isActive = activeCategory === pill;
                return (
                  <button
                    key={pill}
                    onClick={() => setActiveCategory(pill)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      isActive 
                        ? "bg-white text-black border-white shadow-md" 
                        : "bg-[#131517] text-zinc-400 border-zinc-800/30 hover:text-white"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>

            {/* Flèches directionnelles du carrousel de la maquette originale */}
            <div className="flex gap-1.5">
              <button className="w-8 h-8 rounded-xl bg-[#131517] border border-zinc-800/30 flex items-center justify-center text-zinc-400 hover:text-white text-xs">
                <HugeiconsIcon icon={ArrowLeft01Icon} size={14} />
              </button>
              <button className="w-8 h-8 rounded-xl bg-[#131517] border border-zinc-800/30 flex items-center justify-center text-zinc-400 hover:text-white text-xs">
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </button>
            </div>
          </section>

          {/* GRILLE D'ÉLÉMENTS PRINCIPAUX */}
          <section className="w-full">
            <div className="grid grid-cols-5 gap-4">
              {MAIN_CONTENT.map((item) => (
                <div key={item.id} className="anim-grid-card group space-y-2 cursor-pointer">
                  {/* Conteneur d'affiche au format exact vertical */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800/30 bg-[#131517]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                    />
                    {/* Overlay d'action rapide au survol */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-white text-black font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-lg">
                        Détails
                      </span>
                    </div>
                    {/* Badge de type de média en haut à gauche de la carte */}
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[8px] font-bold text-zinc-300 uppercase tracking-widest border border-white/5">
                      {item.type}
                    </span>
                  </div>

                  {/* Textes descriptifs sous l'affiche */}
                  <div className="space-y-0.5 px-0.5">
                    <h4 className="text-xs font-bold text-zinc-200 truncate group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
                      <span>{item.year}</span>
                      <span>•</span>
                      <span className="text-amber-400 font-bold flex items-center gap-0.5">
                        ★ {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}