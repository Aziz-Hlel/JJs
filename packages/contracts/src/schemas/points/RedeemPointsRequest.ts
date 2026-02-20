import z from 'zod';

export const redeemPointsRequestSchema = z.object({
  userId: z.uuid().min(1, 'User id is required'),
  offerId: z.uuid().min(1, 'Offer id is required'),
});

export type RedeemRequest = z.infer<typeof redeemPointsRequestSchema>;
