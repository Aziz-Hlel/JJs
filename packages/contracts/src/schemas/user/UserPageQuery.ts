import z, { keyof } from 'zod';
import { Role, Status } from '../../types/enums/enums';
import { UserProfileRowResponse } from './UserRowResponse';
import { Prettify } from '../../utils/Prettify';

export type UserTableRowType = UserProfileRowResponse;
export type UserNestedObject = Prettify<NonNullable<UserTableRowType['profile']>>;
export type UserRootKeys = keyof UserTableRowType;
export type UserProfileKeys = keyof UserNestedObject;
export type UserTableRowKeys = UserRootKeys | UserProfileKeys;

export const columnFiltersKeys: Set<UserTableRowKeys> = new Set(['status', 'role'] as const);

export const rootLevelSortableFields: UserRootKeys[] = [
  'email',
  'username',
  'status',
  'authId',
  'role',
  'points',
  'provider',
  'createdAt',
] as const;

export const profileLevelSortableFields: UserProfileKeys[] = ['phoneNumber', 'address'] as const;

export const sortableColumnKeys: UserTableRowKeys[] = rootLevelSortableFields.concat(profileLevelSortableFields as any);

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

export const queryParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  size: z.coerce.number().int().min(5).max(50).catch(10),
  sort: z.enum(sortableColumnKeys).catch('createdAt'),
  order: z.enum(['asc', 'desc']).catch('desc'),
  search: z.string().trim().catch(''),
  // Filters
  role: csvEnumArray(Object.values(Role)).catch([]),
  status: csvEnumArray(Object.values(Status)).catch([]),
});
export type UserTableQueryParams = z.infer<typeof queryParamsSchema>;
export type UsersRequiredTableQueryParams = UserTableQueryParams;

export const usersDefaultQuery: UsersRequiredTableQueryParams = {
  page: 1,
  size: 10,
  sort: 'createdAt',
  order: 'desc',
  search: '',
  role: [],
  status: [],
};

export type UserPageQuery = z.infer<typeof queryParamsSchema>;
