"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Importé pour la navigation

const Entertainment = () => {
  return (
    <section className="py-32 px-4 bg-[#0F1C1C] relative overflow-hidden">
      {/* Background Texture subtile */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* CÔTÉ GAUCHE : TEXTE */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <header className="mb-10 flex flex-col items-center lg:items-start">
              <span className="text-[#d4af37] uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                Must See
              </span>
              {/* Suppression du whitespace-nowrap pour éviter les débordements sur petit écran */}
              <h2 className="font-serif text-3xl md:text-6xl text-[#f5f5dc] mb-8">
                JJ’s Entertainment
              </h2>
              <div className="w-20 h-[1px] bg-[#d4af37]/50"></div>
            </header>

            <p className="text-[#f5f5dc]/70 text-xl font-light leading-relaxed mb-12 max-w-xl">
              Enjoy a traditional Irish welcome 7 nights a week with live music,
              and Irish dancing shows starting from 8pm. Experience the magic of
              authentic Irish culture in the heart of Dublin.
            </p>

            {/* Caractéristiques Luxe - Centrées sur mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mb-12 w-full">
              {/* Box 1 */}
              <div className="border border-white/10 p-6 rounded-sm bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-[#d4af37]/40 flex flex-col items-center lg:items-start">
                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-3 font-bold">
                  Live Music
                </p>
                <p className="text-[#f5f5dc] text-sm font-light italic">
                  Every Evening
                </p>
              </div>

              {/* Box 2 */}
              <div className="border border-white/10 p-6 rounded-sm bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-[#d4af37]/40 flex flex-col items-center lg:items-start">
                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-3 font-bold">
                  Irish Dancing
                </p>
                <p className="text-[#f5f5dc] text-sm font-light italic">
                  From 8:00 PM
                </p>
              </div>

              {/* Box 3 */}
              <div className="border border-white/10 p-6 rounded-sm bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-[#d4af37]/40 flex flex-col items-center lg:items-start">
                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-3 font-bold">
                  Atmosphere
                </p>
                <p className="text-[#f5f5dc] text-sm font-light italic">
                  Authentic & Chic
                </p>
              </div>
            </div>

            {/* Bouton centré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full flex justify-center lg:justify-start"
            >
              <Link
                href="/events"
                className="inline-flex items-center group relative overflow-hidden border border-[#d4af37]/40 px-8 py-4 text-[#d4af37] uppercase tracking-[0.2em] text-[11px] font-bold transition-all duration-500 hover:text-[#0F1C1C]"
              >
                <span className="absolute inset-0 bg-[#d4af37] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
                <span className="relative z-10 flex items-center gap-3">
                  View Entertainment Schedule
                  {/* ... SVG ... */}
                </span>
              </Link>
            </motion.div>
          </div>

          {/* CÔTÉ DROIT : IMAGE AVEC CADRE DÉCALÉ */}
          {/* CÔTÉ DROIT : IMAGE AVEC CADRE DÉCALÉ */}
          <div className="relative order-1 lg:order-2 px-4 lg:px-0">
            {" "}
            {/* Ajout de padding horizontal pour mobile */}
            <div className="relative z-10">
              {/* LE CADRE DORÉ : Adapté pour mobile et desktop */}
              <div
                className="absolute 
      top-4 -right-2 bottom-4 -left-2   /* Position mobile : léger décalage */
      lg:top-10 lg:-right-6 lg:bottom-10 lg:-left-6 /* Position Desktop : décalage original */
      border border-[#d4af37]/30 rounded-sm 
      lg:translate-x-4"
              ></div>

              {/* CONTENEUR IMAGE */}
              <div className="relative overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <Image
                  src="/ourImages/band/bad.png"
                  alt="Live Band"
                  width={800}
                  height={1000}
                  className="w-full h-[350px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>

              {/* BADGE FLOTTANT : Ajusté pour ne pas être trop massif sur mobile */}
              <div className="absolute -bottom-6 right-6 lg:-bottom-8 lg:right-12 bg-[#d4af37] text-[#1A3030] p-4 lg:p-8 rounded-sm shadow-2xl flex flex-col items-center min-w-[100px] lg:min-w-[140px]">
                <span className="text-2xl lg:text-4xl font-serif font-bold leading-none">
                  07
                </span>
                <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-bold mt-1 lg:mt-2 text-center leading-tight">
                  Nights <br className="hidden lg:block" /> A Week
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
