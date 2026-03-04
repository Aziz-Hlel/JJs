import { Router, Response } from 'express';
import { profileController } from '../Controller/profile.controller';
import { asyncHandler } from '../../core/async-handler';
import { AuthenticatedRequest } from '../../types/auth/AuthenticatedRequest';
import { requireAuth } from '@/middleware/requireAuth.middleware';
import { Role } from '@/generated/prisma/enums';
import requireRole from '@/middleware/requireRole.middleware';

const router = Router();

router.post(
    '/',
    requireAuth,
    requireRole(Role.ADMIN),
    asyncHandler((req: AuthenticatedRequest, res: Response) => profileController.createUserProfile(req, res)),
);

router.put(
    '/my-account',
    requireAuth,
    asyncHandler((req: AuthenticatedRequest, res: Response) => profileController.updateMyAccount(req, res)),
);

router.put(
    '/:id',
    requireAuth,
    requireRole(Role.ADMIN),
    asyncHandler((req: AuthenticatedRequest, res: Response) => profileController.updateUserProfile(req, res)),
);

router.get(
    '/',
    requireAuth,
    requireRole(Role.ADMIN),
    asyncHandler((req: AuthenticatedRequest, res: Response) => profileController.getUserPage(req, res)),
);

router.delete(
    '/my-account',
    requireAuth,
    asyncHandler((req: AuthenticatedRequest, res: Response) => profileController.deleteMyAccount(req, res)),
);

router.delete(
    '/:id',
    requireAuth,
    requireRole(Role.ADMIN),
    asyncHandler((req: AuthenticatedRequest, res: Response) => profileController.deleteUserProfile(req, res)),
);

export const ProfileRouter = router;
