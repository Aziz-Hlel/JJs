import { HistoryBlock } from '@/app/blocks/history';
import HeroInnerBlock from '@/app/components/common/hero-inner/Hero-inner';

// Data
import { HeroInnerHistoryData } from '@/app/data/data';
import { historyData } from '@/app/data/data-history';
const HistoryPage = () => {
  return (
    <>
      {/* Hero Inner - Block */}
      <HeroInnerBlock
        title={'History'}
        image={'/hero/gallery-14a.jpg'}
        altText={HeroInnerHistoryData.altText}
        breadcrumbs={[
          { id: 1, title: 'Home', link: '/' },
          { id: 2, title: 'History', link: '/history2' },
        ]}
      />
      {/* / Hero Inner - Block */}

      {/* History Block */}
      <HistoryBlock {...historyData} />
      {/* / History Block */}

      {/* Badges Block */}
      {/*<BadgesList {...badgesListData} />*/}
      {/* / Badges Block */}
    </>
  );
};

export default HistoryPage;
