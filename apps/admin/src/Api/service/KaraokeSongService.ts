import type { KaraokeSongResponse } from '@repo/contracts/schemas/karaekoSong/KaraokeSongResponse';
import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { CreatekaraekoSongRequest } from '@repo/contracts/schemas/karaekoSong/createkaraekoSongRequest';
import type { UpdatekaraekoSongRequest } from '@repo/contracts/schemas/karaekoSong/updatekaraekoSongRequest';
import type { Page } from '@repo/contracts/types/page/Page';
import type { KaraokeSongTableRowResponse } from '@repo/contracts/schemas/karaekoSong/KaraokeSongTableRowResponse';

const KaraokeSongService = {
  getAll: async () => await apiService.getThrowable<KaraokeSongResponse[]>(apiRoutes.karaokeSongs.getAll()),
  getPage: async (queryParams: { [k: string]: string | number | Array<string> }) =>
    await apiService.getThrowable<Page<KaraokeSongTableRowResponse>>(apiRoutes.karaokeSongs.getPage(), {
      params: queryParams,
    }),
  create: async (data: CreatekaraekoSongRequest) =>
    await apiService.postThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.create(), data),
  update: async ({ id, data }: { id: string; data: UpdatekaraekoSongRequest }) =>
    await apiService.putThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.update(id), data),
  delete: async (id: string) =>
    await apiService.deleteThrowable<KaraokeSongResponse>(apiRoutes.karaokeSongs.delete(id)),
};

export default KaraokeSongService;
