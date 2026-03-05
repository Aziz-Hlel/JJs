import { Request, Response } from 'express';
import { karaokeSongService } from './KaraokeSong.service';
import { KaraokeSongResponse } from '@repo/contracts/schemas/karaekoSong/KaraokeSongResponse';
import { KaraokeSongQueryParamsSchema } from '@repo/contracts/schemas/karaekoSong/KaraekoSongPageQuery';
import { createkaraekoSongSchema } from '@repo/contracts/schemas/karaekoSong/createkaraekoSongRequest';
import { SimpleApiResponse } from '@repo/contracts/types/api/SimpleApiResponse.dto';
import { BadRequestError } from '@/err/customErrors';
import getParam from '@/User/utils/getParam';

class KaraokeSongController {
  async getAll(req: Request, res: Response<KaraokeSongResponse[]>) {
    const karaokeSongs = await karaokeSongService.getAllKaraokeSongs();
    res.status(200).json(karaokeSongs);
  }

  async update(req: Request, res: Response<KaraokeSongResponse>) {
    const id = getParam(req, 'id');

    const data = req.body;
    const updatedKaraokeSong = await karaokeSongService.updateKaraokeSong(id, data);
    res.status(200).json(updatedKaraokeSong);
  }

  async getShuffle(req: Request, res: Response) {
    const karaokeSongs = await karaokeSongService.getShuffle();
    res.status(200).json(karaokeSongs);
  }

  async getPage(req: Request, res: Response) {
    const queryParams = KaraokeSongQueryParamsSchema.parse(req.query);
    const karaokeSongs = await karaokeSongService.getPage(queryParams);
    res.status(200).json(karaokeSongs);
  }

  async create(req: Request, res: Response<KaraokeSongResponse>) {
    const data = createkaraekoSongSchema.parse(req.body);
    const createdKaraokeSong = await karaokeSongService.createKaraokeSong(data);
    res.status(201).json(createdKaraokeSong);
  }

  async delete(req: Request, res: Response<SimpleApiResponse>) {
    const id = getParam(req, 'id');

    await karaokeSongService.delete(id);
    res.status(204).json({ message: 'Karaoke song deleted successfully' });
  }
}

export const karaokeSongController = new KaraokeSongController();
