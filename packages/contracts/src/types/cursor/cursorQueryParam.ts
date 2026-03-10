import z from 'zod';

export const cursorQueryParamSchema = z.object({
  cursor: z.uuid().nullable().optional().catch(null),
  limit: z.coerce.number().min(1).max(100).catch(10),
});

export type CursorQueryParam = z.infer<typeof cursorQueryParamSchema>;
