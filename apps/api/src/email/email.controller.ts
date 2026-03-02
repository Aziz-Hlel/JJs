import { sendContactUsRequestSchema } from '@contracts/schemas/email/sendContactUsRequest';
import { emailService } from './email.service';
import { Request, Response } from 'express';
import { SimpleApiResponse } from '@contracts/types/api/SimpleApiResponse.dto';
import { sendReservationRequestSchema } from '@contracts/schemas/email/sendReservationRequest';

class EmailController {
  async sendContactEmail(req: Request, res: Response<SimpleApiResponse>) {
    const parsedPayload = sendContactUsRequestSchema.parse(req.body);
    await emailService.sendContactEmail(parsedPayload);
    res.status(200).json({ message: 'Email sent successfully' });
  }

  async sendReservationEmail(req: Request, res: Response<SimpleApiResponse>) {
    const parsedPayload = sendReservationRequestSchema.parse(req.body);
    await emailService.sendReservationEmail(parsedPayload);
    res.status(200).json({ message: 'Email sent successfully' });
  }
}

export const emailController = new EmailController();
