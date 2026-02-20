import { prisma } from '@/bootstrap/db.init';
import {
  EntertainmentInclude,
  EntertainmentOrderByWithRelationInput,
  EntertainmentWhereInput,
} from '@/generated/prisma/models';
import { CreateEntertainmentRequest } from '@contracts/schemas/Entertainment/createEntertainmentRequest';
import { UpdateEntertainmentRequest } from '@contracts/schemas/Entertainment/UpdateEntertainmentRequest';
import { DefaultArgs } from '@prisma/client/runtime/client';

class EntertainmentRepository {
  includeThumbnail() {
    return {
      thumbnail: true,
    } as const satisfies EntertainmentInclude<DefaultArgs>;
  }
  async isExist(id: string) {
    try {
      const entertainment = await prisma.entertainment.findUnique({
        where: {
          id,
        },
      });
      return entertainment;
    } catch (error) {
      throw error;
    }
  }

  async create(schema: CreateEntertainmentRequest) {
    try {
      const createdEntertaiment = await prisma.entertainment.create({
        data: schema,
        include: this.includeThumbnail(),
      });
      return createdEntertaiment;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    try {
      const entertainment = await prisma.entertainment.findUnique({
        where: {
          id,
        },
        include: this.includeThumbnail(),
      });
      return entertainment;
    } catch (error) {
      throw error;
    }
  }

  async getPage({
    skip,
    take,
    where,
    orderBy,
  }: {
    skip: number;
    take: number;
    where: EntertainmentWhereInput;
    orderBy: EntertainmentOrderByWithRelationInput;
  }) {
    const products = prisma.entertainment.findMany({
      skip,
      take,
      where,
      orderBy,
      include: this.includeThumbnail(),
    });
    const productsCount = prisma.entertainment.count({ where });

    const [content, totalElements] = await Promise.all([products, productsCount]);

    return { content, totalElements };
  }

  async update(id: string, schema: UpdateEntertainmentRequest) {
    try {
      const updatedEntertaiment = await prisma.entertainment.update({
        where: {
          id,
        },
        data: schema,
        include: this.includeThumbnail(),
      });
      return updatedEntertaiment;
    } catch (error) {
      throw error;
    }
  }

  async getFeatured() {
    try {
      const featuredEntertainments = await prisma.entertainment.findMany({
        where: {
          isFeatured: true,
        },
        include: this.includeThumbnail(),
      });
      return featuredEntertainments;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const deletedEntertainment = await prisma.entertainment.delete({
        where: {
          id,
        },
      });
      return deletedEntertainment;
    } catch (error) {
      throw error;
    }
  }

  async toogleFeatured(id: string, isFeatured: boolean) {
    try {
      const updatedEntertaiment = await prisma.entertainment.update({
        where: {
          id,
        },
        data: {
          isFeatured,
        },
        include: this.includeThumbnail(),
      });
      return updatedEntertaiment;
    } catch (error) {
      throw error;
    }
  }
}

export const entertainmentRepository = new EntertainmentRepository();
