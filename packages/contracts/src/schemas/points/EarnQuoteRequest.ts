import z from 'zod';

export const earnQuoteRequest = z.object({
  userRefrenceCode: z.string().min(1, 'User refrence code is required'),
  amount: z.number().min(1, 'Amount must be at least 1').max(10000, 'Amount is too large'),
});

export type EarnQuoteRequest = z.infer<typeof earnQuoteRequest>;
