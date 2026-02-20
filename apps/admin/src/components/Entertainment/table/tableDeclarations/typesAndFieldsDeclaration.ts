import {
  entertainmentColumnFiltersKeys,
  entertainmentDefaultQuery,
  entertainmentSortableColumnKeys,
  type EntertainmentRequiredTableQueryParams,
  type EntertainmentTableRowType,
} from '@contracts/schemas/Entertainment/EntertaimentPageQuery';

export type TableRowType = EntertainmentTableRowType;

export type TableRowKeys = keyof TableRowType;

export type RequiredTableQueryParams = EntertainmentRequiredTableQueryParams;

export const columnFiltersKeys = entertainmentColumnFiltersKeys;

export const sortableColumnKeys = entertainmentSortableColumnKeys;

export const defaultQuery = entertainmentDefaultQuery;
