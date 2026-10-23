// import BadgesList from "@/app/blocks/badges/BadgesList";
import CtaTwo from '@/app/blocks/cta/variants/ctaTwo/ctaTwo';
import { GalleryBasic as Gallery } from '@/app/blocks/gallery';
import { MenuTabsBlock } from '@/app/blocks/menu';
import { SpecialOffersTwoBlock } from '@/app/blocks/special-offers';
import HeroInnerBlock from '@/app/components/common/hero-inner/Hero-inner';

// Data
import { HeroInnerMenuTabsData } from '@/app/data/data';
import { ctaTwoData } from '@/app/data/data-cta';
import { categoryDishesData } from '@/app/data/data-dish';
import { galleryData } from '@/app/data/data-gallery';
import { specialOffersData } from '@/app/data/data-special-offers';

const PageMenu = () => {
  return (
    <div className="menu-page menu-tabs">
      {/* Hero Inner - Block */}
      <HeroInnerBlock
        title={HeroInnerMenuTabsData.title}
        image={HeroInnerMenuTabsData.image}
        altText={HeroInnerMenuTabsData.altText}
        breadcrumbs={HeroInnerMenuTabsData.breadcrumbs}
      />
      {/* / Hero Inner - Block */}

      {/* Menu Image */}
      <MenuTabsBlock {...categoryDishesData} />
      {/* / Menu Image */}

      {/* Special Offers - Block */}
      <SpecialOffersTwoBlock {...specialOffersData} />
      {/* / Special Offers - Block */}

      {/* CtaTwo - Block */}
      <CtaTwo {...ctaTwoData} />
      {/* / CtaTwo - Block */}

      {/* Badges - Block */}
      {/* <BadgesList {...badgesListData} /> */}
      {/* / Badges - Block */}

      {/* Gallery */}
      <Gallery {...galleryData} />
      {/* / Gallery */}
    </div>
  );
};

export default PageMenu;
