import { Gender } from '@repo/contracts/types/enums/enums';
import z from 'zod';

export const RegisterUserNoProviderSchema = z.object({
  idToken: z.string({ error: 'tokenId is required' }).nonempty({ error: 'tokenId cannot be empty' }),
  username: z
    .string({ error: 'username is required' })
    .trim()
    .min(3, { message: 'username must be at least 3 characters long' })
    .max(50, { message: 'username must be at most 50 characters long' }),
  profile: z
    .object({
      phoneNumber: z
        .string()
        .trim()
        .min(1, 'Phone number is required')
        .max(225, 'Phone number must be at most 225 characters long')
        .nullable()
        .optional(),
      gender: z.enum(Gender).nullable().optional(),
    })
    .optional()
    .nullable()
    .catch(null),
});

export type RegisterUserNoProviderDto = z.infer<typeof RegisterUserNoProviderSchema>;
