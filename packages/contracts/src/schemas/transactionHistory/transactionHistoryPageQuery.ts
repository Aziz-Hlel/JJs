import z from 'zod';
import { PointsTransactionType } from '../../types/enums/enums';
import { TransactionHistoryRowResponse } from './transactionHistoryRowResponse';

export type TransactionHistoryTableRowType = TransactionHistoryRowResponse;

export type RootKeys = keyof TransactionHistoryTableRowType;
export type TableRowKeys = RootKeys;

export const transactionHistoryColumnFiltersKeys = new Set(['type']) satisfies Set<TableRowKeys>;
export const transactionHistorySortableColumnKeys = [
  // 'offerName',
  // 'offerPrice',
  'points',
  'type',
  'createdAt',
] as const satisfies TableRowKeys[];

export const transactionHistoryPageQuerySortFields: RootKeys[] = ['createdAt', 'offerName', 'points', 'type'];

const csvEnumArray = <T extends string[]>(values: T) =>
  z
    .string()
    .transform((value) =>
      value
        .split(',')
        .map((v) => v.trim())
        .filter(Boolean)
        .sort(),
    )
    .pipe(z.array(z.enum(values)));

export const transactionHistoryPageQueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  size: z.coerce.number().int().min(5).max(50).catch(10),
  sort: z.enum(transactionHistorySortableColumnKeys).catch('createdAt'),
  order: z.enum(['asc', 'desc']).catch('desc'),
  search: z.string().trim().catch(''),
  // Filters
  type: csvEnumArray(Object.values(PointsTransactionType)).catch([]),
});
export type TableQueryParams = z.infer<typeof transactionHistoryPageQueryParamsSchema>;
export type TransactionHistoryRequiredTableQueryParams = TableQueryParams;

export const transactionHistoryDefaultQuery : TransactionHistoryRequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'createdAt',
  order: 'desc',
  search: '',
  type: [],
};

export type TransactionHistoryPageQuery = z.infer<typeof transactionHistoryPageQueryParamsSchema>;
