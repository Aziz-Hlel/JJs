import { HeroClassicSliderBlock } from '@/app/blocks/hero';
import HomePagesBlock from '@/app/blocks/homepages/homepages';
import InnersPagesBlock from '@/app/blocks/innerspages/innerspages';
import ServicesList from '@/app/blocks/services/variants/servicesList/ServicesList';
import { sliderHeroIntroData } from '@/app/data/data-hero';
import { homepagesListData } from '@/app/data/data-homepages';
import { innerspagesListData } from '@/app/data/data-innerspages';

import Cta from '@/app/blocks/cta/variants/ctaOne/ctaOne';
import { ctaIntroData } from '@/app/data/data-cta';
import { FeaturesCardListData } from '@/app/data/data-features';

const PageIntro = () => {
  return (
    <>
      {/* Hero Intro */}
      <HeroClassicSliderBlock {...sliderHeroIntroData} />
      {/* / Hero Intro */}

      <div className="landing-page__content">
        {/* Home Pages */}
        <HomePagesBlock {...homepagesListData} />
        {/* / Home Pages */}

        {/* banner */}
        <div className="z-50 sections bg-coarseWool-900">
          <div className="sections__container">
            {/* Section title */}
            <div className="pb-0 section-title section-title__center">
              <p className="mb-0 text-center">
                Not only the home page, we have designed many beautiful individual pages to meet your different needs.
              </p>
            </div>
            {/*/ Section title */}
          </div>
        </div>
        {/*/ banner */}

        {/* Home Pages */}
        <InnersPagesBlock {...innerspagesListData} />
        {/* / Home Pages */}
      </div>

      {/* banner */}
      <div className="sections">
        <div className="sections__container">
          {/* Section title */}
          <div className="pb-0 section-title section-title__center">
            <h3 className="mb-0 text-calico-500 text-center">You are in the right place now</h3>
          </div>
          {/*/ Section title */}
        </div>
      </div>
      {/*/ banner */}

      {/* Illustrations Card - List - Block */}
      <ServicesList {...FeaturesCardListData} />
      {/* / Illustrations Card - List - Block */}

      {/* CTA - Block */}
      <Cta {...ctaIntroData} />
      {/* / CTA - Block */}
    </>
  );
};

export default PageIntro;
