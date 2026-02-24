import { redeemQuoteRequestSchema } from '@contracts/schemas/points/RedeemQuoteRequest';
import { Request, Response } from 'express';
import { pointsService } from './points.service';
import { earnPointsRequestSchema } from '@contracts/schemas/points/EarnPointsRequest';
import { AuthenticatedRequest } from '@/types/auth/AuthenticatedRequest';
import { redeemPointsRequestSchema } from '@contracts/schemas/points/RedeemPointsRequest';
import { earnQuoteRequest } from '@contracts/schemas/points/EarnQuoteRequest';
import redis from '@/bootstrap/redis.init';
import { pointsConnections, transactionConnections } from '@/bootstrap/pubsub.init';

class PointsController {
  async earnQuote(req: Request, res: Response) {
    const schema = earnQuoteRequest.parse(req.body);
    const redeemQuoteResponse = await pointsService.generateEarnPointsQuote(schema);
    res.status(200).json(redeemQuoteResponse);
  }

  async earnConfirm(req: AuthenticatedRequest, res: Response) {
    const schema = earnPointsRequestSchema.parse(req.body);
    const user = req.user;
    const staffUid = user.uid;
    const redeemQuoteResponse = await pointsService.confirmEarnPoints({ ...schema, type: 'EARN' }, staffUid);
    res.status(200).json(redeemQuoteResponse);
  }

  async redeemQuote(req: Request, res: Response) {
    const schema = redeemQuoteRequestSchema.parse(req.body);
    const redeemQuoteResponse = await pointsService.generateRedeemPointsQuote(schema);
    res.status(200).json(redeemQuoteResponse);
  }

  async redeemConfirm(req: AuthenticatedRequest, res: Response) {
    const schema = redeemPointsRequestSchema.parse(req.body);
    const user = req.user;
    const staffUid = user.uid;
    const redeemQuoteResponse = await pointsService.confirmRedeemPoints({ ...schema, type: 'REDEEM' }, staffUid);
    res.status(200).json(redeemQuoteResponse);
  }

  async streamPoints(req: AuthenticatedRequest, res: Response) {
    const user = req.user;
    const userId = user.uid;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.write(`data: connected\n\n`);

    if (!pointsConnections.has(userId)) {
      pointsConnections.set(userId, new Set());
    }

    pointsConnections.get(userId)!.add(res);
    req.on('close', () => {
      pointsConnections.get(userId)?.delete(res);
    });
    res.flushHeaders();
  }

  async getResult(req: AuthenticatedRequest, res: Response) {
    const user = req.user;
    const userId = user.uid;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    if (!transactionConnections.has(userId)) {
      transactionConnections.set(userId, new Set());
    }

    transactionConnections.get(userId)!.add(res);
    req.on('close', () => {
      transactionConnections.get(userId)?.delete(res);
    });
  }
}

export const pointsController = new PointsController();
