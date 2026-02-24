import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { Request, Response } from 'express';
import { offerController } from './offer.controller';
import { requireAuth } from '@/middleware/requireAuth.middleware';
import requireRole from '@/middleware/requireRole.middleware';
import { Role } from '@/generated/prisma/enums';

const router = Router();

router.post(
  '/',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler((req: Request, res: Response) => offerController.create(req, res)),
);

router.post(
  '/:id/toggle-featured',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler((req: Request, res: Response) => offerController.toggleFeatured(req, res)),
);

router.put(
  '/:id',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler((req: Request, res: Response) => offerController.update(req, res)),
);

router.get(
  '/',
  asyncHandler((req: Request, res: Response) => offerController.getPage(req, res)),
);

router.get(
  '/featured',
  asyncHandler((req: Request, res: Response) => offerController.getFeatured(req, res)),
);

router.get(
  '/:id',
  asyncHandler((req: Request, res: Response) => offerController.getById(req, res)),
);

router.delete(
  '/:id',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler((req: Request, res: Response) => offerController.delete(req, res)),
);


export const offerRouter = router;
