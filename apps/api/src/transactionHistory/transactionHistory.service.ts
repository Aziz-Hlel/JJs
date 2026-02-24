import { transactionHistoryRepository } from './transactionHistory.repo';
import { TransactionMapper } from './transactionHistory.mapper';
import { userRepo } from '@/User/repo/user.repo';
import { NotFoundError } from '@/err/customErrors';
import { CursorQueryParam } from '@contracts/types/cursor/cursorQueryParam';
import { Role } from '@/generated/prisma/enums';
import { TransactionHistoryPageQuery } from '@contracts/schemas/transactionHistory/transactionHistoryPageQuery';
import { TransactionHistoryOrderByWithRelationInput, TransactionHistoryWhereInput } from '@/generated/prisma/models';

class TransactionHistoryService {
  // async createTransactionHistory(schema: CreateTransactionHistoryRequest, staffUid: string) {
  //   const userId = schema.userId;
  //   const userExists = await userRepo.isUserExists(userId);
  //   if (!userExists) {
  //     throw new NotFoundError('User does not exist');
  //   }
  //   const staffExists = await userRepo.isUserUidExists(staffUid);
  //   if (!staffExists) {
  //     throw new NotFoundError('Staff does not exist');
  //   }
  //   const transaction = await transactionHistoryRepository.createTransactionHistory(schema, staffUid);
  //   const transactionResponse = TransactionMapper.toResponse(transaction);
  //   return transactionResponse;
  // }

  async getUserTransactionHistory(userId: string, params: CursorQueryParam) {
    const userExists = await userRepo.isUserExists(userId);
    if (!userExists) {
      throw new NotFoundError('User does not exist');
    }
    const { transactions, hasNextPage } = await transactionHistoryRepository.getUserHistory(userId, params);
    const transactionResponse = TransactionMapper.toPersonalHistoryResponses(transactions, hasNextPage);
    return transactionResponse;
  }

  async getStaffTransactionHistory(staffId: string, params: CursorQueryParam) {
    const staffExists = await userRepo.getUserById(staffId);
    if (!staffExists) {
      throw new NotFoundError('Staff does not exist');
    }
    const isStaff = staffExists.role === Role.STAFF;
    if (!isStaff) {
      throw new NotFoundError('User is not a staff');
    }
    const { transactions, hasNextPage } = await transactionHistoryRepository.getStaffHistory(staffId, params);
    const transactionResponse = TransactionMapper.toPersonalHistoryResponses(transactions, hasNextPage, true);
    return transactionResponse;
  }

  async getPage(queryParams: TransactionHistoryPageQuery) {
    const skip = (queryParams.page - 1) * queryParams.size;
    const take = queryParams.size;
    const { search } = queryParams;

    const where: TransactionHistoryWhereInput = {};

    if (search.length > 0) {
      const searchValue = search.toLowerCase();
      // where.offerName = { contains: searchValue, mode: 'insensitive' };
    }

    if (queryParams.type.length) {
      where.type = { in: queryParams.type };
    }

    const orderBy: TransactionHistoryOrderByWithRelationInput = {};

    if (queryParams.sort) {
      orderBy[queryParams.sort] = queryParams.order;
    }

    const { content, totalElements } = await transactionHistoryRepository.getPage({ skip, take, where, orderBy });

    const transactionResponse = TransactionMapper.toRowsResponse({
      content,
      totalElements,
      pagination: queryParams,
    });

    return transactionResponse;
  }
}

export const transactionHistoryService = new TransactionHistoryService();
