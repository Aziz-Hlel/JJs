import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { requireAuth } from '@/middleware/requireAuth.middleware';
import requireRole from '@/middleware/requireRole.middleware';
import { Role } from '@/generated/prisma/enums';
import { pointsController } from './points.controller';
import { AuthenticatedRequest } from '@/types/auth/AuthenticatedRequest';

const router = Router();

router.post('/earn/quote', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.earnQuote));
router.post('/earn/confirm', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.earnConfirm));
router.post('/redeem/quote', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.redeemQuote));
router.post('/redeem/confirm', requireAuth, requireRole(Role.STAFF), asyncHandler(pointsController.redeemConfirm));

router.get('/stream', (req, res) => pointsController.streamPoints(req as AuthenticatedRequest, res));
router.get('/result', (req, res) => pointsController.getResult(req as AuthenticatedRequest, res));

export const pointsRouter = router;
