import { prisma } from '@/bootstrap/db.init';
import { OfferStatus } from '@/generated/prisma/enums';
import { faker } from '@faker-js/faker';

faker.seed(1); // Ensure consistent fake data across runs

const fakeOffersTitle = [
  'Special Discount on next 5 beers',
  'Free pizza',
  '20% off on your next order',
  'Special package deal: 3 beers + burger',
  'Free pizza and beer combo',
  'Beer bucket',
];

const createFakeOffer = (_: unknown, index: number) => {
  if (index >= fakeOffersTitle.length) {
    throw new Error(`Index ${index} is out of bounds for fakeOffersTitle array.`);
  }

  const fakeOffer = {
    title: fakeOffersTitle[index],
    description: faker.lorem.paragraph(),
    code: faker.number.int({ min: 10, max: 1000 }).toString(),
    points: faker.number.int({ min: 10, max: 1000 }),
    status: faker.helpers.arrayElement(Object.values(OfferStatus)),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };

  return fakeOffer;
  
};

const seedOffers = async () => {
  const fakeOffers = faker.helpers.multiple(createFakeOffer, { count: fakeOffersTitle.length });
  for (const offer of fakeOffers) {
    await prisma.offer.upsert({
      where: { code: offer.code },
      create: offer,
      update: {}, //offer,
    });
  }
};

export default seedOffers;
