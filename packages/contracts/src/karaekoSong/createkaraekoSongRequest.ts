import z from 'zod';

const createkaraekoSongSchema = z.object({
  title: z.string().nonempty(),
  artist: z.string().nullable().nonoptional(),
  album: z.string().nullable().nonoptional(),
});

export type CreatekaraekoSongRequest = z.infer<typeof createkaraekoSongSchema>;
