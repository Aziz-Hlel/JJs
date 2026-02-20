import z from 'zod';
import { PointsTransactionType } from '../../types/enums/enums';
import { earnPointsRequestSchema } from '../points/EarnPointsRequest';
import { redeemPointsRequestSchema } from '../points/RedeemPointsRequest';

export const createTransactionHistoryRequestSchema = z.discriminatedUnion('type', [
  earnPointsRequestSchema.extend({ type: z.literal(PointsTransactionType.EARN) }),
  redeemPointsRequestSchema.extend({ type: z.literal(PointsTransactionType.REDEEM) }),
]);

export type CreateTransactionHistoryRequest = z.infer<typeof createTransactionHistoryRequestSchema>;
