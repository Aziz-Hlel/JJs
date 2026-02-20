import z from 'zod';

export const updateEntertainmentRequestSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(100, 'Name must be at most 100 characters long'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters long')
    .max(1000, 'Description must be at most 1000 characters long'),
  date: z
    .string()
    .min(3, 'Date must be at least 3 characters long')
    .max(100, 'Date must be at most 100 characters long'),
  thumbnailId: z.uuid(),
  isFeatured: z.boolean().default(true).nonoptional(),
});

export type UpdateEntertainmentRequest = z.infer<typeof updateEntertainmentRequestSchema>;
