import { prisma } from '@/bootstrap/db.init';
import { MediaStatus } from '@/generated/prisma/enums';
import { en, faker } from '@faker-js/faker';

faker.seed(1); // Ensure consistent fake data across runs

const prefix = 'entertainment';

const fakeEntertainments = [
  {
    id: faker.string.uuid(),
    name: 'Happy Hour',
    description: 'Enjoy discounted drinks and good vibes every evening. The perfect way to unwind after a long day.',
    date: 'Monday - Sunday / from 8.30pm',
    thumbnail: {
      key: `${prefix}/happy_hour.jpg`,
      baseName: 'happy_hour.jpg',
      fileType: 'jpg',
      mimeType: 'image/jpeg',
      fileSize: 1024 * 500,
      status: MediaStatus.CONFIRMED,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    isFeatured: true,
  },
  {
    id: faker.string.uuid(),
    name: 'New Year Eve',
    description: 'Ring in the new year with us! Live music, special cocktails, and a midnight countdown to remember.',
    date: '2026-12-31',
    thumbnail: {
      key: `${prefix}/new_year_eve.jpg`,
      baseName: 'new_year_eve.jpg',
      fileType: 'jpg',
      mimeType: 'image/jpeg',
      fileSize: 1024 * 500,
      status: MediaStatus.CONFIRMED,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    isFeatured: true,
  },
  {
    id: faker.string.uuid(),
    name: 'Senegal vs Maroc',
    description:
      'Watch the highly anticipated Senegal vs Morocco match live on our big screen. Come early to grab your seat!',
    date: '2026-12-31',
    thumbnail: {
      key: `${prefix}/senegal_v_maroc.jpg`,
      baseName: 'senegal_v_maroc.jpg',
      fileType: 'jpg',
      mimeType: 'image/jpeg',
      fileSize: 1024 * 500,
      status: MediaStatus.CONFIRMED,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    isFeatured: false,
  },
  {
    id: faker.string.uuid(),
    name: 'Valentine Day',
    description: "Celebrate love with a special Valentine's dinner, romantic ambiance, and exclusive couple's offers.",
    date: '2026-12-31',
    thumbnail: {
      key: `${prefix}/valentine_day.jpg`,
      baseName: 'valentine_day.jpg',
      fileType: 'jpg',
      mimeType: 'image/jpeg',
      fileSize: 1024 * 500,
      status: MediaStatus.CONFIRMED,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    isFeatured: true,
  },
];

const seedEntertainments = async () => {
  for (const entertainment of fakeEntertainments) {
    await prisma.entertainment.upsert({
      where: {
        id: entertainment.id,
      },
      create: {
        ...entertainment,
        thumbnail: {
          create: entertainment.thumbnail,
        },
      },
      update: {},
    });
  }
};

export default seedEntertainments;
