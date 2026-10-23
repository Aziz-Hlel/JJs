import ExploreSpacesV2 from '@/app/blocks/exploseSpacesV2/ExploreSpacesV2';
import HeroInnerBlock2 from '@/app/components/common/hero-inner/Hero-inner2';
import { exploreSpacesHeader as exploreSpacesHeaderData } from '@/app/data/data-explore-spaces';

const index = () => {
  return (
    <>
      <HeroInnerBlock2
        title={exploreSpacesHeaderData.title}
        image={exploreSpacesHeaderData.image}
        altText={exploreSpacesHeaderData.altText}
        breadcrumbs={exploreSpacesHeaderData.breadcrumbs}
      />

      <ExploreSpacesV2 />
    </>
  );
};

export default index;
