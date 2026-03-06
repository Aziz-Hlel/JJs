import type { Page } from '@contracts/types/page/Page';
import { apiService } from '../apiService';
import apiRoutes from '../routes/routes';
import type { TransactionHistoryTableRowType } from '@contracts/schemas/transactionHistory/transactionHistoryPageQuery';

const transactionHistoryService = {
  getPage: (queryParams: { [k: string]: string | number | Array<string> }) =>
    apiService.getThrowable<Page<TransactionHistoryTableRowType>>(apiRoutes.transactionHistory.getPage(), {
      params: queryParams,
    }),
};

export default transactionHistoryService;
