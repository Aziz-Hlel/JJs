"use client";
import React from "react";
import { AboutBlockProps } from "@/app/types/common.types";

interface AboutBlockWithImagesProps extends AboutBlockProps {
  title?: string;
  leftImage?: string;
  smallRightImage?: string;
}

const AboutTwoCols = ({
  title = "UTTERLY UNIQUE LOCATIONS",
  subtitle = "Born in the heart of Bahrain",
  descriptionParagraphsTwo = [],
  leftImage = "/about/gallery-27a.jpg",
  smallRightImage = "/about/gallery-29a.jpg",
}: AboutBlockWithImagesProps) => {
  if (!descriptionParagraphsTwo || descriptionParagraphsTwo.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#1A3030] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* GAUCHE : Grande image - CACHÉE SUR MOBILE */}
        <div className=" lg:col-span-7 w-full h-[700px]">
          <img
            src={leftImage}
            alt="Atmospheric location"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DROITE : Petite image + Texte */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pl-12">
          {/* PETITE IMAGE (gallery-29a) - MAINTENANT CACHÉE SUR MOBILE */}
          <div className="hidden lg:block w-full max-w-[320px] mb-12 self-center lg:self-start">
            <img
              src={smallRightImage}
              alt="Performance"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* BLOC TEXTE - Seul élément visible sur mobile */}
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="row-span-2 text-6xl lg:text-8xl font-bold text-primary leading-none">
                JJ’s
              </div>

              <h3 className="hidden lg:block text-lg font-light uppercase text-white">
                Irish Pub &
              </h3>

              <h3 className="hidden lg:block text-lg font-light uppercase text-white">
                Restaurant
              </h3>

              <h5 className="block lg:hidden text-lg font-light uppercase text-white">
                Irish Pub &
              </h5>

              <h5 className="block lg:hidden text-lg font-light uppercase text-white">
                Restaurant
              </h5>
            </div>

            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-sm tracking-wide">
              {descriptionParagraphsTwo.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutTwoCols.displayName = "AboutTwoCols";
export default AboutTwoCols;
