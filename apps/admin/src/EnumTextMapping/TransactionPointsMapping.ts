import type { PointsTransactionType } from '@contracts/types/enums/enums';

const TransactionPointsTextMapping: Record<PointsTransactionType, string> = {
  EARN: 'Earned',
  REDEEM: 'Redeem',
  ADJUSTMENT: 'Adjustment',
};

export default TransactionPointsTextMapping;
