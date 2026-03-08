import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { Request, Response } from 'express';
import { productController } from './product.controller';
import { requireAuth } from '@/middleware/requireAuth.middleware';
import requireRole from '@/middleware/requireRole.middleware';
import { Role } from '@/generated/prisma/enums';

const router = Router();

router.post(
  '/',
  requireAuth,
  requireRole(Role.ADMIN),
    asyncHandler((req: Request, res: Response) => productController.create(req, res)),
);

router.get(
  '/',
  asyncHandler((req: Request, res: Response) => productController.getPage(req, res)),
);

router.get(
  '/:id',
  asyncHandler((req: Request, res: Response) => productController.getById(req, res)),
);

router.put(
  '/:id',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler((req: Request, res: Response) => productController.update(req, res)),
);

router.delete(
  '/:id',
  requireAuth,
  requireRole(Role.ADMIN),
  asyncHandler((req: Request, res: Response) => productController.delete(req, res)),
);

export const productRouter = router;
