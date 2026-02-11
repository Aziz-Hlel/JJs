import type { KaraokeSongResponse } from '@contracts/karaekoSong/KaraokeSongResponse';
import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { UpdatekaraekoSongRequest } from '@contracts/karaekoSong/updatekaraekoSongRequest';

const KaraokeSongService = {
  getAll: async () => await apiService.getThrowable<KaraokeSongResponse[]>(apiRoutes.karaokeSongs.getAll()),
  update: async ({ id, data }: { id: string; data: UpdatekaraekoSongRequest }) =>
    await apiService.putThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.update(id), data),
};

export default KaraokeSongService;
