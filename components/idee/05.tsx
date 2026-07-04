"use client";

export default function MediaDashboard() {
  const libraries = [
    {
      title: "Films",
      color: "from-orange-400 to-orange-600",
      progress: "248",
    },
    {
      title: "Séries",
      color: "from-sky-400 to-blue-600",
      progress: "84",
    },
    {
      title: "Animés",
      color: "from-pink-500 to-fuchsia-600",
      progress: "132",
    },
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

  return (
    <main className="min-h-screen bg-[#24323b] flex items-center justify-center p-10">
      <div className="w-[1450px] h-[860px] rounded-3xl bg-[#12171d] shadow-2xl overflow-hidden flex">

        {/* Sidebar */}

        <aside className="w-[270px] bg-[#10151b] border-r border-white/5 flex flex-col">

          <div className="px-8 py-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center text-black font-black">
              ▣
            </div>

            <div>
              <h1 className="text-white text-2xl font-bold">
                Medivia
              </h1>

              <p className="text-xs text-zinc-500">
                Media Directory
              </p>
            </div>
          </div>

          <nav className="px-6 mt-3 space-y-2">

            {[
              "Accueil",
              "Bibliothèques",
              "Collections",
              "Catégories",
              "Tier Lists",
              "Favoris",
              "Historique",
            ].map((item) => (
              <button
                key={item}
                className={`w-full text-left px-4 py-3 rounded-xl transition ${
                  item === "Accueil"
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-10 px-5 space-y-4">

            {libraries.map((lib) => (
              <div
                key={lib.title}
                className={`rounded-2xl overflow-hidden bg-gradient-to-br ${lib.color} h-28 relative`}
              >
                <div className="absolute inset-0 bg-black/25" />

                <div className="relative h-full p-4 flex flex-col justify-between">

                  <div className="text-white font-semibold">
                    {lib.title}
                  </div>

                  <div className="flex justify-between text-xs text-white/80">
                    <span>{lib.progress} médias</span>

                    <span>Bibliothèque</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Content */}

        <section className="flex-1 p-8">

          {/* Top */}

          <div className="flex items-center gap-5">

            <button className="bg-[#262c35] rounded-xl px-6 py-4 text-white">
              Tous les médias
            </button>

            <div className="flex-1">
              <input
                className="w-full bg-[#262c35] rounded-xl px-6 py-4 outline-none text-white placeholder:text-zinc-500"
                placeholder="Films, séries, animés, mangas, webtoons..."
              />
            </div>

            <button className="w-14 h-14 rounded-xl bg-[#262c35] text-white">
              ⚙
            </button>

            <div className="bg-[#262c35] rounded-xl px-5 h-14 flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500" />

              <div>

                <p className="text-white text-sm font-semibold">
                  Ma Bibliothèque
                </p>

                <span className="text-yellow-400 text-xs">
                  Premium
                </span>

              </div>
            </div>
          </div>

          {/* Hero */}

          <div className="mt-8 h-[330px] rounded-[30px] overflow-hidden relative">

            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&q=80"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-10">

              <div className="flex gap-3 mb-6">

                {[
                  "Films",
                  "Séries",
                  "Animés",
                  "Manga",
                  "Webtoon",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h2 className="text-6xl font-bold text-white">
                Organisez toute votre collection
              </h2>

              <p className="mt-4 text-zinc-300 text-lg max-w-3xl">
                Une application servant de répertoire pour les films,
                séries, animés, mangas, webtoons, films d&apos;animation
                et tout autre média. Créez vos bibliothèques,
                collections et Tier Lists facilement.
              </p>

              <div className="mt-8 flex gap-4">

                <button className="bg-white text-black rounded-full px-8 py-4 font-semibold">
                  + Nouvelle bibliothèque
                </button>

                <button className="bg-white/15 backdrop-blur rounded-full px-8 py-4 text-white">
                  Créer une Tier List
                </button>

              </div>
            </div>
          </div>

          {/* Categories */}

          <div className="flex gap-4 mt-8 overflow-x-auto pb-2">

            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-6 py-3 rounded-full whitespace-nowrap ${
                  index === 0
                    ? "bg-white text-black"
                    : "bg-[#262c35] text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}

          <div className="grid grid-cols-5 gap-6 mt-8">

            {cards.map((card) => (
              <div
                key={card.title}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden h-[310px] relative">

                  <img
                    src={card.image}
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-black/50 backdrop-blur rounded-full px-3 py-1 text-xs text-white">
                    {card.type}
                  </span>

                  <span className="absolute bottom-4 right-4 bg-white text-black rounded-full px-3 py-1 font-semibold">
                    ★ {card.rate}
                  </span>
                </div>

                <div className="mt-4">

                  <h3 className="text-white font-semibold text-lg">
                    {card.title}
                  </h3>

                  <p className="text-zinc-500">
                    {card.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </main>
  );
}