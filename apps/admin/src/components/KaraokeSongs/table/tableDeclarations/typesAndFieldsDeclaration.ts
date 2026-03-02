import {
  KaraokeSongColumnFiltersKeys,
  KaraokeSongDefaultQuery,
  KaraokeSongSortableColumnKeys,
  type KaraokeSongRequiredTableQueryParams,
  type KaraokeSongTableRowType,
} from '@contracts/schemas/karaekoSong/KaraekoSongPageQuery';

export type TableRowType = KaraokeSongTableRowType;

export type TableRowKeys = keyof TableRowType;

export type RequiredTableQueryParams = KaraokeSongRequiredTableQueryParams;

export const columnFiltersKeys = KaraokeSongColumnFiltersKeys;

export const sortableColumnKeys = KaraokeSongSortableColumnKeys;

export const defaultQuery = KaraokeSongDefaultQuery;
