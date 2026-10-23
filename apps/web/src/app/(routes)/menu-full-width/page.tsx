// import BadgesList from "@/app/blocks/badges/BadgesList";
import CtaTwo from '@/app/blocks/cta/variants/ctaTwo/ctaTwo';
import { GalleryBasic as Gallery } from '@/app/blocks/gallery';
import MenuImageBlock from '@/app/blocks/menu/menu-image/menuImage';
import { SpecialOffersTwoBlock } from '@/app/blocks/special-offers';
import HeroInnerBlock from '@/app/components/common/hero-inner/Hero-inner';
// Data
import { HeroInnerMenuFullData } from '@/app/data/data';
import { ctaTwoData } from '@/app/data/data-cta';
import { categoryDishesData } from '@/app/data/data-dish';
import { galleryData } from '@/app/data/data-gallery';
import { specialOffersData } from '@/app/data/data-special-offers';
const PageMenu = () => {
  return (
    <>
      {/* Hero Inner - Block */}
      <HeroInnerBlock
        title={HeroInnerMenuFullData.title}
        image={HeroInnerMenuFullData.image}
        altText={HeroInnerMenuFullData.altText}
        breadcrumbs={HeroInnerMenuFullData.breadcrumbs}
      />
      {/* / Hero Inner - Block */}

      {/* Special Offers - Block */}
      <SpecialOffersTwoBlock {...specialOffersData} />
      {/* / Special Offers - Block */}

      {/* Menu Image */}
      <MenuImageBlock {...categoryDishesData} className="menu__container__full" />
      {/* / Menu Image */}

      {/* CtaTwo - Block */}
      <CtaTwo {...ctaTwoData} />
      {/* / CtaTwo - Block */}

      {/* Badges - Block */}
      {/* <BadgesList {...badgesListData} /> */}
      {/* / Badges - Block */}

      {/* Gallery */}
      <Gallery {...galleryData} />
      {/* / Gallery */}
    </>
  );
};

export default PageMenu;
