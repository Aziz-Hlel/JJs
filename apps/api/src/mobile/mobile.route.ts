import { asyncHandler } from '@/core/async-handler';
import { mobileController } from './mobile.controller';
import { Router } from 'express';

const route = Router();

route.get('/android/version-policy', asyncHandler(mobileController.getAndroidVersion));
route.get('/ios/version-policy', asyncHandler(mobileController.getIosVersion));

export const MobileRouter = route;
