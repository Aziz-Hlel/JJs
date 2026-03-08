"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroInnerBlock from "../common/hero-inner/Hero-inner";
import { HeroInnerHistoryData } from "@/app/hooks/data";

const EntertainmentPage = () => {
  return (
    <div className="bg-[#0F1C1C] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1C1C]">
      <HeroSection />

      <div className="relative z-10 bg-[#0F1C1C]">
        <LiveMusicSection />
        <IrishDancingSection />
        <AdditionalEventsSection />
      </div>

      <footer className="py-20 text-center border-t border-[#D4AF37]/10">
        <p className="font-serif italic text-[#F5F5DC]/40 text-xs md:text-sm">
          Authentic Irish Hospitality Since 1908
        </p>
      </footer>
    </div>
  );
};

const HeroSection = () => {
  return (
    <HeroInnerBlock
      title={"Entertainment"}
      image={"/hero/gallery-14a.jpg"}
      altText={HeroInnerHistoryData.altText}
      breadcrumbs={[
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "Entertainment", link: "/entertainment" },
      ]}
    />
  );
};

const LiveMusicSection = () => {
  return (
    <section className="py-16 lg:py-40 px-6 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="lg:col-span-7 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -top-6 -left-6 w-full h-full border border-[#D4AF37]/20 hidden lg:block" />
          <div className="relative aspect-[16/10] overflow-hidden grayscale-[0.3] rounded-sm">
            <img
              src="/ourImages/awards/madessen.png"
              className="w-full h-full object-cover"
              alt="Live Music"
            />
          </div>
          {/* Badge Mobile caché ou réduit */}
          <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-right-10 bg-[#D4AF37] p-6 lg:p-10 shadow-xl">
            <p className="font-serif text-[#0F1C1C] text-xl lg:text-3xl italic leading-none">
              Live
            </p>
            <p className="text-[#0F1C1C] text-[8px] lg:text-[10px] font-bold tracking-widest uppercase mt-1 lg:mt-2 text-right">
              Every Night
            </p>
          </div>
        </motion.div>

        {/* Texte Responsive */}
        <div className="lg:col-span-5 text-[#F5F5DC] mt-12 lg:mt-0 text-center lg:text-left">
          <h2 className="font-serif text-[2px] md:text-sm lg:text-xl mb-6 lg:mb-8 leading-none whitespace-nowrap">
            MIC MADNESS
          </h2>
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-[#D4AF37] text-[5px]  mb-3">
                The Schedule
              </h3>
              <p className="text-lg lg:text-xl font-light">
                Monday – Sunday <span className="text-[#D4AF37] mx-1">/</span>{" "}
                <span className="italic text-[#F5F5DC]/60">from 8.30pm</span>
              </p>
            </div>
            <div className="pt-6 lg:pt-8 border-t border-[#D4AF37]/10 max-w-md mx-auto lg:mx-0">
              <h4 className="font-serif text-xl lg:text-2xl mb-3 lg:mb-4 italic">
                The Legends: Dubh Linn
              </h4>
              <p className="text-[#F5F5DC]/60 text-sm lg:text-base leading-relaxed font-light italic">
                Declan, Paddy and Sean bring over 40 years of mastery to
                JJ&apos;S, weaving the very fabric of Irish soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IrishDancingSection = () => {
  return (
    <section className="py-16 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 text-[#F5F5DC] text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl mb-6 lg:mb-8 italic">
            KARAOKE IDOL
          </h2>
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-[#D4AF37] text-[10px] mb-3">Main Stage</h3>
              <p className="text-lg lg:text-xl font-light italic text-[#F5F5DC]/80">
                Performed Nightly from 10.00pm
              </p>
            </div>
            <p className="text-[#F5F5DC]/60 text-sm lg:text-base leading-relaxed font-light italic max-w-md mx-auto lg:mx-0">
              Led by John and Ciara, our troupe features world-class performers
              from the industry’s most prestigious global shows.
            </p>
            <button className="mt-4 border border-[#D4AF37]/30 px-8 py-3 lg:px-10 lg:py-4 text-[#D4AF37] text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4AF37] hover:text-[#0F1C1C] transition-all duration-500 w-full lg:w-auto">
              Book a Front Row Table
            </button>
          </div>
        </div>

        <motion.div
          className="lg:col-span-7 order-1 lg:order-2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/20 hidden lg:block" />
          <div className="relative aspect-[16/10] overflow-hidden grayscale-[0.3] rounded-sm">
            <img
              src="/ourImages/awards/karaoke.png"
              className="w-full h-full object-cover shadow-2xl"
              alt="Irish Dancing"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AdditionalEventsSection = () => {
  const events = [
    { title: "Jammin's Nights", schedule: "Every Sunday", time: "9:00pm" },
    { title: "The Craic", schedule: "Tuesday to Saturday", time: "8:00pm" },
    { title: "The Ark Angels Band", schedule: "Thursdays", time: "7:30pm" },
  ];

  return (
    <section className="py-20 lg:py-40 px-4 sm:px-6 bg-[#0B1414]">
      <div className="max-w-7xl mx-auto">
        {/* Header : Centré sur mobile, Aligné sur les côtés sur Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-24 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-[#D4AF37] text-[9px] lg:text-xs uppercase tracking-[0.4em] lg:tracking-[0.5em] font-bold mb-4 block">
              The Weekly Program
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#F5F5DC] italic leading-[1.1]">
              Beyond the <br className="hidden md:block" /> Main Stage
            </h2>
          </div>

          {/* Ligne décorative : cachée sur mobile */}
          <div className="h-[1px] flex-grow bg-[#D4AF37]/20 mb-4 mx-8 hidden lg:block"></div>

          <p className="text-[#F5F5DC]/40 text-xs lg:text-sm italic font-light max-w-xs mx-auto md:mx-0">
            Discover our intimate sessions and late-night performances.
          </p>
        </div>

        {/* Grille : 1 colonne (mobile) -> 3 colonnes (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 sm:p-8 lg:p-10 bg-white/[0.01] border border-white/5 rounded-sm hover:border-[#D4AF37]/40 transition-all duration-500"
            >
              {/* Numéro décoratif : plus petit sur mobile */}
              <span className="absolute top-4 right-6 font-serif text-4xl lg:text-6xl text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-colors duration-500">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <h3 className="font-serif text-xl lg:text-2xl text-[#F5F5DC] mb-6 italic group-hover:text-[#D4AF37] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-4 lg:w-6 h-[1px] bg-[#D4AF37]/40"></div>
                    <p className="text-[#F5F5DC]/60 text-xl lg:text-sm font-light italic">
                      {event.schedule}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-4 lg:w-6 h-[1px] bg-transparent"></div>
                    <p className="text-[#D4AF37] text-[16px] lg:text-xs font-bold tracking-widest uppercase">
                      {event.time}
                    </p>
                  </div>
                </div>

                {/* Décoration mobile : Toujours visible ou au hover sur Desktop */}
                <div className="mt-8 pt-6 border-t border-white/5 opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 text-[9px] uppercase tracking-widest text-[#F5F5DC]/30">
                  Entry: Complimentary
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentPage;
