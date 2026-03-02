import { asyncHandler } from '@/core/async-handler';
import { Router } from 'express';

import { emailController } from './email.controller';

const router = Router();

router.post('/contact-us', asyncHandler(emailController.sendContactEmail));
router.post('/reservation', asyncHandler(emailController.sendReservationEmail));

export const EmailRouter = router;
