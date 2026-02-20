import z from 'zod';

export const updatekaraekoSongSchema = z.object({
  title: z.string().nonempty(),
  artist: z
    .string()
    .trim()
    .max(255)
    .transform((val) => (val === '' ? null : val))
    .nullable()
    .nonoptional(),
  album: z
    .string()
    .trim()
    .max(255)
    .transform((val) => (val === '' ? null : val))
    .nullable()
    .nonoptional(),
});

export type UpdatekaraekoSongRequest = z.infer<typeof updatekaraekoSongSchema>;
