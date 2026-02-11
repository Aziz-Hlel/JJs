import { faker } from '@faker-js/faker';
import { karaokeSongRepo } from './karaokeSongRepo';

faker.seed(123);

const karaokeSongInit = async () => {
  const karaokeSongs = await karaokeSongRepo.getAll();
  if (karaokeSongs.length === 0) {
    const karaokeSongData = Array.from({ length: 5 }, () => ({
      title: faker.music.songName(),
      artist: faker.music.artist(),
      album: faker.music.album(),
    }));
    await karaokeSongRepo.createMany(karaokeSongData);
    return
  }

  if (karaokeSongs.length === 5) return;

  throw new Error('Karaoke songs count is not 0 or 5');
};

export default karaokeSongInit;
