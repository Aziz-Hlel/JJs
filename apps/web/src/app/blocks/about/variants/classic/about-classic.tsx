"use client";
import Image from "next/image";
import React from "react";

import { AboutBlockProps } from "@/app/types/common.types";
import Link from "next/link";

const AboutClassicBlock = ({
  imageUrl,
  altText,
  descriptionParagraphs,
  subtitle,
  title,
}: AboutBlockProps) => {
  if (!imageUrl || !altText || !descriptionParagraphs) return null;

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* SECTION TEXTE */}
        <div className="order-2 lg:order-1 space-y-8 lg:pr-16">
          <div className="flex flex-col gap-4">
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-primary flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span>{" "}
              {subtitle || "OUR STORY"}
            </span>
            <h2 className="text-[10px] sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white   whitespace-nowrap">
              {title || "MISSION & VISION"}
            </h2>
          </div>

          {/* max-w-md assure que le texte reste compact et loin de l'image */}
          <div className="space-y-6 text-text-muted leading-relaxed max-w-md">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/history2"
              className="mt-4 inline-block bg-primary hover:bg-primary/90 text-white hover:text-white px-8 py-5 rounded-full font-bold tracking-wider transition-colors duration-300 uppercase text-sm"
            >
              More About Us
            </Link>
          </div>
        </div>

        {/* SECTION IMAGES */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          {/* Image Principale */}
          <div className="relative w-[280px] h-[380px] md:w-[450px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image Secondaire (Cocktail) avec ajustement du retrait à gauche */}
          <div className="absolute -bottom-10 -left-4 md:-left-16 lg:-left-12 w-[160px] h-[200px] md:w-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-xl z-10 hidden sm:block border-4 border-[#F9F3EB] ">
            <Image
              src="/ourImages/drink/drink3.png"
              alt="Detail"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClassicBlock;
