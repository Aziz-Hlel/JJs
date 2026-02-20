import z from 'zod';

export const redeemQuoteRequestSchema = z.object({
  userRefrenceCode: z.string().min(1, 'User refrence code is required'),
  offerCode: z.string().min(1, 'Offer code is required'),
});

export type RedeemQuoteRequest = z.infer<typeof redeemQuoteRequestSchema>;
