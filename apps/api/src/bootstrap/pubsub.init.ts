import Redis from 'ioredis';
import redis from './redis.init';
import { logger } from './logger.init';
import { Response } from 'express';
import { pointsSSE } from '@/points/points.sse';

const subscriber: Redis = redis.duplicate({
  lazyConnect: true,
});

export async function connectPubSub() {
  if (subscriber.status === 'ready' || subscriber.status === 'connecting') return;

  try {
    await subscriber.connect();

    console.log('✅ SUCCESS : PubSub connected successfully.');
  } catch (err) {
    console.error('❌ ERROR : PubSub connection failed', err);
    process.exit(1);
  }
}

export const pointsConnections = new Map<string, Set<Response>>();
export const transactionConnections = new Map<string, Set<Response>>();

subscriber.psubscribe('user:*:points', 'user:*:transaction');

const handleTransactionUpdate = (userId: string, stringifiedMessage: string) => {
  const userConnections = transactionConnections.get(userId);

  if (!userConnections) return;

  for (const res of userConnections) {
    pointsSSE.writeResponse(res, stringifiedMessage);
  }
};

const handlePointsUpdate = (userId: string, stringifiedMessage: string) => {
  const userConnections = pointsConnections.get(userId);
  if (!userConnections) return;
  for (const res of userConnections) {
    pointsSSE.writeResponse(res, stringifiedMessage);
  }
};

subscriber.on('pmessage', (pattern: string, channel: string, message: string) => {
  const [, userId, type] = channel.split(':');
  switch (type) {
    case 'points':
      handlePointsUpdate(userId, message);
      break;

    case 'transaction':
      handleTransactionUpdate(userId, message);
      break;
  }
});

export default subscriber;
