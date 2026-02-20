
export type TransactionHistoryResponse = {
  id: string;
  points: number;
  createdAt: string;
  staff: {
    id: string;
    username: string | null;
    email: string | null;
  };
  user: {
    id: string;
    username: string | null;
    email: string | null;
  };
} & (
  | {
      type: 'EARN';
      dollarAmount: number;
      offerName: null;
    }
  | {
      type: 'REDEEM';
      offerName: string;
      dollarAmount: null;
    }
);
