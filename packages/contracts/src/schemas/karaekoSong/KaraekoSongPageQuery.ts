import z from 'zod';
import type { KaraokeSongTableRowResponse } from './KaraokeSongTableRowResponse';

export type KaraokeSongTableRowType = KaraokeSongTableRowResponse;

export type RootKeys = keyof KaraokeSongTableRowType;
export type TableRowKeys = RootKeys;

export const KaraokeSongColumnFiltersKeys: Set<TableRowKeys> = new Set([] as const);

export const KaraokeSongSortableColumnKeys: TableRowKeys[] = [
  'title',
  'artist',
  'album',
  'createdAt',
  'updatedAt',
] as const;

export const KaraokeSongQueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  size: z.coerce.number().int().min(5).max(50).catch(10),
  sort: z.enum(KaraokeSongSortableColumnKeys).catch('createdAt'),
  order: z.enum(['asc', 'desc']).catch('desc'),
  search: z.string().trim().catch(''),
});

export type TableQueryParams = z.infer<typeof KaraokeSongQueryParamsSchema>;
export type KaraokeSongRequiredTableQueryParams = TableQueryParams;

export const KaraokeSongDefaultQuery: KaraokeSongRequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'updatedAt',
  order: 'desc',
  search: '',
};

export type KaraokeSongPageQuery = z.infer<typeof KaraokeSongQueryParamsSchema>;
