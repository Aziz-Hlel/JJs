import z from 'zod';
import { EntertainmentResponse } from './EntertainmentResponse';

export type TableRowType = EntertainmentResponse;

export type RootKeys = keyof TableRowType;
export type TableRowKeys = RootKeys;

export const columnFiltersKeys: Set<TableRowKeys> = new Set(['isFeatured'] as const);

export const sortableColumnKeys: TableRowKeys[] = ['name', 'description', 'createdAt', 'updatedAt'] as const;

export const EntertainmentPageQuerySortFields: RootKeys[] = ['createdAt', 'name'];

export const entertainmentQueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  size: z.coerce.number().int().min(5).max(50).catch(10),
  sort: z.enum(sortableColumnKeys).catch('createdAt'),
  order: z.enum(['asc', 'desc']).catch('desc'),
  search: z.string().trim().catch(''),
});
export type TableQueryParams = z.infer<typeof entertainmentQueryParamsSchema>;
export type RequiredTableQueryParams = TableQueryParams;

export const entertainmentDefaultQuery: RequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'updatedAt',
  order: 'desc',
  search: '',
};

export type EntertainmentPageQuery = z.infer<typeof entertainmentQueryParamsSchema>;
