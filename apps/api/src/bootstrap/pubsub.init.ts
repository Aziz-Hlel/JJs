import Redis from 'ioredis';
import redis from './redis.init';

let subscriber: Redis = redis.duplicate();

export async function connectPubSub() {
  if (subscriber.status === 'ready') return;

  try {
    await subscriber.connect();

    console.log('✅ SUCCESS : PubSub connected successfully.');
  } catch (err) {
    console.error('❌ ERROR : PubSub connection failed', err);
    process.exit(1);
  }
}
export default subscriber;
