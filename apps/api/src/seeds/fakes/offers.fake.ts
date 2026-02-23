import { prisma } from '@/bootstrap/db.init';
import { MediaStatus, OfferStatus } from '@/generated/prisma/enums';
import { faker } from '@faker-js/faker';

faker.seed(1); // Ensure consistent fake data across runs

const fakeOffersData: { title: string; imgUrl: string; baseName: string; isFeatured: boolean }[] = [
  {
    title: 'Special Discount on next 5 sodas',
    imgUrl: 'offers/5_sodas_bucket_offer.webp',
    baseName: '5_sodas_bucket_offer.webp',
    isFeatured: true,
  },
  { title: 'Free pizza', imgUrl: 'offers/free_pizza_offer.jpg', baseName: 'free_pizza_offer.jpg', isFeatured: true },
  {
    title: '20% off on your next order',
    imgUrl: 'offers/20_pourcent_off.jpg',
    baseName: '20_pourcent_off.jpg',
    isFeatured: true,
  },
  // {
  //   title: 'Special package deal: 3 beers + burger',
  //   imgUrl: 'offers/3burgers_1beer.jpg',
  //   baseName: '3burgers_1beer.jpg',
  // },
  // { title: 'Free pizza and beer combo', imgUrl: 'offers/pizza_and_beer.jpg', baseName: 'pizza_and_beer.jpg' },
  // { title: 'Beer bucket', imgUrl: 'offers/bucket_beer.jpg', baseName: 'bucket_beer.jpg' },
  {
    title: 'Special Discount on next 3 drinks',
    imgUrl: 'offers/3juices.jpg',
    baseName: '3juices.jpg',
    isFeatured: false,
  },
  {
    title: '3 Cheezious Burger Deal with Chicken',
    imgUrl: 'offers/3cheezious.jpg',
    baseName: '3cheezious.jpg',
    isFeatured: false,
  },
  {
    title: 'Pizza Deal for 3 Persons',
    imgUrl: 'offers/cheezious-pizza-deal-for-3-persons.jpg',
    baseName: 'cheezious-pizza-deal-for-3-persons.jpg',
    isFeatured: false,
  },
  { title: '3 pizzas', imgUrl: 'offers/3pizzas.jpg', baseName: '3pizzas.jpg', isFeatured: false },
  {
    title: 'Snack Box Combo - Boneless Wings, Fries and Drink',
    imgUrl: 'offers/combo-meal.png',
    baseName: 'combo-meal.png',
    isFeatured: false,
  },
  {
    title: 'Family Combo',
    imgUrl: 'offers/family-combo.jpg',
    baseName: 'family-combo.jpg',
    isFeatured: false,
  },
];

const createFakeOffer = (
  _: unknown,
  { title, imgUrl, baseName, isFeatured }: { title: string; imgUrl: string; baseName: string; isFeatured: boolean },
) => {
  const fakeOffer = {
    title: title,
    description: faker.lorem.paragraph(),
    code: faker.number.int({ min: 10, max: 1000 }).toString(),
    points: faker.number.int({ min: 10, max: 1000 }),
    status: faker.helpers.arrayElement(Object.values(OfferStatus)),
    isFeatured: isFeatured,
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
