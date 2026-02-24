import { prisma } from '@/bootstrap/db.init';

class PointsRepo {
  async getUserPoints(userAuthId: string) {
    const result = await prisma.user.findUnique({
      where: {
        authId: userAuthId,
      },
      select: {
        points: true,
      },
    });
    return result;
  }
}

export const pointsRepo = new PointsRepo();
