import {
  transactionHistoryColumnFiltersKeys,
  transactionHistoryDefaultQuery,
  transactionHistorySortableColumnKeys,
  type TransactionHistoryRequiredTableQueryParams,
  type TransactionHistoryTableRowType,
} from '@repo/contracts/schemas/transactionHistory/transactionHistoryPageQuery';
import type { Prettify } from '@repo/contracts/utils/Prettify';

export type TableRowType = TransactionHistoryTableRowType;
export type NestedObject = Prettify<NonNullable<TableRowType['staff']>>;
export type TableRowKeys = keyof TableRowType | keyof NestedObject;

export type RequiredTableQueryParams = TransactionHistoryRequiredTableQueryParams;

export const columnFiltersKeys = transactionHistoryColumnFiltersKeys;

export const sortableColumnKeys = transactionHistorySortableColumnKeys;

export const defaultQuery = transactionHistoryDefaultQuery;
