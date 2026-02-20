import { prisma } from '@/bootstrap/db.init';
import { logger } from '@/bootstrap/logger.init';
import { Prisma } from '@/generated/prisma/client';
import { CreatekaraekoSongRequest } from '@contracts/schemas/karaekoSong/createkaraekoSongRequest';
import { UpdatekaraekoSongRequest } from '@contracts/schemas/karaekoSong/updatekaraekoSongRequest';

class KaraokeSongRepo {
  async getByTitle(title: string) {
    try {
      const karaokeSong = await prisma.karaokeSong.findUnique({
        where: { title },
      });
      return karaokeSong;
    } catch (error) {
      logger.error(error, `Error fetching karaoke song with title ${title}:`);
      throw new Error('Failed to fetch karaoke song');
    }
  }

  async isKaraokeSongExist(id: string) {
    try {
      const karaokeSong = await prisma.karaokeSong.findUnique({
        where: { id },
      });
      return !!karaokeSong;
    } catch (error) {
      logger.error(error, `Error checking existence of karaoke song with id ${id}:`);
      throw new Error('Failed to check karaoke song existence');
    }
  }

  async create(data: CreatekaraekoSongRequest) {
    try {
      const createdSong = await prisma.karaokeSong.create({
        data: {
          title: data.title,
          artist: data.artist,
          album: data.album,
        },
      });
      return createdSong;
    } catch (error) {
      // Detect Prisma unique constraint error (P2002) for the title field
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const target = error.meta?.target;
        if (Array.isArray(target) && target.includes('title')) {
          logger.warn({ error }, 'Unique constraint failed on title when creating karaoke song');
          throw new Error('Karaoke song with this title already exists');
        }
      }

      logger.error(error, 'Error creating karaoke song:');
      throw new Error('Failed to create karaoke song');
    }
  }

  async createMany(data: CreatekaraekoSongRequest[]) {
    try {
      const createdSongs = await prisma.karaokeSong.createMany({
        data: data,
      });
      return createdSongs;
    } catch (error) {
      logger.error(error, 'Error creating multiple karaoke songs:');
      throw new Error('Failed to create multiple karaoke songs');
    }
  }

  async update(id: string, data: UpdatekaraekoSongRequest) {
    try {
      const updatedSong = await prisma.karaokeSong.update({
        where: { id },
        data: data,
      });
      return updatedSong;
    } catch (error) {
      logger.error(error, `Error updating karaoke song with id ${id}:`);
      throw new Error('Failed to update karaoke song');
    }
  }

  async getById(id: string) {
    try {
      const karaokeSong = await prisma.karaokeSong.findUnique({
        where: { id },
      });
      return karaokeSong;
    } catch (error) {
      logger.error(error, `Error fetching karaoke song with id ${id}:`);
      throw new Error('Failed to fetch karaoke song');
    }
  }

  async getAll() {
    try {
      const karaokeSongs = await prisma.karaokeSong.findMany({
        orderBy: { id: 'asc' },
      });
      return karaokeSongs;
    } catch (error) {
      logger.error(error, 'Error fetching all karaoke songs:');
      throw new Error('Failed to fetch karaoke songs');
    }
  }

  async delete(id: string) {
    try {
      await prisma.karaokeSong.delete({
        where: { id },
      });
    } catch (error) {
      logger.error(error, `Error deleting karaoke song with id ${id}:`);
      throw new Error('Failed to delete karaoke song');
    }
  }
}

export const karaokeSongRepo = new KaraokeSongRepo();
