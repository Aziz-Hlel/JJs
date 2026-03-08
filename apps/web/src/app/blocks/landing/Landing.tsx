import Link from "next/link";

export function Landing() {
  return (
    <div>
      <main className="min-h-screen w-full relative overflow-hidden">
        {/* Dégradé amélioré en background */}
        <div
          className="absolute top-0 left-0 w-full h-full translate-y-12 translate-x-2 md:translate-y-0 md:translate-x-0 "
          style={{
            backgroundColor: "#0F1B1B",
            backgroundImage: `url('/ourImages/landing/bg5.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Overlay subtil pour plus de profondeur */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 py-20">
          {/* Titre principal avec effet subtil */}
          <div className="flex items-center gap-x-2 md:gap-x-8">
            {/* Le logo JJ's - On retire row-span et on laisse le flex gérer l'alignement */}
            <div className="text-7xl lg:text-9xl font-bold text-primary leading-none">
              JJ’s
            </div>

            {/* Le bloc de texte aligné verticalement au centre de JJ's */}
            <div className="flex flex-col justify-center">
              {/* Desktop Version */}
              <div className="hidden lg:block space-y-1">
                <h3 className="text-xl font-light uppercase text-white tracking-[0.2em] leading-none text-left">
                  Irish Pub &
                </h3>
                <h3 className="text-xl font-light uppercase text-white tracking-[0.2em] leading-none text-left">
                  Restaurant
                </h3>
              </div>

              {/* Mobile Version */}
              <div className="block lg:hidden space-y-0.5">
                <h4 className="text-sm font-light uppercase text-white tracking-widest leading-none text-left">
                  Irish Pub &
                </h4>
                <h4 className="text-sm font-light uppercase text-white tracking-widest leading-none text-left">
                  Restaurant
                </h4>
              </div>
            </div>
          </div>

          {/* Ligne décorative */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#b08243]"></div>
            <div className="w-2 h-2 rounded-full bg-[#b08243]"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#b08243]"></div>
          </div>

          {/* Description avec meilleure typographie */}
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-white/60 font-light leading-relaxed mb-12 px-4">
            Born in the heart of Bahrain, we bring the warmth, charm, and
            authentic spirit of Ireland to the region. Experience genuine
            hospitality in an atmosphere that feels like home.
          </p>

          {/* Formulaire de réservation amélioré */}
          {/* Section des Boutons CTA */}
          <div className="mt-8 w-full max-w-2xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Bouton Principal : Make a Booking */}
              <Link href="/booking" className="w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-[#b08243] to-[#c6975a] hover:from-[#c6975a] hover:to-[#d4a569] text-white hover:text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs transform hover:scale-[1.05] active:scale-[0.98]">
                Make a Booking
              </Link>

              {/* Bouton Secondaire : More about us */}
              <Link href="/about-us" className="w-full sm:w-auto min-w-[200px] bg-transparent border border-[#b08243]/50 hover:border-[#b08243] text-[#F5F5DC] hover:bg-[#b08243]/10 px-8 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs backdrop-blur-sm">
                More about us
              </Link>
            </div>

            {/* Petit texte de rassurance sous les boutons */}
            <p className="text-[12px] text-yellow-500 mt-6 text-center uppercase tracking-[0.1em] opacity-60">
              Experience the heart of Ireland in Bahrain
            </p>
          </div>

          {/* Indicateur de scroll (optionnel) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Explore
              </span>
              <svg
                className="w-5 h-5 text-[#b08243]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
