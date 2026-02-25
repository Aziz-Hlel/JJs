import z from 'zod';
export const CreateUserWithProviderSchema = z.object({
  idToken: z.string({ error: 'tokenId is required' }).nonempty({ error: 'tokenId cannot be empty' }),
  username: z.string({ error: 'username is required' }).nullable(),
});

export type CreateUserWithProviderDto = z.infer<typeof CreateUserWithProviderSchema>;
