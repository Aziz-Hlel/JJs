import z from 'zod';

export const createOfferRequestSchema = z.object({
  title: z.string().trim().min(1).max(255),
  description: z.string().trim().min(1).max(1000),
  points: z.number().int().positive(),
  thumbnailId: z.uuid({ error: 'Invalid thumbnail ID' }),
});

export type CreateOfferRequest = z.infer<typeof createOfferRequestSchema>;
