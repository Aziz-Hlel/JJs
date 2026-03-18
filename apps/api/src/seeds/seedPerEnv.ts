import ENV from '@/config/ENV';
import { seedProducts } from './fakes/products.fake';
import seedUsers from './fakes/users.fake';
import { seedProdUsers } from './prod/users';
import seedOffers from './fakes/offers.fake';
import seedEntertainments from './fakes/entertainment.fake';
import seedKaraokeSongs from './fakes/KaraokeSong.fake';

type EnvSeeds = Record<(typeof ENV)['NODE_ENV'], Function[]>;

const devSeeds = [seedProdUsers, () => seedUsers(50), seedProducts, seedOffers, seedEntertainments, seedKaraokeSongs];
const prodSeeds = [seedProdUsers];

const envSeeds: EnvSeeds = {
  dev: devSeeds,
  test: devSeeds,
  stage: devSeeds,
  production: devSeeds,
};

export default envSeeds;
