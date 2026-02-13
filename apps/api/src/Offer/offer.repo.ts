import { prisma } from '@/bootstrap/db.init';
import { OfferInclude, OfferOrderByWithRelationInput, OfferWhereInput } from '@/generated/prisma/models';
import { CreateOfferRequest } from '@contracts/schemas/offre/createOfferRequest';
import { UpdateOfferRequest } from '@contracts/schemas/offre/updateOfferRequest';
import { DefaultArgs } from '@prisma/client/runtime/client';

class OfferRepository {
  private includeThumbnail() {
    return {
      thumbnail: true,
    } as const satisfies OfferInclude<DefaultArgs>;
  }

  async getById(offerId: string) {
    const offer = await prisma.offer.findUnique({
      where: { id: offerId },
      include: this.includeThumbnail(),
    });
    return offer;
  }

  async isOfferExists(offerId: string) {
    const offer = await this.getById(offerId);
    return !!offer;
  }

  async create(schema: CreateOfferRequest, code: string) {
    try {
      const createdOffer = await prisma.offer.create({
        data: {
          ...schema,
          code: code,
        },
        include: this.includeThumbnail(),
      });
      return createdOffer;
    } catch (error) {
      throw error;
    }
  }

  async update(offerId: string, schema: Omit<UpdateOfferRequest, 'thumbnailId'>) {
    try {
      const updatedOffer = await prisma.offer.update({
        where: { id: offerId },
        data: {
          ...schema,
        },
        include: this.includeThumbnail(),
      });
      return updatedOffer;
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
    where: OfferWhereInput;
    orderBy: OfferOrderByWithRelationInput;
  }) {
    const offers = prisma.offer.findMany({
      skip,
      take,
      where,
      orderBy,
      include: this.includeThumbnail(),
    });
    const offersCount = prisma.offer.count({ where });

    const [content, totalElements] = await Promise.all([offers, offersCount]);

    return { content, totalElements };
  }

  async delete(offerId: string) {
    try {
      const deletedOffer = await prisma.offer.delete({
        where: { id: offerId },
      });
      return deletedOffer;
    } catch (error) {
      throw error;
    }
  }

  async updateFeatured(offerId: string, isFeatured: boolean) {
    try {
      const updatedOffer = await prisma.offer.update({
        where: { id: offerId },
        data: { isFeatured },
        include: this.includeThumbnail(),
      });
      return updatedOffer;
    } catch (error) {
      throw error;
    }
  }



}

export const offerRepository = new OfferRepository();
