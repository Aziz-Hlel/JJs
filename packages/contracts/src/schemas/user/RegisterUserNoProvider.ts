import z from 'zod';

export const RegisterUserNoProviderSchema = z.object({
  idToken: z.string({ error: 'tokenId is required' }).nonempty({ error: 'tokenId cannot be empty' }),
  username: z.string({ error: 'username is required' }).nonempty({ error: 'username cannot be empty' }),
});

export type RegisterUserNoProviderDto = z.infer<typeof RegisterUserNoProviderSchema>;
