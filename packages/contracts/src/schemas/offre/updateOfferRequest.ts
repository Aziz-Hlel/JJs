import z from 'zod';
import { OfferStatus } from '../../types/enums/enums';

export const updateOfferRequestSchema = z.object({
  title: z.string().trim().min(1).max(255),
  description: z.string().trim().min(1).max(1000),
  points: z.number().int().positive(),
  status: z.enum(Object.values(OfferStatus)),
  thumbnailId: z.uuid({ error: 'Invalid thumbnail UUID' }),
});

export type UpdateOfferRequest = z.infer<typeof updateOfferRequestSchema>;
