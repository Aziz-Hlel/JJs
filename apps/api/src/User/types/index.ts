import { PrismaClient } from '@/generated/prisma/client';
import { ProfileGetPayload, UserGetPayload } from '@/generated/prisma/models';
import { Prettify } from '@contracts/utils/Prettify';
import { DefaultArgs } from '@prisma/client/runtime/client';

export type UserWithProfile = Prettify<UserGetPayload<{ include: { profile: true } }>>;
export type ProfileWithUser = Prettify<ProfileGetPayload<{ include: { user: true } }>>;

export type Tx = Omit<
  PrismaClient<never, undefined, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$extends'
>;
