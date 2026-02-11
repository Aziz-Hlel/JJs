import { logger } from '@/bootstrap/logger.init';
import ENV from '../config/ENV';
import seedUsers from './fakes/users.fake';
import { seedProdUsers } from './prod/users';
import { seedProducts } from './fakes/products.fake';
import seedOffers from './fakes/offers.fake';

const seed = async () => {
  if (ENV.NODE_ENV === 'production') {
    console.log('ℹ️ NOTE : Skipped seeding in production environment.');
    return;
  }
  const userSeed = seedUsers(50);
  const prodUsersSeed = seedProdUsers();

  const productsSeed = seedProducts();
  const offersSeed = seedOffers();

  try {
    await Promise.all([userSeed, prodUsersSeed, productsSeed, offersSeed]);
  } catch (error) {
    console.error('❌ ERROR : Seeding failed.', error);
    throw error;
  }
  console.log('✅ SUCCESS : Seeding completed.');
};

export default seed;
