import { OfferGetPayload, ProductGetPayload, TransactionHistoryGetPayload } from '@/generated/prisma/models';

export type ProductWithThumbnail = ProductGetPayload<{ include: { thumbnail: true } }>;

export type OfferWithThumbnail = OfferGetPayload<{ include: { thumbnail: true } }>;

export type TransactionHistoryWithUserAndStaff = TransactionHistoryGetPayload<{ include: { user: true; staff: true } }>;
