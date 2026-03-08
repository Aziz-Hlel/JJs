"use client";

import BlockTitle from "@/app/components/common/block-title/block-title";
import { teamBlockData } from "@/app/hooks/data-team";

const spaces = [
  {
    title: "Live Sports Bar",
    subtitle: "SPORTS BAR",
    description:
      "With over 25 HD screens showing sports from around the world, catch all the action live in our dedicated sports bar.",
    image: "/ourImages/band/sport.jpg",
  },
  {
    title: "Main Bar & Restaurant",
    subtitle: "MAIN BAR",
    description:
      "Experience one of the oldest bars in north Dublin city. Our main bar and restaurant offers casual seating and dining throughout the day.",
    image: "/ourImages/band/pub.jpg",
  },
  {
    title: "Whiskey Bar & Lounge",
    subtitle: "WHISKEY BAR",
    description:
      "Our basement whiskey bar is a unique subterranean space serving the finest whiskeys and cocktails in an intimate setting.",
    image: "/ourImages/band/whisky.webp",
  },
];

const ExploreSpaces = () => {
  const blockTitleProps = {
    title: teamBlockData.title,
    subtitle: teamBlockData.subtitle,
    phrase: teamBlockData.description,
    divider: teamBlockData.divider,
  };

  return (
    <section className="py-12 px-4 bg-[#1A3030]">
      {/* Augmentation de la largeur max pour donner plus de place aux images */}
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="team-block__container mb-2">
          <BlockTitle {...blockTitleProps} />
        </div>

        {/* Band Members Grid - gap réduit pour gagner de l'espace horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {spaces.map((space, index) => (
            <div
              key={space.title}
              className="group relative overflow-hidden rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container - Ratio 3/4 conservé mais image plus large via le container */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3030] via-[#1A3030]/20 to-transparent opacity-90"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-gold text-[10px] tracking-[0.2em] mb-1 font-semibold uppercase opacity-90 whitespace-nowrap">
                  {space.subtitle}
                </p>

                {/* TITRE : Forçage sur une seule ligne avec gestion du débordement */}
                <h3 className="font-heading text-sm sm:text-base md:text-sm lg:text-base text-white mb-2 group-hover:text-gold transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                  {space.title}
                </h3>

                <p className="text-white/70 text-[11px] leading-relaxed max-w-[95%] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-gold/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium"
          >
            Explore Full Venue
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreSpaces;
