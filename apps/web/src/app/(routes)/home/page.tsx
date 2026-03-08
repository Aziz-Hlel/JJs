import { AboutClassic } from "@/app/blocks/about";
import { MasonryGallery } from "@/app/blocks/gallery";
import { Landing } from "@/app/blocks/landing/Landing";
import MeetStars from "@/app/blocks/meetStars/MeetStars";
import { ServicesList } from "@/app/blocks/services";
import { SpecialOffersBlock } from "@/app/blocks/special-offers";
import { aboutData } from "@/app/hooks/data-about";
import { ctaData } from "@/app/hooks/data-cta";
import { galleryData } from "@/app/hooks/data-gallery";
import { ServiceCardListData } from "@/app/hooks/data-services";
import { specialOffersData } from "@/app/hooks/data-special-offers";
import Cta from "@/app/blocks/cta/variants/ctaOne/ctaOne";
import Entertainment from "@/app/blocks/badges/BadgesList";

const HomePage = () => {
  return (
    <>
      <>
        <Landing />
        {/* l about t3 home */}
        <AboutClassic {...aboutData} />

        {/* explore sapces */}
        <MeetStars />

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
