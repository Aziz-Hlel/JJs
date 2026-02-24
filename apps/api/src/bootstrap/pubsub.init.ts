import Redis from 'ioredis';
import redis from './redis.init';
import { logger } from './logger.init';
import { Response } from 'express';

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

function extractUserId(channel: string): string {
  return channel.split(':')[1];
}

export const connections = new Map<string, Set<Response>>();

function notifyConnectedClients(userId: string, message: string) {
  const userConnections = connections.get(userId);

  if (!userConnections) return;

  for (const res of userConnections) {
    res.write(`data: ${message}\n\n`);
  }
}

subscriber.psubscribe('user:*:points');

subscriber.on('pmessage', (pattern: string, channel: string, message: string) => {
  const userId = extractUserId(channel);
  notifyConnectedClients(userId, message);
});

export default subscriber;
