import { z } from 'zod';

export const updateMyAccountRequestSchema = z.object({
  username: z.string().trim().min(1, 'Username is required').max(225, 'Username must be at most 225 characters long').optional(),
  phoneNumber: z.string().trim().min(1, 'Phone number is required').max(225, 'Phone number must be at most 225 characters long').nullable().optional(),
  gender: z.enum(['M', 'F']).nullable().optional(),
  address: z.string().trim().min(1, 'Address is required').max(225, 'Address must be at most 225 characters long').nullable().optional(),
});

export type UpdateMyAccountRequest = z.infer<typeof updateMyAccountRequestSchema>;
