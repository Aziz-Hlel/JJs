import { CreatekaraekoSongRequest } from '@repo/contracts/schemas/karaekoSong/createkaraekoSongRequest';
import { karaokeSongRepo } from './karaokeSongRepo';
import { ConflictError, NotFoundError } from '@/err/customErrors';
import { KaraokeSongMapper } from './KaraokeSong.mapper';
import { UpdatekaraekoSongRequest } from '@repo/contracts/schemas/karaekoSong/updatekaraekoSongRequest';
import { KaraokeSongResponse } from '@repo/contracts/schemas/karaekoSong/KaraokeSongResponse';
import { KaraokeSongPageQuery } from '@repo/contracts/schemas/karaekoSong/KaraekoSongPageQuery';
import { KaraokeSongOrderByWithRelationInput, KaraokeSongWhereInput } from '@/generated/prisma/models';

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

    const title = data.title;
    const existingSongByTitle = await karaokeSongRepo.getByTitle(title);
    if (existingSongByTitle && existingSongByTitle.id !== id) {
      throw new ConflictError('Karaoke song with this title already exists');
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

  async getShuffle() {
    const karaokeSongs = await karaokeSongRepo.getAll();
    const shuffledSongs = karaokeSongs.sort(() => 0.5 - Math.random()).slice(0, 7);
    const response = shuffledSongs.map(KaraokeSongMapper.toResponseDto);
    return response;
  }

  async getPage(queryParams: KaraokeSongPageQuery) {
    const skip = (queryParams.page - 1) * queryParams.size;
    const take = queryParams.size;
    const { search } = queryParams;
    const where: KaraokeSongWhereInput = {};

    if (search.length > 0) {
      const searchValue = search.toLowerCase();
      where.OR = [
        { title: { contains: searchValue, mode: 'insensitive' } },
        { artist: { contains: searchValue, mode: 'insensitive' } },
        { album: { contains: searchValue, mode: 'insensitive' } },
      ];
    }

    const orderBy: KaraokeSongOrderByWithRelationInput = {};

    if (queryParams.sort) {
      orderBy[queryParams.sort] = queryParams.order;
    }

    const { content, totalElements } = await karaokeSongRepo.getPage({ skip, take, where, orderBy });

    const karaokeSongPage = KaraokeSongMapper.toPageResponse({
      karaokeSongs: content,
      totalElements,
      pagination: queryParams,
    });

    return karaokeSongPage;
  }

  async delete(id: string) {
    const existingSong = await karaokeSongRepo.isKaraokeSongExist(id);
    if (!existingSong) {
      throw new NotFoundError(`Karaoke song to be deleted with id ${id} is not found`);
    }
    await karaokeSongRepo.delete(id);
  }
}

export const karaokeSongService = new KaraokeSongService();
