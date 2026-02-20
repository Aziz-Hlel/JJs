import { useSelectedRow } from '../context/selected-row-provider';
import AddOffer from './AddEntertainment';
import DeleteProduct from './DeleteEntertainment';
import EditProduct from './EditEntertainment';
import FeatureEntertainment from './FeatureEntertainment';

const DialogContainer = () => {
  const { openDialog } = useSelectedRow();
  if (openDialog === 'add') return <AddOffer />;
  if (openDialog === 'delete') return <DeleteProduct />;
  if (openDialog === 'edit') return <EditProduct />;
  if (openDialog === 'feature') return <FeatureEntertainment />;
};

export default DialogContainer;
