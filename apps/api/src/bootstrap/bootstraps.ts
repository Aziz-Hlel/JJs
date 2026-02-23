import testFirebaseConnection from './test-connection/firebase.test.connection';
import { testDbConnection } from './test-connection/db.test.connection';
import { connectRedis } from './redis.init';
import seed from '@/seeds';
import { storageProviderTestConnection } from './test-connection/storageProvider.test.connection';
import karaokeSongInit from '@/karaokeSong/KaraokeSong.init';
import { connectPubSub } from './pubsub.init';

const asyncBootstrapHandlers = async () => {
  await Promise.all([
    testFirebaseConnection(),
    testDbConnection(),
    connectRedis(),
    connectPubSub(),
    storageProviderTestConnection(),
  ]);
  //
  await seed();

  await karaokeSongInit();
};

export default asyncBootstrapHandlers;
