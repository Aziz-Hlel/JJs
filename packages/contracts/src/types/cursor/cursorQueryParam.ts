import z from 'zod';

export const cursorQueryParamSchema = z.object({
  cursor: z.uuid().nullable().catch(null),
  limit: z.number().catch(10),
});

export type CursorQueryParam = z.infer<typeof cursorQueryParamSchema>;
