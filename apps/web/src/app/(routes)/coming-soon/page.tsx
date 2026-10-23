'use client';

import ComingSoonPageContent from '@/app/components/common/coming-soon/ComingSoonPageContent';
import { comingSoonData } from '@/app/data/data-coming-soon';

const ComingSoonPage = () => {
  return <ComingSoonPageContent {...comingSoonData} />;
};

export default ComingSoonPage;
