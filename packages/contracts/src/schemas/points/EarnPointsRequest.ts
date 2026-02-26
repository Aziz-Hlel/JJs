import z from 'zod';

export const earnPointsRequestSchema = z.object({
  userId: z.uuid().min(1, 'User id is required'),
  dollarAmount: z
    .number()
    .min(1, 'Amount is required')
    .max(10000, 'Amount is too large')
    .transform((val) => Math.trunc(val)),
});

export type EarnPointsRequest = z.infer<typeof earnPointsRequestSchema>;
