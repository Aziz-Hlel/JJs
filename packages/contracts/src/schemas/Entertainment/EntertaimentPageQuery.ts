import z from 'zod';
import { EntertainmentResponse } from './EntertainmentResponse';

export type EntertainmentTableRowType = EntertainmentResponse;

export type RootKeys = keyof EntertainmentTableRowType;
export type TableRowKeys = RootKeys;

export const entertainmentColumnFiltersKeys: Set<TableRowKeys> = new Set(['isFeatured'] as const);

export const entertainmentSortableColumnKeys: TableRowKeys[] = [
  'name',
  'description',
  'createdAt',
  'updatedAt',
] as const;

export const EntertainmentPageQuerySortFields: RootKeys[] = ['createdAt', 'name'];

export const entertainmentQueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  size: z.coerce.number().int().min(5).max(50).catch(10),
  sort: z.enum(entertainmentSortableColumnKeys).catch('createdAt'),
  order: z.enum(['asc', 'desc']).catch('desc'),
  search: z.string().trim().catch(''),
});
export type TableQueryParams = z.infer<typeof entertainmentQueryParamsSchema>;
export type EntertainmentRequiredTableQueryParams = TableQueryParams;

export const entertainmentDefaultQuery: EntertainmentRequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'updatedAt',
  order: 'desc',
  search: '',
};

export type EntertainmentPageQuery = z.infer<typeof entertainmentQueryParamsSchema>;
