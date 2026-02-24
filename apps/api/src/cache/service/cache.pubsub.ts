import subscriber from '@/bootstrap/pubsub.init';
import redis from '@/bootstrap/redis.init';
import { PointsTransactionType } from '@/generated/prisma/enums';

class CachePubSub {
  async publishUserPoints({ userId, points }: { userId: string; points: number }) {
    console.log(`publisihng fcking points to : ${userId} and points : ${points}`);
    await redis.publish(`user:${userId}:points`, JSON.stringify({ points }));
  }

  async publishTrasactionToUser({
    userId,
    transactionType,
    points,
    offerName,
  }: {
    userId: string;
    transactionType: PointsTransactionType;
    points: number;
    offerName: string | null;
  }) {
    await redis.publish(`user:${userId}:transaction`, JSON.stringify({ transactionType, points, offerName }));
  }
}

export const cachePubSub = new CachePubSub();
