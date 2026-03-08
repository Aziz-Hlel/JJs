"use client";
import Image from "next/image";
import React from "react";
import BlockTitle from "@/app/components/common/block-title/block-title";
import { motion } from "framer-motion";
import { HistoryBlockProps } from "@/app/types/common.types";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HistoryBlock = ({ subtitle, title, items }: HistoryBlockProps) => {
  return (
    <section className="py-24 bg-black relative">
      {/* --- CADRE EXTÉRIEUR (THE FRAME) --- */}
      <div className="absolute inset-4 md:inset-8 border border-[#d4af37]/20 pointer-events-none z-50">
        {/* Coins stylisés */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#e7d8c3]" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#e7d8c3]" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#e7d8c3]" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#e7d8c3]" />
      </div>

      <div className="container mx-auto px-8 lg:px-24 relative z-10">
        <BlockTitle subtitle={subtitle} title={title} />

        <div className="mt-20 space-y-32">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col md:flex-row gap-12 items-center justify-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* IMAGE DANS SON PROPRE CADRE */}
              <div className="w-full max-w-[280px] md:w-1/3">
                <div className="relative aspect-[4/5] overflow-hidden group shadow-2xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 80vw, 25vw"
                  />
                  {/* Bordure intérieure image */}
                  <div className="absolute inset-0 border border-[#d4af37]/30 m-3 pointer-events-none" />
                </div>
              </div>

              {/* CONTENU TEXTE */}
              <div
                className={`w-full md:w-1/2 flex flex-col ${index % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"} text-center`}
              >
                <span className="text-[#d4af37] font-serif text-4xl md:text-6xl mb-2 block opacity-30 italic">
                  {item.year}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif text-[#f5f5dc] mb-4 tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-[#f5f5dc]/60 text-sm md:text-base leading-relaxed font-light max-w-md italic">
                  {item.description}
                </p>
                <div className="w-16 h-[1px] bg-[#d4af37]/50 mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryBlock;
