import { useSelectedRow } from '../context/selected-row-provider';
import AddOffer from './AddKaraokeSong';
import DeleteProduct from './DeleteKaraokeSong';
import EditProduct from './EditKaraokeSong';

const DialogContainer = () => {
  const { openDialog } = useSelectedRow();
  if (openDialog === 'add') return <AddOffer />;
  if (openDialog === 'delete') return <DeleteProduct />;
  if (openDialog === 'edit') return <EditProduct />;
  return null;
};

export default DialogContainer;
