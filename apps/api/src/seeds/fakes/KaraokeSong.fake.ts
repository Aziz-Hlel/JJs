import { prisma } from '@/bootstrap/db.init';
import { faker } from '@faker-js/faker';

faker.seed(1); // Ensure consistent fake data across runs

const fakeKaraokeSongs = () => {
  return {
    title: faker.music.songName(),
    artist: faker.music.artist(),
    album: faker.music.album(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  };
};

const seedKaraokeSongs = async () => {
  const karaokeSongs = faker.helpers.multiple(fakeKaraokeSongs, { count: 20 });

  for (const karaokeSong of karaokeSongs) {
    await prisma.karaokeSong.upsert({
      where: {
        title: karaokeSong.title,
      },
      create: karaokeSong,
      update: {},
    });
  }
};

export default seedKaraokeSongs;
