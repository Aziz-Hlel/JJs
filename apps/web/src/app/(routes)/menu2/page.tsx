import { CtaTwo } from '@/app/blocks/cta';
import { GalleryBasic as Gallery } from '@/app/blocks/gallery';
import MenuImageBlock from '@/app/blocks/menu/menu-image/menuImage';
import { SpecialOffersTwoBlock } from '@/app/blocks/special-offers';
import HeroInner from '@/app/components/common/hero-inner/Hero-inner';
import { HeroInnerMenuData } from '@/app/data/data';
import { ctaTwoData } from '@/app/data/data-cta';
import { categoryDishesData } from '@/app/data/data-dish';
import { galleryData } from '@/app/data/data-gallery';
import { specialOffersData } from '@/app/data/data-special-offers';

const MenuPage = () => {
  return (
    <main>
      <HeroInner
        title={HeroInnerMenuData.title}
        image={HeroInnerMenuData.image}
        altText={HeroInnerMenuData.altText}
        breadcrumbs={HeroInnerMenuData.breadcrumbs}
      />
      <SpecialOffersTwoBlock {...specialOffersData} />
      <MenuImageBlock {...categoryDishesData} />
      <CtaTwo {...ctaTwoData} />

      <Gallery {...galleryData} />
    </main>
  );
};

export default MenuPage;
