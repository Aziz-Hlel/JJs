import z from 'zod';
import { OfferStatus } from '../../types/enums/enums';
import { OfferRowResponse } from './OfferRowResponse';

export type OfferTableRowType = OfferRowResponse;

export type OfferRootKeys = keyof OfferTableRowType;
export type OfferTableRowKeys = OfferRootKeys;

export const offerColumnFiltersKeys = new Set(['status']) satisfies Set<OfferTableRowKeys>;
export const offerSortableColumnKeys = [
  'code',
  'title',
  'description',
  'points',
  'createdAt',
  'updatedAt',
] as const satisfies OfferTableRowKeys[];

export const OfferPageQuerySortFields: OfferRootKeys[] = ['createdAt', 'title', 'points', 'code'];

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

export const offersQueryParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  size: z.coerce.number().int().min(5).max(50).catch(10),
  sort: z.enum(offerSortableColumnKeys).catch('createdAt'),
  order: z.enum(['asc', 'desc']).catch('desc'),
  search: z.string().trim().catch(''),
  // Filters
  status: csvEnumArray(Object.values(OfferStatus)).catch([]),
});
export type OfferTableQueryParams = z.infer<typeof offersQueryParamsSchema>;
export type OfferRequiredTableQueryParams = OfferTableQueryParams;

export const offerDefaultQuery: OfferRequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'updatedAt',
  order: 'desc',
  search: '',
  status: [],
};

export type OfferPageQuery = z.infer<typeof offersQueryParamsSchema>;
