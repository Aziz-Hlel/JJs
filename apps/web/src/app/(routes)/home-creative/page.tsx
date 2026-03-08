'use client';

import { AboutClassic } from "@/app/blocks/about";
import Cta from "@/app/blocks/cta/variants/ctaOne/ctaOne";
import { GalleryBasic } from "@/app/blocks/gallery";
import ServicesList from "@/app/blocks/services/variants/servicesList/ServicesList";
import { HeroCreativeSliderBlock } from "@/app/blocks/hero";
import { SpecialOffersBlock } from "@/app/blocks/special-offers";
import { TeamOneBlock as TeamBlock } from "@/app/blocks/team";
import WeekSpecials from "@/app/blocks/menu/menu-week-specials/menuWeekSpecials";

// Data
import { badgesListData } from "@/app/hooks/data-brands";
import { aboutData } from "@/app/hooks/data-about";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import { menuWeekData } from "@/app/hooks/data-dish";
import { ServiceCardListData } from "@/app/hooks/data-services";
import { ctaData } from "@/app/hooks/data-cta";
import { galleryData } from "@/app/hooks/data-gallery";
import { teamBlockData } from "@/app/hooks/data-team";
import { Landing } from "@/app/blocks/landing/Landing";
import { sliderHeroData } from "@/app/hooks/data-hero";
import MeetStars from "@/app/blocks/meetStars/MeetStars";

const PageHomeCreative = () => {
  return (
    <>
      <Landing />

      <MeetStars />

      {/* Slider Hero - Block */}
      <HeroCreativeSliderBlock {...sliderHeroData} />
      {/* / Slider Hero - Block */}

      {/* About - Block */}
      <AboutClassic {...aboutData} />
      {/* / About - Block */}

      {/* Special Offers - Block */}
      <SpecialOffersBlock {...specialOffersData} />
      {/* / Special Offers - Block */}

      {/* Badges - Block */}
      {/* / Badges - Block */}

      {/* Week Specials - Block */}
      <WeekSpecials {...menuWeekData} />
      {/* / Week Specials - Block */}

      {/* Services - List - Block */}
      <ServicesList {...ServiceCardListData} />
      {/* / Services - List - Block */}

      {/* CTA - Block */}
      <Cta {...ctaData} />
      {/* / CTA - Block */}

      {/* Gallery */}
      <GalleryBasic {...galleryData} />
      {/* / Gallery */}

      {/* Team */}
      <TeamBlock {...teamBlockData} />
      {/* / Team */}
    </>
  );
};

export default PageHomeCreative;
