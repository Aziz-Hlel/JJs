import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { requireAuth } from '@/middleware/requireAuth.middleware';
import requireRole from '@/middleware/requireRole.middleware';
import { Role } from '@/generated/prisma/enums';
import { pointsController } from './points.controller';

const router = Router();

router.post('/earn/quote', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.earnQuote));
router.post('/earn/confirm', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.earnConfirm));
router.post('/redeem/quote', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.redeemQuote));
router.post(
  '/redeem/confirm',
  requireAuth,
  requireRole(Role.STAFF),
  asyncHandler(pointsController.redeemConfirm),
);



export const pointsRouter = router;
    