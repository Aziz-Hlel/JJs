import z from "zod";


export const updateOfferRequestSchema = z.object({
  title : z.string().trim().min(1).max(255),
  description : z.string().trim().min(1).max(1000),
  points : z.number().int().positive(),
  thumbnailId : z.uuid().nullable(),
});


export type UpdateOfferRequest = z.infer<typeof updateOfferRequestSchema>;