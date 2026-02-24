import { type PointsTransactionType } from '../../types/enums/enums';

export type PersonalTransactionHistoryResponse =
  | ({
      id: string;
      points: number;
      clientCode: string | null;
      createdAt: string;
    } & { type: typeof PointsTransactionType.EARN; dollarAmount: number; offerName: null })
  | { type: typeof PointsTransactionType.REDEEM; offerName: string; dollarAmount: null };
