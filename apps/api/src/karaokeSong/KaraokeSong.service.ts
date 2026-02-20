import { CreatekaraekoSongRequest } from '@contracts/schemas/karaekoSong/createkaraekoSongRequest';
import { karaokeSongRepo } from './karaokeSongRepo';
import { ConflictError, NotFoundError } from '@/err/customErrors';
import { KaraokeSongMapper } from './KaraokeSong.mapper';
import { UpdatekaraekoSongRequest } from '@contracts/schemas/karaekoSong/updatekaraekoSongRequest';
import { KaraokeSongResponse } from '@contracts/schemas/karaekoSong/KaraokeSongResponse';

class KaraokeSongService {
  async createKaraokeSong(data: CreatekaraekoSongRequest): Promise<KaraokeSongResponse> {
    const title = data.title;
    const existingSong = await karaokeSongRepo.getByTitle(title);
    if (existingSong) {
      throw new ConflictError('Karaoke song with this title already exists');
    }
    const createdSong = await karaokeSongRepo.create(data);
    const response = KaraokeSongMapper.toResponseDto(createdSong);
    return response;
  }

  async updateKaraokeSong(id: string, data: UpdatekaraekoSongRequest): Promise<KaraokeSongResponse> {
    const existingSong = await karaokeSongRepo.isKaraokeSongExist(id);
    if (!existingSong) {
      throw new NotFoundError(`Karaoke song to be updated with id ${id} is not found`);
    }
    const updatedSong = await karaokeSongRepo.update(id, data);
    const response = KaraokeSongMapper.toResponseDto(updatedSong);
    return response;
  }

  async getAllKaraokeSongs(): Promise<KaraokeSongResponse[]> {
    const karaokeSongs = await karaokeSongRepo.getAll();
    const response = karaokeSongs.map(KaraokeSongMapper.toResponseDto);
    return response;
  }

  async updateSelectedKaraokeSongs() {}
}

export const karaokeSongService = new KaraokeSongService();
