"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Importations strictes et certifiées de Hugeicons
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  SearchIcon, 
  Notification01Icon, 
  ArrowDown01Icon, 
  PlayIcon, 
  FireIcon, 
  FlashIcon, 
  FavouriteIcon, 
  SmileIcon, 
  StarIcon, 
  MoonIcon, 
  FilterIcon, 
  MenuTwoLineIcon 
} from "@hugeicons/core-free-icons";

export default function PremiumPixelPerfectDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("Animation");

  // Fusion des données de 05.tsx adaptée au format à 6 colonnes de la maquette
  const categories = [
    { name: "Trending", icon: FireIcon },
    { name: "Action", icon: FlashIcon },
    { name: "Romance", icon: FavouriteIcon },
    { name: "Animation", icon: SmileIcon },
    { name: "Horror", icon: SmileIcon }, // Remplaçable par GhostIcon si dispo
    { name: "Special", icon: StarIcon },
    { name: "Drakor", icon: MoonIcon }
  ];

  const cards = [
    { title: "Loetoeng Kasarung", year: 2023, type: "Film", rate: "7.8", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80" },
    { title: "Gajah Langka", year: 2023, type: "Série", rate: "6.0", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&q=80" },
    { title: "Si Kang Satay", year: 2023, type: "Animé", rate: "7.1", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80" },
    { title: "Mommy Cat", year: 2023, type: "Manhwa", rate: "7.8", image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=600&q=80" },
    { title: "Hijaber Cantiq", year: 2023, type: "Manga", rate: "6.1", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80" },
    { title: "Xatra- X", year: 2022, type: "Animation", rate: "6.5", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80" },
  ];

  useEffect(() => {
    // Initialisation des micro-interactions et animations d'entrée avec GSAP
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(".anim-board", { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power4.out" })
        .fromTo(".anim-hero", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" }, "-=0.4")
        .fromTo(".anim-pill", { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.3")
        .fromTo(".anim-media-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gradient-to-tr from-[#3a4750] via-[#526572] to-[#404e59] flex items-center justify-center p-8 font-sans antialiased select-none overflow-hidden">
      
      {/* ─── PANNEAU PRINCIPAL FLIX / MEDIVIA ─── */}
      <div className="anim-board w-full max-w-[1280px] h-[840px] rounded-[48px] bg-[#4b5c68]/80 backdrop-blur-3xl border border-white/[0.08] shadow-[0_32px_80px_rgba(15,23,30,0.4)] flex flex-col p-8 justify-between relative overflow-hidden">
        
        {/* Effet de lueur diffuse interne propre à la maquette original-34f1922d567a10de39810852528dcc3d.webp */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        {/* ─── TOPBAR HEADER ─── */}
        <header className="w-full flex items-center justify-between z-10">
          {/* Logo Brand */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span className="text-white text-2xl font-black tracking-tight">Flix.id</span>
          </div>

          {/* Sélecteur Central en Forme de Capsule Sombre */}
          <div className="bg-[#0f141c] p-1 rounded-full flex items-center shadow-inner border border-white/[0.04]">
            {["Movie", "Series", "Originals"].map((tab, idx) => (
              <button 
                key={tab} 
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  idx === 0 ? "bg-[#1c232e] text-white shadow-md" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors ml-1 mr-1">
              <HugeiconsIcon icon={SearchIcon} size={14} />
            </button>
          </div>

          {/* Profil Utilisateur & Cloche de Notification */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.05] flex items-center justify-center text-zinc-300 hover:text-white cursor-pointer transition-colors">
              <HugeiconsIcon icon={Notification01Icon} size={16} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border border-[#4b5c68]">
                8
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.05] p-1.5 pr-4 rounded-full cursor-pointer hover:bg-white/[0.08] transition-all">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" 
                alt="Sarah J" 
                className="w-8 h-8 rounded-full object-cover border border-white/20"
              />
              <div className="text-left">
                <p className="text-white text-xs font-bold leading-tight">Sarah J</p>
                <span className="text-zinc-400 text-[10px] font-medium block">Premium</span>
              </div>
              <HugeiconsIcon icon={ArrowDown01Icon} size={12} color="#a1a1aa" className="ml-1" />
            </div>
          </div>
        </header>

        {/* ─── SECTION HERO DES DEUX BANNIÈRES ASYMÉTRIQUES ─── */}
        <section className="grid grid-cols-2 gap-6 my-6 z-10">
          
          {/* Bannière Gauche : The Adventure of Blue Sword */}
          <div className="anim-hero relative h-[220px] rounded-[32px] overflow-hidden border border-white/[0.08] shadow-lg group">
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-102"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#17385c]/95 via-[#1a446c]/60 to-transparent" />
            
            {/* Contenu Textuel */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between items-start">
              <h2 className="text-white text-2xl font-bold max-w-xs tracking-tight leading-tight">
                The Adventure of Blue Sword
              </h2>
              <button className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/10 hover:bg-black/50 px-4 py-2 rounded-full transition-all">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                  <HugeiconsIcon icon={PlayIcon} size={8} fill="black" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-wide">Let Play Moview</span>
              </button>
            </div>
          </div>

          {/* Bannière Droite : Recalling the journey of Dol */}
          <div className="anim-hero relative h-[220px] rounded-[32px] overflow-hidden border border-white/[0.08] shadow-lg group">
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-102"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80')` }} 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#59768a]/95 via-[#6a8b9f]/50 to-transparent" />
            
            {/* Contenu Textuel */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between items-start">
              <h2 className="text-white text-2xl font-bold max-w-sm tracking-tight leading-tight">
                Recalling the journey of Dol&apos;s exciting story
              </h2>
              <button className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/10 hover:bg-black/50 px-4 py-2 rounded-full transition-all">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                  <HugeiconsIcon icon={PlayIcon} size={8} fill="black" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-wide">Let Play Moview</span>
              </button>
            </div>
          </div>

        </section>

        {/* ─── SECTION HORIZONTALE DES FILTRES DE CATÉGORIES ─── */}
        <section className="w-full flex items-center gap-3 overflow-x-auto no-scrollbar py-1 z-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`anim-pill flex items-center gap-2.5 px-6 py-3.5 rounded-[20px] text-xs font-semibold tracking-wide transition-all border shrink-0 ${
                  isSelected 
                    ? "bg-white/[0.22] text-white border-white/[0.25] shadow-md" 
                    : "bg-white/[0.05] text-zinc-300 border-white/[0.03] hover:bg-white/[0.09] hover:text-white"
                }`}
              >
                <HugeiconsIcon icon={cat.icon} size={14} color="currentColor" strokeWidth={2} />
                {cat.name}
              </button>
            );
          })}
        </section>

        {/* ─── TITRE DE LA SECTION & FILTRE AVANCÉ ─── */}
        <section className="w-full flex items-center justify-between mt-6 mb-4 z-10">
          <h3 className="text-white text-xl font-bold tracking-tight">
            Trending in {activeCategory}
          </h3>

          {/* Boutons de contrôle de liste de la maquette originale */}
          <div className="bg-black/30 p-1 rounded-full flex items-center gap-0.5 border border-white/[0.04]">
            <button className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
              <HugeiconsIcon icon={MenuTwoLineIcon} size={12} />
            </button>
            <button className="w-7 h-7 rounded-full bg-[#1c232e] flex items-center justify-center text-white shadow-sm">
              <HugeiconsIcon icon={FilterIcon} size={12} />
            </button>
          </div>
        </section>

        {/* ─── GRILLE DES FILMS ET MÉDIAS (6 COLONNES ALIGNÉES) ─── */}
        <section className="w-full grid grid-cols-6 gap-5 z-10">
          {cards.map((card, index) => (
            <div key={index} className="anim-media-card group flex flex-col gap-2 cursor-pointer">
              
              {/* Image Affiche avec l'arrondi prononcé caractéristique (squircle aspect) */}
              <div className="w-full aspect-[4/5] rounded-[32px] overflow-hidden border border-white/[0.06] relative bg-white/[0.02] shadow-md">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Contenu Descriptif Inférieur */}
              <div className="px-1 text-left">
                <h4 className="text-white text-xs font-bold truncate group-hover:text-zinc-200 transition-colors">
                  {card.title}
                </h4>
                
                <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-400 font-medium">
                  <span className="flex items-center gap-0.5 text-amber-400 font-semibold">
                    <span className="text-[8px] transform -translate-y-[0.5px]">●</span> {card.rate}
                  </span>
                  <span>{card.year}</span>
                </div>
              </div>

            </div>
          ))}
        </section>

      </div>
    </div>
  );
}