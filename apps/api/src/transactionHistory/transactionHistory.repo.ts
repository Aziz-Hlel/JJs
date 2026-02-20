import { prisma } from '@/bootstrap/db.init';
import {
  TransactionHistoryInclude,
  TransactionHistoryOrderByWithRelationInput,
  TransactionHistoryWhereInput,
} from '@/generated/prisma/models';
import { Tx } from '@/User/types';
import { CreateTransactionHistoryRequest } from '@contracts/schemas/transactionHistory/createTransactionHistoryRequest';
import { CursorQueryParam } from '@contracts/types/cursor/cursorQueryParam';
import { DefaultArgs } from '@prisma/client/runtime/client';

export type Tr = { points: number; staffId: string } & (
  | {
      schema: Extract<CreateTransactionHistoryRequest, { type: 'EARN' }>;
      type: 'EARN';
    }
  | {
      schema: Extract<CreateTransactionHistoryRequest, { type: 'REDEEM' }>;
      type: 'REDEEM';
      offerName: string;
    }
);
class TransactionHistoryRepository {
  private includeUserAndStaff() {
    return {
      user: true,
      staff: true,
    } as const satisfies TransactionHistoryInclude<DefaultArgs>;
  }

  async create({ props, prismaTx }: { props: Tr; prismaTx: Tx }) {
    const metadata = props.type === 'EARN' ? { amount: props.schema.dollarAmount } : { offerName: props.offerName };

    const transaction = await prismaTx.transactionHistory.create({
      data: {
        points: props.points,
        type: props.schema.type,
        staffId: props.staffId,
        userId: props.schema.userId,
        metadata,
      },
      include: this.includeUserAndStaff(),
    });
    return transaction;
  }

  async getUserHistory(userId: string, params: CursorQueryParam) {
    const transactions = await prisma.transactionHistory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip: params.cursor ? 1 : 0,
      take: params.limit + 1,
      include: this.includeUserAndStaff(),
      cursor: params.cursor ? { id: params.cursor } : undefined,
    });
    const hasNextPage = transactions.length > params.limit;
    if (hasNextPage) {
      transactions.pop();
    }
    return { transactions, hasNextPage };
  }

  async getStaffHistory(staffId: string, params: CursorQueryParam) {
    const transactions = await prisma.transactionHistory.findMany({
      where: { staffId },
      orderBy: { createdAt: 'desc' },
      skip: params.cursor ? 1 : 0,
      take: params.limit + 1,
      include: this.includeUserAndStaff(),
      cursor: params.cursor ? { id: params.cursor } : undefined,
    });

    const hasNextPage = transactions.length > params.limit;
    if (hasNextPage) {
      transactions.pop();
    }
    return { transactions, hasNextPage };
  }

  async getPage({
    skip,
    take,
    where,
    orderBy,
  }: {
    skip: number;
    take: number;
    where: TransactionHistoryWhereInput;
    orderBy: TransactionHistoryOrderByWithRelationInput;
  }) {
    const offers = prisma.transactionHistory.findMany({
      skip,
      take,
      where,
      orderBy,
      include: this.includeUserAndStaff(),
    });
    const offersCount = prisma.transactionHistory.count({ where });

    const [content, totalElements] = await Promise.all([offers, offersCount]);
    return { content, totalElements };
  }
}

export const transactionHistoryRepository = new TransactionHistoryRepository();
