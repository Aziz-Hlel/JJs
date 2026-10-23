import { AboutClassic, AboutTwoCols } from '@/app/blocks/about';

// Import Data
import HsanBlock from '@/app/blocks/about/hsan/HsanBlock';
import HeroInnerBlock2 from '@/app/components/common/hero-inner/Hero-inner2';
import { HeroInnerAboutData } from '@/app/data/data';
import { aboutData, aboutTwoData } from '@/app/data/data-about';

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
