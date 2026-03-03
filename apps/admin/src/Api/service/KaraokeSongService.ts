import type { KaraokeSongResponse } from '@contracts/schemas/karaekoSong/KaraokeSongResponse';
import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { CreatekaraekoSongRequest } from '@contracts/schemas/karaekoSong/createkaraekoSongRequest';
import type { UpdatekaraekoSongRequest } from '@contracts/schemas/karaekoSong/updatekaraekoSongRequest';

const KaraokeSongService = {
  getAll: async () => await apiService.getThrowable<KaraokeSongResponse[]>(apiRoutes.karaokeSongs.getAll()),
  create: async (data: CreatekaraekoSongRequest) =>
    await apiService.postThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.create(), data),
  update: async ({ id, data }: { id: string; data: UpdatekaraekoSongRequest }) =>
    await apiService.putThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.update(id), data),
  delete: async (id: string) =>
    await apiService.deleteThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.delete(id)),
};

export default KaraokeSongService;
