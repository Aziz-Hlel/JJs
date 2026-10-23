'use client';

import BlockTitle from '@/app/components/common/block-title/block-title';
import { explorSpacesData } from '@/app/data/data-explore-spaces';
import { teamBlockData } from '@/app/data/data-team';
import Image from 'next/image';
import Link from 'next/link';

const ExploreSpacesV2 = ({ minimized = false }: { minimized?: boolean }) => {
  const blockTitleProps = {
    title: teamBlockData.title,
    subtitle: teamBlockData.subtitle,
    divider: teamBlockData.divider,
  };

  const displayedSpaces = minimized ? explorSpacesData.slice(0, 3) : explorSpacesData;

  return (
    <section className="py-12 px-4 bg-[#1A3030]">
      {/* Augmentation de la largeur max pour donner plus de place aux images */}
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="team-block__container  ">
          <BlockTitle {...blockTitleProps} />
        </div>

        {/* Band Members Grid - gap réduit pour gagner de l'espace horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {displayedSpaces.map((space, index) => (
            <div
              key={space.title}
              className="group relative overflow-hidden rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container - Ratio 3/4 conservé mais image plus large via le container */}
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  width={900}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start space-y-2">
                <div className="text-primary text-[10px] tracking-[0.4em]  font-semibold uppercase whitespace-nowrap m-0">
                  {space.subtitle}
                </div>

                <h4 className="font-heading text-sm sm:text-base md:text-sm lg:text-base text-white  group-hover:text-primary transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis   tracking-wide">
                  {space.title}
                </h4>

                <p
                  className="text-white/70 text-xs sm:text-sm leading-tight max-w-[95%] 
                    /* Visible par défaut sur mobile, caché sur desktop par défaut */
                    opacity-100 sm:opacity-0 
                    /* Position normale sur mobile, décalée sur desktop */
                    translate-y-0 sm:translate-y-2 
                    /* Effets au survol pour le desktop */
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-500"
                >
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {minimized && (
          <div className="text-center mt-12 ">
            <Link
              href="/explore-spaces"
              className="  border-b hover:text-primary hover:border-primary transition-all duration-300 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium"
            >
              Explore Full Venue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreSpacesV2;
