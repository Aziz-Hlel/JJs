import { SelectedRowProvider } from '@/components/TransactionHistory/context/selected-row-provider';
import TransactionHistoryIndex from '@/components/TransactionHistory/TransactionHistory.index';

const TransactionHistory = () => (
  <SelectedRowProvider>
    <TransactionHistoryIndex />
  </SelectedRowProvider>
);

export default TransactionHistory;
