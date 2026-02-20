import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { Request, Response } from 'express';
import { requireAuth } from '@/middleware/requireAuth.middleware';
import requireRole from '@/middleware/requireRole.middleware';
import { Role } from '@/generated/prisma/enums';
import { entertainmentController } from './entertainment.controller';

const router = Router();

router.post('/', requireAuth, requireRole(Role.ADMIN), asyncHandler(entertainmentController.create));

router.get('/', asyncHandler(entertainmentController.getPage));

router.get('/featured', asyncHandler(entertainmentController.getFeatured));

router.get('/:id', asyncHandler(entertainmentController.getById));

router.put('/:id', requireAuth, requireRole(Role.ADMIN), asyncHandler(entertainmentController.update));

router.put(
  '/:id/toggle-featured',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler(entertainmentController.toggleFeatured),
);

router.delete('/:id', requireAuth, requireRole(Role.ADMIN), asyncHandler(entertainmentController.delete));

export const entertainmentRouter = router;
