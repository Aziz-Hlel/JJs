import { OfferGetPayload, ProductGetPayload } from '@/generated/prisma/models';

export type ProductWithThumbnail = ProductGetPayload<{ include: { thumbnail: true } }>;

export type OfferWithThumbnail = OfferGetPayload<{ include: { thumbnail: true } }>;