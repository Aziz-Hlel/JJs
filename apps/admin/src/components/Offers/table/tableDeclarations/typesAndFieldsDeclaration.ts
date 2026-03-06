import {
  offerColumnFiltersKeys,
  offerDefaultQuery,
  offerSortableColumnKeys,
  type OfferRequiredTableQueryParams,
  type OfferTableRowType,
} from '@contracts/schemas/offre/OfferPageQuery';

export type TableRowType = OfferTableRowType;
// export type NestedObject = Prettify<NonNullable<TableRowType['profile']>>;
export type TableRowKeys = keyof TableRowType;

export type RequiredTableQueryParams = OfferRequiredTableQueryParams;

export const columnFiltersKeys = offerColumnFiltersKeys;

export const sortableColumnKeys = offerSortableColumnKeys;

export const defaultQuery = offerDefaultQuery;
