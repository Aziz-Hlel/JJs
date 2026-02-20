import z from "zod";




const updateSelectedKaraokeSongsRequestSchema = z.object({
    activeSongIds: z.array(z.uuid()),
    inactiveSongIds: z.array(z.uuid()),
});

export type UpdateSelectedKaraokeSongsRequest = z.infer<typeof updateSelectedKaraokeSongsRequestSchema>;