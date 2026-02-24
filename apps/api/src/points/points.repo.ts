import { prisma } from '@/bootstrap/db.init';

class PointsRepo {
  async getUserPoints(userId: string) {
    const result = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        points: true,
      },
    });
    return result;
  }
}

export const pointsRepo = new PointsRepo();
