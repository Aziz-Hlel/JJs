import { redeemQuoteRequestSchema } from '@repo/contracts/schemas/points/RedeemQuoteRequest';
import { Request, Response } from 'express';
import { pointsService } from './points.service';
import { earnPointsRequestSchema } from '@repo/contracts/schemas/points/EarnPointsRequest';
import { AuthenticatedRequest } from '@/types/auth/AuthenticatedRequest';
import { redeemPointsRequestSchema } from '@repo/contracts/schemas/points/RedeemPointsRequest';
import { earnQuoteRequest } from '@repo/contracts/schemas/points/EarnQuoteRequest';
import { pointsConnections, transactionConnections } from '@/bootstrap/pubsub.init';
import { pointsSSE } from './points.sse';

class PointsController {
  async earnQuote(req: Request, res: Response) {
    const schema = earnQuoteRequest.parse(req.body);
    const redeemQuoteResponse = await pointsService.generateEarnPointsQuote(schema);
    res.status(200).json(redeemQuoteResponse);
  }

  async earnConfirm(req: AuthenticatedRequest, res: Response) {
    const schema = earnPointsRequestSchema.parse(req.body);
    const staffId = req.user.claims.id;
    const redeemQuoteResponse = await pointsService.confirmEarnPoints({ ...schema, type: 'EARN' }, staffId);
    res.status(200).json(redeemQuoteResponse);
  }

  async redeemQuote(req: Request, res: Response) {
    const schema = redeemQuoteRequestSchema.parse(req.body);
    const redeemQuoteResponse = await pointsService.generateRedeemPointsQuote(schema);
    res.status(200).json(redeemQuoteResponse);
  }

  async redeemConfirm(req: AuthenticatedRequest, res: Response) {
    const schema = redeemPointsRequestSchema.parse(req.body);
    const staffId = req.user.claims.id;
    const redeemQuoteResponse = await pointsService.confirmRedeemPoints({ ...schema, type: 'REDEEM' }, staffId);
    res.status(200).json(redeemQuoteResponse);
  }

  async streamPoints(req: AuthenticatedRequest, res: Response) {
    const userId = req.user.claims.id;

    const points = await pointsService.getUserPoints(userId);
    pointsSSE.writeResponse(res, { points });

    if (!pointsConnections.has(userId)) {
      pointsConnections.set(userId, new Set());
    }

    pointsConnections.get(userId)!.add(res);
    req.on('close', () => {
      pointsConnections.get(userId)?.delete(res);
    });
  }

  async getResult(req: AuthenticatedRequest, res: Response) {
    const userId = req.user.claims.id;

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
