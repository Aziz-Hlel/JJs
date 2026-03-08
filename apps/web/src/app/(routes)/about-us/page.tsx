import { AboutClassic, AboutModern, AboutTwoCols } from "@/app/blocks/about";
import ContactBlock from "@/app/blocks/Booking/contact";
import { TeamTwoBlock } from "@/app/blocks/team";
import { TestimonialsBlock } from "@/app/blocks/testimonials/";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { MasonryGallery } from "@/app/blocks/gallery";
import BadgesList from "@/app/blocks/badges/BadgesList";

// Import Data
import { HeroInnerAboutData } from "@/app/hooks/data";
import { testimonialsData } from "@/app/hooks/data-testimonials";
import { badgesListData } from "@/app/hooks/data-brands";
import { aboutData, aboutTwoData } from "@/app/hooks/data-about";
import { contactData } from "@/app/hooks/data-contact";
import { galleryData } from "@/app/hooks/data-gallery";
import HeroInnerBlock2 from "@/app/components/common/hero-inner/Hero-inner2";
import HsanBlock from "@/app/blocks/about/hsan/HsanBlock";

const AboutPage = () => {
  return (
    <>
      {/* Hero Inner - Block */}
      <HeroInnerBlock2
        title={HeroInnerAboutData.title}
        image={HeroInnerAboutData.image}
        altText={HeroInnerAboutData.altText}
        breadcrumbs={HeroInnerAboutData.breadcrumbs}
      />

      <AboutClassic {...aboutData} />
      {/* / About Classic - Block */}

      {/* Badges Block */}
      
      {/* / Badges Block */}
      {/* About Modern - Block */}
      <AboutTwoCols {...aboutTwoData} />
      {/* / About Modern - Block */}

      {/* Masonry Gallery */}
      {/*<MasonryGallery {...galleryData} />*/}
      {/* / Masonry Gallery */}
      {/* / Hero Inner - Block */}
      <HsanBlock />
      {/* About Classic - Block */}
    </>
  );
};

export default AboutPage;
