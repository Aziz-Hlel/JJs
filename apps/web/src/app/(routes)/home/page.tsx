import { AboutClassic } from '@/app/blocks/about';
import Entertainment from '@/app/blocks/badges/BadgesList';
import Cta from '@/app/blocks/cta/variants/ctaOne/ctaOne';
import ExploreSpacesV2 from '@/app/blocks/exploseSpacesV2/ExploreSpacesV2';
import { MasonryGallery } from '@/app/blocks/gallery';
import { Landing } from '@/app/blocks/landing/Landing';
import { ServicesList } from '@/app/blocks/services';
import { SpecialOffersBlock } from '@/app/blocks/special-offers';
import { aboutData } from '@/app/data/data-about';
import { ctaData } from '@/app/data/data-cta';
import { galleryData } from '@/app/data/data-gallery';
import { ServiceCardListData } from '@/app/data/data-services';
import { specialOffersData } from '@/app/data/data-special-offers';

const HomePage = () => {
  return (
    <>
      <>
        <Landing />
        {/* l about t3 home */}
        <AboutClassic {...aboutData} />

        {/* explore sapces */}
        <ExploreSpacesV2 minimized />

        {/* brand vlaues */}
        <ServicesList {...ServiceCardListData} />

        {/* Entertainment */}
        <Entertainment />
        {/* / Badges - Block */}

        {/* menu f home */}
        <Cta {...ctaData} />

        {/* Gallery */}
        <MasonryGallery {...galleryData} />

        {/* Special Offers - Block */}
        <SpecialOffersBlock {...specialOffersData} />
      </>
    </>
  );
};

export default HomePage;
