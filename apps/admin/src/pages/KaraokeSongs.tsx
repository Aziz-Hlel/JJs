import { SelectedRowProvider } from '@/components/KaraokeSongs/context/selected-row-provider';
import KaraokeSongsIndex from '@/components/KaraokeSongs/KaraokeSongs.index';

const KaraokeSongs = () => (
  <SelectedRowProvider>
    <KaraokeSongsIndex />
  </SelectedRowProvider>
);

export default KaraokeSongs;
