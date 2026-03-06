import {
  transactionHistoryColumnFiltersKeys,
  transactionHistoryDefaultQuery,
  transactionHistorySortableColumnKeys,
  type TransactionHistoryTableRowType,
} from '@contracts/schemas/transactionHistory/transactionHistoryPageQuery';
import type { Prettify } from '@contracts/utils/Prettify';

export type TableRowType = TransactionHistoryTableRowType;
export type NestedObject = Prettify<NonNullable<TableRowType['staff']>>;
export type TableRowKeys = keyof TableRowType | keyof NestedObject;

export type RequiredTableQueryParams = TransactionHistoryTableRowType;

export const columnFiltersKeys = transactionHistoryColumnFiltersKeys;

export const sortableColumnKeys = transactionHistorySortableColumnKeys;

export const defaultQuery = transactionHistoryDefaultQuery;
