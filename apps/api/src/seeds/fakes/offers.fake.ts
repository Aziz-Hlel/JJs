import { prisma } from '@/bootstrap/db.init';
import { MediaStatus, OfferStatus } from '@/generated/prisma/enums';
import { faker } from '@faker-js/faker';

faker.seed(1); // Ensure consistent fake data across runs

const fakeOffersData: { title: string; imgUrl: string; baseName: string }[] = [
  {
    title: 'Special Discount on next 5 beers',
    imgUrl: 'offers/5_beers_bucket_offer.webp',
    baseName: '5_beers_bucket_offer.webp',
  },
  { title: 'Free pizza', imgUrl: 'offers/free_pizza_offer.jpg', baseName: 'free_pizza_offer.jpg' },
  { title: '20% off on your next order', imgUrl: 'offers/20_pourcent_off.jpg', baseName: '20_pourcent_off.jpg' },
  {
    title: 'Special package deal: 3 beers + burger',
    imgUrl: 'offers/3burgers_1beer.jpg',
    baseName: '3burgers_1beer.jpg',
  },
  { title: 'Free pizza and beer combo', imgUrl: 'offers/pizza_and_beer.jpg', baseName: 'pizza_and_beer.jpg' },
  { title: 'Beer bucket', imgUrl: 'offers/bucket_beer.jpg', baseName: 'bucket_beer.jpg' },
];

const createFakeOffer = (
  _: unknown,
  { title, imgUrl, baseName }: { title: string; imgUrl: string; baseName: string },
) => {
  const fakeOffer = {
    title: title,
    description: faker.lorem.paragraph(),
    code: faker.number.int({ min: 10, max: 1000 }).toString(),
    points: faker.number.int({ min: 10, max: 1000 }),
    status: faker.helpers.arrayElement(Object.values(OfferStatus)),
    thumbnail: {
      key: imgUrl,
      baseName: baseName,
      fileType: 'jpg',
      mimeType: 'image/jpeg',
      fileSize: 1024 * 500,
      status: MediaStatus.CONFIRMED,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };

  return fakeOffer;
};

const generateFakeOffer = () => {
  return faker.image.url();
};

const fakeOffers = [];
const seedOffers = async () => {
  const fakeOffers = fakeOffersData.map((offer) => createFakeOffer(null, offer));
  for (const offer of fakeOffers) {
    await prisma.offer.upsert({
      where: { code: offer.code },
      create: {
        ...offer,
        thumbnail: {
          create: offer.thumbnail,
        },
      },
      update: {}, //offer,
    });
  }
};

export default seedOffers;
