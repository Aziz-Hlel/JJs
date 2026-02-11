import { prisma } from '@/bootstrap/db.init';
import { OfferStatus } from '@/generated/prisma/enums';
import { generateOfferReferenceCode } from '@/Offer/offer.utils';
import { faker } from '@faker-js/faker';

faker.seed(1); // Ensure consistent fake data across runs

const fakeOffersTitle = [
  'Special Discount on next 5 beers',
  'Free pizza',
  '20% off on your next order',
  'Special package deal: 3 beers + burger',
];

const createFakeOffer = () => {
  const fakeOffer = {
    title: faker.helpers.arrayElement(fakeOffersTitle),
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
