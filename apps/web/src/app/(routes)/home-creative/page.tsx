'use client';

import { AboutClassic } from '@/app/blocks/about';
import Cta from '@/app/blocks/cta/variants/ctaOne/ctaOne';
import { GalleryBasic } from '@/app/blocks/gallery';
import { HeroCreativeSliderBlock } from '@/app/blocks/hero';
import WeekSpecials from '@/app/blocks/menu/menu-week-specials/menuWeekSpecials';
import ServicesList from '@/app/blocks/services/variants/servicesList/ServicesList';
import { SpecialOffersBlock } from '@/app/blocks/special-offers';
import { TeamOneBlock as TeamBlock } from '@/app/blocks/team';

// Data
import ExploreSpacesV2 from '@/app/blocks/exploseSpacesV2/ExploreSpacesV2';
import { Landing } from '@/app/blocks/landing/Landing';
import { aboutData } from '@/app/data/data-about';
import { ctaData } from '@/app/data/data-cta';
import { menuWeekData } from '@/app/data/data-dish';
import { galleryData } from '@/app/data/data-gallery';
import { sliderHeroData } from '@/app/data/data-hero';
import { ServiceCardListData } from '@/app/data/data-services';
import { specialOffersData } from '@/app/data/data-special-offers';
import { teamBlockData } from '@/app/data/data-team';

const PageHomeCreative = () => {
  return (
    <>
      <Landing />

      <ExploreSpacesV2 minimized />

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
