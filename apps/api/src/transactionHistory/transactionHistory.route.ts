import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { Request, Response } from 'express';

import { requireAuth } from '@/middleware/requireAuth.middleware';
import requireRole from '@/middleware/requireRole.middleware';
import { Role } from '@/generated/prisma/enums';
import { transactionHistoryController } from './transactionHistory.controller';

const router = Router();

// router.post(
//   '/',
//   requireAuth,
//   requireRole(Role.STAFF),
//   asyncHandler(transactionHistoryController.createTransactionHistory),
// );

router.get('/', requireAuth, requireRole(Role.ADMIN), asyncHandler(transactionHistoryController.getPage));
router.get(
  '/staff',
  requireAuth,
  requireRole(Role.STAFF),
  asyncHandler(transactionHistoryController.getStaffTransactionHistory),
);

router.get('/', requireAuth, asyncHandler(transactionHistoryController.getUserTransactionHistory));

export const transactionHistoryRoute = router;
