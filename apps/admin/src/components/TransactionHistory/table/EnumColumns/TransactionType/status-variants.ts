import { BanknoteArrowUp, BanknoteArrowDown } from 'lucide-react';
import type { TransactionType } from './TransactionTypeComponent';

export type TransactionTypeVariant = {
  className: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const TRANSACTION_TYPE_VARIANTS: Record<TransactionType, TransactionTypeVariant> = {
  EARN: {
    Icon: BanknoteArrowUp,
    className: 'border-green-600 text-green-600 bg-green-300/5 hover:bg-green-600/10',
  },
  REDEEM: {
    Icon: BanknoteArrowDown,
    className: 'border-destructive text-destructive bg-red/5 hover:bg-destructive/10',
  },
};
