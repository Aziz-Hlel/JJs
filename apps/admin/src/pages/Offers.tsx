import { SelectedRowProvider } from '@/components/Offers/context/selected-row-provider';
import OffersIndex from '@/components/Offers/Offers.index';

const Offers = () => (
  <SelectedRowProvider>
    <OffersIndex />;
  </SelectedRowProvider>
);

export default Offers;
