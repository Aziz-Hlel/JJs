import { redeemQuoteRequestSchema } from '@contracts/schemas/points/RedeemQuoteRequest';
import { Request, Response } from 'express';
import { pointsService } from './points.service';
import { earnPointsRequestSchema } from '@contracts/schemas/points/EarnPointsRequest';
import { AuthenticatedRequest } from '@/types/auth/AuthenticatedRequest';
import { redeemPointsRequestSchema } from '@contracts/schemas/points/RedeemPointsRequest';
import { earnQuoteRequest } from '@contracts/schemas/points/EarnQuoteRequest';

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
}

export const pointsController = new PointsController();
