"use client";
import { Timeline } from "@/app/components/ui/timeline";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

/**
 * Composant ImageSlider : Affiche une image à la fois sans bordures latérales
 */
const ImageSlider = ({ images }: { images: string[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const move = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: move, behavior: "smooth" });
    }
  };

  // Si une seule image
  if (images.length <= 1) {
    return (
      <div className="relative group overflow-hidden rounded-xl">
        <button
          onClick={() => setSelectedImg(images[0])}
          className="absolute top-3 right-3 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white"
        >
          <Maximize2 size={18} />
        </button>
        <Image
          src={images[0]}
          alt="Milestone"
          width={800}
          height={500}
          className="h-60 w-full rounded-xl object-cover shadow-md md:h-80" // Changé en object-cover
        />
        {selectedImg && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImg}
                alt="Plein écran"
                fill
                className="object-contain" // Gardé en contain pour la vue plein écran
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="relative group w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          →
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pointer-events-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative min-w-full snap-center flex-shrink-0 flex justify-center" // Supprimé bg-black/5
            >
              <button
                onClick={() => setSelectedImg(src)}
                className="absolute top-3 right-3 z-30 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white"
              >
                <Maximize2 size={18} />
              </button>

              <Image
                src={src}
                alt={`Gallery image ${idx}`}
                width={800}
                height={500}
                className="h-60 w-full object-cover md:h-96" // Changé en object-cover
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm"
            />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:scale-110 transition-transform">
            <X size={40} />
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Plein écran"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "Looking Back",
      content: (
        <div className="space-y-4">
          <h2 className="text-lg font-bold dark:text-white">
            A Timeline of JJ&apos;s Milestones
          </h2>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Recognizing key achievements and partnerships that define our
            journey.
          </p>
          <ImageSlider images={["/ourImages/awards/award.jpg"]} />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <h2 className="text-lg font-bold dark:text-white">
            JJ&apos;s best pub in Bahrain
          </h2>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            🎉 Guess who’s Bahrain’s Favourite Pub? We are! 🏆🍻
          </p>
          <ImageSlider images={["/ourImages/awards/award2025.jpg"]} />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <h2 className="text-lg font-bold dark:text-white">
            JJ&apos;S KARAOKE IS 20 YEARS STRONG
          </h2>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Celebrating 20 incredible years from humble beginnings in 2005.
          </p>
          <ImageSlider
            images={[
              "/ourImages/awards/karaoke_20_annual.jpg",
              "/ourImages/awards/karaoke_winner.jpg",
            ]}
          />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <h2 className="text-lg font-bold dark:text-white">
            Supporting Tomorrow’s Athletes
          </h2>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Proud sponsor of 24N Sports Academy, supporting structured training
            and discipline.
          </p>
          <ImageSlider
            images={[
              "/ourImages/awards/amateur_football_league_0.jpg",
              "/ourImages/awards/amateur_football_league_1.jpg",
              "/ourImages/awards/amateur_football_league_2.jpg",
            ]}
          />
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div className="space-y-4">
          <h2 className="text-lg font-bold dark:text-white">
            Bahrain’s Favourite Pub
          </h2>
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A huge shoutout to everyone who voted for JJ’s at the Fact Dining
            Awards!
          </p>
          <ImageSlider
            images={[
              "/ourImages/awards/awards2022_1.jpg",
              "/ourImages/awards/awards2022_2.jpg",
              "/ourImages/awards/awards2022_3.jpg",
            ]}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
