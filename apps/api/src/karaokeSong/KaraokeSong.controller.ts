import { Request, Response } from 'express';
import { karaokeSongService } from './KaraokeSong.service';
import { KaraokeSongResponse } from '@contracts/schemas/karaekoSong/KaraokeSongResponse';

class KaraokeSongController {
  async getAll(req: Request, res: Response<KaraokeSongResponse[]>) {
    const karaokeSongs = await karaokeSongService.getAllKaraokeSongs();
    res.status(200).json(karaokeSongs);
  }

  async update(req: Request, res: Response<KaraokeSongResponse>) {
    const { id } = req.params;
    const data = req.body;
    const updatedKaraokeSong = await karaokeSongService.updateKaraokeSong(id, data);
    res.status(200).json(updatedKaraokeSong);
  }
}

export const karaokeSongController = new KaraokeSongController();
