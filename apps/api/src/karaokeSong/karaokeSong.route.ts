import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { Request, Response } from 'express';
import { karaokeSongController } from './KaraokeSong.controller';

const router = Router();

router.get(
  '/',
  asyncHandler((req: Request, res: Response) => karaokeSongController.getAll(req, res)),
);

router.put(
  '/:id',
  asyncHandler((req: Request, res: Response) => karaokeSongController.update(req, res)),
);

router.get(
  '/shuffle',
  asyncHandler((req: Request, res: Response) => karaokeSongController.getShuffle(req, res)),
);

export const karaokeSongRouter = router;
