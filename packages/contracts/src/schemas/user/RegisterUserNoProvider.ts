import z from 'zod';

export const RegisterUserNoProviderSchema = z.object({
  idToken: z.string({ error: 'tokenId is required' }).nonempty({ error: 'tokenId cannot be empty' }),
  username: z
    .string({ error: 'username is required' })
    .trim()
    .min(3, { message: 'username must be at least 3 characters long' })
    .max(50, { message: 'username must be at most 50 characters long' }),
});

export type RegisterUserNoProviderDto = z.infer<typeof RegisterUserNoProviderSchema>;
