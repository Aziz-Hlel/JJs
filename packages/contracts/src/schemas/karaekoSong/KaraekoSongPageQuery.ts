import z from 'zod';
import { KaraokeSongTableRowResponse } from './KaraokeSongTableRowResponse';

export type KaraokeSongTableRowType = KaraokeSongTableRowResponse;

export type KaraokeSongRootKeys = keyof KaraokeSongTableRowType;
export type KaraokeSongTableRowKeys = KaraokeSongRootKeys;

export const KaraokeSongColumnFiltersKeys: Set<KaraokeSongTableRowKeys> = new Set([] as const);

export const KaraokeSongSortableColumnKeys: KaraokeSongTableRowKeys[] = [
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

export type KaraokeSongTableQueryParams = z.infer<typeof KaraokeSongQueryParamsSchema>;
export type KaraokeSongRequiredTableQueryParams = KaraokeSongTableQueryParams;

export const KaraokeSongDefaultQuery: KaraokeSongRequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'updatedAt',
  order: 'desc',
  search: '',
};

export type KaraokeSongPageQuery = z.infer<typeof KaraokeSongQueryParamsSchema>;
