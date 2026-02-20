import { TransactionHistoryWithUserAndStaff } from '@/types/getPayload';
import { PersonalTransactionHistoryResponse } from '@contracts/schemas/transactionHistory/PersonalTransactionHistoryResponse';
import { TransactionHistoryResponse } from '@contracts/schemas/transactionHistory/TransactionHistoryResponse';
import { TransactionHistoryRowResponse } from '@contracts/schemas/transactionHistory/transactionHistoryRowResponse';
import { DefaultSearchParams } from '@contracts/types/api/DefaultSeachParams';
import { Cursor } from '@contracts/types/cursor/Cursor';
import { Page } from '@contracts/types/page/Page';

export class TransactionMapper {
  static toResponse(transaction: TransactionHistoryWithUserAndStaff): TransactionHistoryResponse {
    const offerName =
      transaction.type === 'EARN' && typeof transaction.metadata === 'object'
        ? ((transaction.metadata as { offerName: string }).offerName as string)
        : null;
    const dollarAmount =
      transaction.type === 'EARN' && typeof transaction.metadata === 'object'
        ? ((transaction.metadata as { dollarAmount: number }).dollarAmount as number)
        : null;

    return {
      id: transaction.id,
      points: transaction.points,
      type: transaction.type,
      createdAt: transaction.createdAt.toISOString(),
      staff: {
        id: transaction.staff.id,
        username: transaction.staff.username,
        email: transaction.staff.email,
      },
      user: {
        id: transaction.user.id,
        username: transaction.user.username,
        email: transaction.user.email,
      },
      ...(transaction.type === 'EARN' && {
        offerName: offerName,
        dollarAmount: dollarAmount,
      }),
      ...(transaction.type === 'REDEEM' && {
        offerName: offerName,
        dollarAmount: dollarAmount,
      }),
    };
  }

  static toPersonalHistoryResponse(
    transaction: TransactionHistoryWithUserAndStaff,
  ): PersonalTransactionHistoryResponse {
    const offerName =
      transaction.type === 'EARN' && typeof transaction.metadata === 'object'
        ? ((transaction.metadata as { offerName: string }).offerName as string)
        : null;
    const dollarAmount =
      transaction.type === 'EARN' && typeof transaction.metadata === 'object'
        ? ((transaction.metadata as { dollarAmount: number }).dollarAmount as number)
        : null;

    return {
      id: transaction.id,
      points: transaction.points,
      type: transaction.type,
      createdAt: transaction.createdAt.toISOString(),
      ...(transaction.type === 'EARN' && {
        offerName: offerName,
        dollarAmount: dollarAmount,
      }),
      ...(transaction.type === 'REDEEM' && {
        offerName: offerName,
        dollarAmount: dollarAmount,
      }),
    };
  }

  static toPersonalHistoryResponses(
    transaction: TransactionHistoryWithUserAndStaff[],
    hasNextPage: boolean,
  ): Cursor<PersonalTransactionHistoryResponse> {
    const lastTransactionId = transaction.length > 0 ? transaction[transaction.length - 1].id : null;
    return {
      data: transaction.map((transaction) => this.toPersonalHistoryResponse(transaction)),
      cursor: {
        hasNextPage: hasNextPage,
        cursor: lastTransactionId,
      },
    };
  }

  static toRowResponse(transaction: TransactionHistoryWithUserAndStaff): TransactionHistoryRowResponse {
    const offerName =
      transaction.type === 'EARN' && typeof transaction.metadata === 'object'
        ? ((transaction.metadata as { offerName: string }).offerName as string)
        : null;
    const dollarAmount =
      transaction.type === 'EARN' && typeof transaction.metadata === 'object'
        ? ((transaction.metadata as { dollarAmount: number }).dollarAmount as number)
        : null;

    return {
      id: transaction.id,

      points: transaction.points,
      type: transaction.type,
      createdAt: transaction.createdAt.toISOString(),
      staff: {
        id: transaction.staff.id,
        username: transaction.staff.username,
        email: transaction.staff.email,
      },
      user: {
        id: transaction.user.id,
        username: transaction.user.username,
        email: transaction.user.email,
      },

      ...(transaction.type === 'EARN' && {
        offerName: offerName,
        dollarAmount: dollarAmount,
      }),
      ...(transaction.type === 'REDEEM' && {
        offerName: offerName,
        dollarAmount: dollarAmount,
      }),
    };
  }

  static toRowsResponse(params: {
    content: TransactionHistoryWithUserAndStaff[];
    totalElements: number;
    pagination: DefaultSearchParams;
  }): Page<TransactionHistoryRowResponse> {
    const transactionRows = params.content.map((transaction) => this.toRowResponse(transaction));
    return {
      content: transactionRows,
      pagination: {
        number: params.pagination.page,
        size: params.pagination.size,
        totalElements: params.totalElements,
        totalPages: Math.ceil(params.totalElements / params.pagination.size),
        offset: params.pagination.page * params.pagination.size,
        pageSize: params.content.length,
      },
    };
  }
}
