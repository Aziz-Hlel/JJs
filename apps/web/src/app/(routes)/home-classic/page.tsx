import { AboutClassic } from '@/app/blocks/about';
import Cta from '@/app/blocks/cta/variants/ctaOne/ctaOne';
import { MasonryGallery } from '@/app/blocks/gallery';
import { HeroClassicSliderBlock } from '@/app/blocks/hero';
import WeekSpecials from '@/app/blocks/menu/menu-week-specials/menuWeekSpecials';
import { ServicesList } from '@/app/blocks/services/';
import { SpecialOffersTwoBlock } from '@/app/blocks/special-offers';
import { TeamOneBlock as TeamBlock } from '@/app/blocks/team';

// Data
import { aboutData } from '@/app/data/data-about';
import { ctaData } from '@/app/data/data-cta';
import { menuWeekData } from '@/app/data/data-dish';
import { galleryData } from '@/app/data/data-gallery';
import { sliderHeroData } from '@/app/data/data-hero';
import { ServiceCardListData } from '@/app/data/data-services';
import { specialOffersData } from '@/app/data/data-special-offers';
import { teamBlockData } from '@/app/data/data-team';

const PageHomeClassic = () => {
  return (
    <>
      {/* Slider Hero - Block */}
      <HeroClassicSliderBlock {...sliderHeroData} />
      {/* / Slider Hero - Block */}

      {/* About - Block */}
      <AboutClassic {...aboutData} />
      {/* / About - Block */}

      {/* Special Offers - Block */}
      <SpecialOffersTwoBlock {...specialOffersData} />
      {/* / Special Offers - Block */}

      {/* Badges - Block */}
      {/* <BadgesList {...badgesListData} /> */}
      {/* / Badges - Block */}

      {/* Week Specials - Block */}
      <WeekSpecials {...menuWeekData} />
      {/* / Week Specials - Block */}

      {/* Illustrations Card - List - Block */}
      <ServicesList {...ServiceCardListData} />
      {/* / Illustrations Card - List - Block */}

      {/* CTA - Block */}
      <Cta {...ctaData} />
      {/* / CTA - Block */}

      {/* Masonry Gallery */}
      <MasonryGallery {...galleryData} />
      {/* / Masonry Gallery */}

      {/* Team */}
      <TeamBlock {...teamBlockData} />
      {/* / Team */}
    </>
  );
};

export default PageHomeClassic;
