'use client';

import { HeroInnerHistoryData } from '@/app/data/data';
import HeroInnerBlock from '@/app/components/common/hero-inner/Hero-inner';
import EventCard from './EventCard';
import { eventsList } from './data';
import './styles.css';

const EventsComp = () => {
  return (
    <div className="bg-[#0F1C1C] min-h-screen selection:bg-[#D4AF37] selection:text-[#0F1C1C]">
      <HeroSection />

      <section className="relative z-10 bg-[#0F1C1C] py-16 lg:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-[#D4AF37] text-[9px] lg:text-xs uppercase tracking-[0.4em] lg:tracking-[0.5em] font-bold mb-4 block">
                The Weekly Program
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#F5F5DC] italic leading-[1.1]">
                What&apos;s On at <br className="hidden md:block" /> JJ&apos;s
              </h2>
            </div>

            <div className="h-[1px] flex-grow bg-[#D4AF37]/20 mb-4 mx-8 hidden lg:block" />

            <p className="text-[#F5F5DC]/40 text-xs lg:text-sm italic font-light max-w-xs mx-auto md:mx-0">
              From daily happy hours to legendary themed nights — there&apos;s always something happening.
            </p>
          </div>

          {/* Events grid — map through EventCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {eventsList.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-[#D4AF37]/10">
        <p className="font-serif italic text-[#F5F5DC]/40 text-xs md:text-sm">Authentic Irish Hospitality Since 1908</p>
      </footer>
    </div>
  );
};


const HeroSection = () => {
  return (
    <HeroInnerBlock
      title={'Entertainment'}
      image={'/hero/gallery-14a.jpg'}
      altText={HeroInnerHistoryData.altText}
      breadcrumbs={[
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Entertainment', link: '/entertainment' },
      ]}
    />
  );
};

export default EventsComp;
