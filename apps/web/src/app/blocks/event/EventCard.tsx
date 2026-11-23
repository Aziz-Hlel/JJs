'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import { motion } from 'framer-motion';
import type { EventType } from './data';

type EventCardProps = {
  event: EventType;
  index: number;
};

const EventCard = ({ event, index }: EventCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  /* Auto-play every 4s */
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const hasMultipleImages = event.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/40 transition-all duration-500"
    >
      {/* ── Image carousel ── */}
      <div className="relative aspect-[4/5] w-full">
        <div className="embla-fade" ref={emblaRef}>
          <div className="embla-fade__container">
            {event.images.map((src, i) => (
              <div className="embla-fade__slide" key={i}>
                <img src={src} alt={`${event.title} – ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* day badge */}
        <span className="absolute top-4 left-4 rounded-sm bg-[#D4AF37] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F1C1C]">
          {event.day}
        </span>

        {/* dot indicators */}
        {hasMultipleImages && (
          <div className="embla-fade__dots absolute bottom-3 left-0 right-0">
            {event.images.map((_, i) => (
              <button
                key={i}
                className={`embla-fade__dot ${i === selectedIndex ? 'embla-fade__dot--active' : ''}`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Info ── */}
      <div className="relative z-10 flex flex-col gap-3 p-6">
        <h4 className="font-serif text-md text-[#F5F5DC] italic group-hover:text-[#D4AF37] transition-colors leading-tight">
          {event.title}
          {event.description && (
            <span className="block text-sm text-[#F5F5DC]/50 not-italic font-light mt-1">
              {event.description}
            </span>
          )}
        </h4>

        {(event.time || event.timeDescription) && (
          <div className="flex items-center gap-3">
            <div className="w-5 h-[1px] bg-[#D4AF37]/40" />
            <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
              {event.time}
              {event.timeDescription && (
                <span className="font-normal normal-case tracking-normal text-[#F5F5DC]/40 ml-1">
                  {event.timeDescription}
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
