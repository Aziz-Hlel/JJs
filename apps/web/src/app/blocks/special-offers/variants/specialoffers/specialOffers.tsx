"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SpecialOffersBlockProps } from "@/app/types/common.types";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SpecialOffersBlock = ({
  items = specialOffersData.items,
  emptyMessage = specialOffersData.emptyMessage,
  className,
}: SpecialOffersBlockProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (!items || items.length === 0) {
    return <div className="p-10 text-center bg-[#F9F3EB]">{emptyMessage}</div>;
  }

  return (
    <div
      className={cn(
        "bg-black py-20 text-white min-h-[70vh] flex flex-col justify-center overflow-hidden",
        className,
      )}
    >
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-serif italic mb-4 text-[#e7d8c3]">
            Special Selection
          </h2>
          <div className="w-20 h-1 bg-[#b08243] mx-auto opacity-50 mb-8"></div>

          <Link href="/menu" className="px-8 py-3 bg-[#b08243] text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#c5934f] transition-colors shadow-lg">
            View Full Menu
          </Link>
        </motion.div>
      </div>

      {/* --- SLIDER SECTION --- */}
      <section className="relative w-full px-0">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // Configuration pour voir les images précédentes/suivantes
          spaceBetween={10}
          slidesPerView={1.4} // Image centrale plus petite, laissant place aux côtés
          breakpoints={{
            640: { slidesPerView: 1.6, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1440: { slidesPerView: 2.4, spaceBetween: 40 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore - Liaison des refs pour la navigation personnalisée
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full !overflow-visible"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id || index} className="flex items-center">
              {({ isActive }) => (
                <motion.div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl bg-neutral-900"
                  animate={{
                    // L'image active est légèrement réduite (0.95)
                    // Les images de côté sont bien plus petites (0.75)
                    scale: isActive ? 0.95 : 0.75,
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive ? "grayscale(0%)" : "grayscale(40%)",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title || "Special Offer"}
                    fill
                    className="object-cover"
                    quality={90}
                    sizes="(max-width: 768px) 80vw, 50vw"
                  />

                  {/* Overlay subtil uniquement sur l'image active */}
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CUSTOM NAVIGATION ARROWS --- */}
        {/* --- CUSTOM NAVIGATION ARROWS (Visible uniquement sur Mobile) --- */}
        <div className="flex md:hidden justify-center items-center gap-6 mt-10">
          <button
            ref={prevRef}
            className="p-3 border border-[#b08243]/40 rounded-full text-[#e7d8c3] hover:bg-[#b08243] hover:text-white transition-all disabled:opacity-30"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="p-3 border border-[#b08243]/40 rounded-full text-[#e7d8c3] hover:bg-[#b08243] hover:text-white transition-all disabled:opacity-30"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpecialOffersBlock;
