import { z } from 'zod';

export const updateMyAccountRequestSchema = z.object({
  username: z.string().trim().min(1, 'Username is required').max(225, 'Username must be at most 225 characters long'),
});

export type UpdateMyAccountRequest = z.infer<typeof updateMyAccountRequestSchema>;
