import type { PointsTransactionType } from '@repo/contracts/types/enums/enums';

const TransactionPointsTextMapping: Record<PointsTransactionType, string> = {
  EARN: 'Earned',
  REDEEM: 'Redeem',
};

export default TransactionPointsTextMapping;
