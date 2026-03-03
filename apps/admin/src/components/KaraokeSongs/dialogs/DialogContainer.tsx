import { useSelectedRow } from '../context/selected-row-provider';
import AddKaraokeSong from './AddKaraokeSong';
import DeleteKaraokeSong from './DeleteKaraokeSong';
import EditKaraokeSong from './EditKaraokeSong';

const DialogContainer = () => {
  const { openDialog } = useSelectedRow();
  if (openDialog === 'add') return <AddKaraokeSong />;
  if (openDialog === 'delete') return <DeleteKaraokeSong />;
  if (openDialog === 'edit') return <EditKaraokeSong />;
  return null;
};

export default DialogContainer;
