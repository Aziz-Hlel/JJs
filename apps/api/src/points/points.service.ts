import { BadRequestError, InternalServerError, NotFoundError } from '@/err/customErrors';
import { userRepo } from '@/User/repo/user.repo';
import { EarnQuoteRequest } from '@contracts/schemas/points/EarnQuoteRequest';
import { EarnQuoteResponse } from '@contracts/schemas/points/EarnQuoteResponse';
import { PointsMapper } from './points.mapper';
import { RedeemQuoteRequest } from '@contracts/schemas/points/RedeemQuoteRequest';
import { RedeemResponse } from '@contracts/schemas/points/RedeemResponse';
import { offerRepository } from '@/Offer/offer.repo';
import { EarnPointsResponse } from '@contracts/schemas/points/EarnPointsResponse';
import { transactionHistoryRepository } from '@/transactionHistory/transactionHistory.repo';
import { CreateTransactionHistoryRequest } from '@contracts/schemas/transactionHistory/createTransactionHistoryRequest';
import { PointsTransactionType } from '@/generated/prisma/enums';
import { prisma } from '@/bootstrap/db.init';
import { logger } from '@/bootstrap/logger.init';

// POST /points/earn/quote
// POST /points/earn/confirm
// POST /points/redeem/quote
// POST /points/redeem/confirm

class PointsService {
  generatePointsAmount(amount: number) {
    return amount * 10;
  }

  async generateEarnPointsQuote(request: EarnQuoteRequest): Promise<EarnQuoteResponse> {
    const user = await userRepo.getByRefrenceCode(request.userRefrenceCode);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const pointsAmount = this.generatePointsAmount(request.amount);
    const earnQuoteResponse = PointsMapper.toEarnQuoteResponse(user, pointsAmount);
    return earnQuoteResponse;
  }

  async generateRedeemPointsQuote(request: RedeemQuoteRequest): Promise<RedeemResponse> {
    const user = await userRepo.getByRefrenceCode(request.userRefrenceCode);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const offer = await offerRepository.getByCode(request.offerCode);
    if (!offer) {
      throw new NotFoundError('Offer not found');
    }
    const isUserPointsEnough = user.points >= offer.points;
    if (!isUserPointsEnough) {
      throw new BadRequestError('User does not have enough points');
    }
    const redeemQuoteResponse = PointsMapper.toRedeemQuoteResponse(user, offer);
    return redeemQuoteResponse;
  }

  async confirmEarnPoints(
    request: Extract<CreateTransactionHistoryRequest, { type: 'EARN' }>,
    staffAuthId: string,
  ): Promise<EarnPointsResponse> {
    const userId = request.userId;
    const user = await userRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const staff = await userRepo.getUserByAuthId(staffAuthId);
    if (!staff) {
      throw new InternalServerError('Staff not found');
    }

    const isStaff = staff.role === 'STAFF';
    if (!isStaff) {
      throw new InternalServerError('Issuer is not staff');
    }

    const points = this.generatePointsAmount(request.dollarAmount);

    try {
      await prisma.$transaction(async (tx) => {
        await transactionHistoryRepository.create({
          prismaTx: tx,
          props: {
            points,
            staffId: staff.id,
            type: PointsTransactionType.EARN,
            schema: request,
          },
        });
        await userRepo.adjustUserPoints({
          prismaTx: tx,
          points: points,
          userId: user.id,
          type: 'EARN',
        });
      });
    } catch (error) {
      logger.error({ error, request, staffAuthId }, 'Error confirming earn points transaction');
      throw new InternalServerError('Failed to confirm earn points transaction');
    }

    const earnQuoteResponse = PointsMapper.toEarnQuoteResponse(user, points);
    return earnQuoteResponse;
  }

  async confirmRedeemPoints(
    schema: Extract<CreateTransactionHistoryRequest, { type: 'REDEEM' }>,
    staffAuthId: string,
  ): Promise<RedeemResponse> {
    const user = await userRepo.getUserById(schema.userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const offer = await offerRepository.getById(schema.offerId);
    if (!offer) {
      throw new NotFoundError('Offer not found');
    }

    const isUserPointsEnough = user.points >= offer.points;
    if (!isUserPointsEnough) {
      throw new Error('User does not have enough points');
    }

    const staff = await userRepo.getUserByAuthId(staffAuthId);
    if (!staff) {
      throw new InternalServerError('Staff not found');
    }
    const isStaff = staff.role === 'STAFF';
    if (!isStaff) {
      throw new InternalServerError('Issuer is not staff');
    }

    try {
      await prisma.$transaction(async (tx) => {
        await transactionHistoryRepository.create({
          prismaTx: tx,
          props: {
            points: offer.points,
            staffId: staff.id,
            offerName: offer.title,
            type: PointsTransactionType.REDEEM,
            schema,
          },
        });
        await userRepo.adjustUserPoints({
          prismaTx: tx,
          points: offer.points,
          userId: user.id,
          type: 'REDEEM',
        });
      });
    } catch (error) {
      logger.error({ error, schema, staffAuthId }, 'Error redeeming points');
      throw new InternalServerError('Failed to redeem points');
    }
    const redeemQuoteResponse = PointsMapper.toRedeemQuoteResponse(user, offer);
    return redeemQuoteResponse;
  }
}

export const pointsService = new PointsService();
