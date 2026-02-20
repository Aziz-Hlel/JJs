import { Request, Response } from 'express';
import { transactionHistoryService } from './transactionHistory.service';
import { AuthenticatedRequest } from '@/types/auth/AuthenticatedRequest';
import { createTransactionHistoryRequestSchema } from '@contracts/schemas/transactionHistory/createTransactionHistoryRequest';
import { cursorQueryParamSchema } from '@contracts/types/cursor/cursorQueryParam';
import { transactionHistoryPageQueryParamsSchema } from '@contracts/schemas/transactionHistory/transactionHistoryPageQuery';

class TransactionHistoryController {
  // async createTransactionHistory(req: AuthenticatedRequest, res: Response) {
  //   const schema = createTransactionHistoryRequestSchema.parse(req.body);
  //   const staffUid = req.user.uid;
  //   const transaction = await transactionHistoryService.createTransactionHistory(schema, staffUid);
  //   res.status(201).json(transaction);
  // }

  async getUserTransactionHistory(req: AuthenticatedRequest, res: Response) {
    const schema = cursorQueryParamSchema.parse(req.query);
    const userId = req.user.claims.id;
    const transaction = await transactionHistoryService.getUserTransactionHistory(userId, schema);
    res.status(200).json(transaction);
  }

  async getStaffTransactionHistory(req: AuthenticatedRequest, res: Response) {
    const schema = cursorQueryParamSchema.parse(req.query);
    const staffId = req.user.claims.id;
    const transaction = await transactionHistoryService.getStaffTransactionHistory(staffId, schema);
    res.status(200).json(transaction);
  }

  async getPage(req: Request, res: Response) {
    console.log('t5l');
    const schema = transactionHistoryPageQueryParamsSchema.parse(req.query);
    const transaction = await transactionHistoryService.getPage(schema);
    res.status(200).json(transaction);
  }
}

export const transactionHistoryController = new TransactionHistoryController();
