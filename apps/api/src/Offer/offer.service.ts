import { CreateOfferRequest } from '@contracts/schemas/offre/createOfferRequest';
import { generateOfferReferenceCode } from './offer.utils';
import { offerRepository } from './offer.repo';
import { OfferMapper } from './offer.mapper';
import { UpdateOfferRequest } from '@contracts/schemas/offre/updateOfferRequest';
import { OfferPageQuery } from '@contracts/schemas/offre/OfferPageQuery';
import { OfferOrderByWithRelationInput, OfferWhereInput } from '@/generated/prisma/models';
import { OfferRowResponse } from '@contracts/schemas/offre/OfferRowResponse';
import { Page } from '@contracts/types/page/Page';
import { ConflictError, NotFoundError } from '@/err/customErrors';
import { OfferStatus } from '@/generated/prisma/enums';

class OfferService {
  async create(schema: CreateOfferRequest) {
    const offerCode = generateOfferReferenceCode();
    const createdOffer = await offerRepository.create(schema, offerCode);

    const offerResponse = OfferMapper.toResponse(createdOffer);
    return offerResponse;
  }

  async update(offerId: string, schema: UpdateOfferRequest) {
    const updatedOffer = await offerRepository.update(offerId, schema);
    const offerResponse = OfferMapper.toResponse(updatedOffer);
    return offerResponse;
  }

  async getById(offerId: string) {
    const offer = await offerRepository.getById(offerId);
    if (!offer) {
      throw new NotFoundError(`Offer with id ${offerId} not found`);
    }
    const offerResponse = OfferMapper.toResponse(offer);
    return offerResponse;
  }

  async getPage(queryParams: OfferPageQuery): Promise<Page<OfferRowResponse>> {
    const skip = (queryParams.page - 1) * queryParams.size;
    const take = queryParams.size;
    const { search } = queryParams;

    const where: OfferWhereInput = {};

    if (search.length > 0) {
      const searchValue = search.toLowerCase();
      where.title = { contains: searchValue, mode: 'insensitive' };
    }

    if (queryParams.status.length) {
      where.status = { in: queryParams.status };
    }

    const orderBy: OfferOrderByWithRelationInput = {};

    if (queryParams.sort) {
      orderBy[queryParams.sort] = queryParams.order;
    }

    const { content, totalElements } = await offerRepository.getPage({ skip, take, where, orderBy });

    const offerPage = OfferMapper.toRowsResponse({
      offers: content,
      totalElements,
      pagination: queryParams,
    });

    return offerPage;
  }

  async getFeatured() {
    const featuredOffers = await offerRepository.getFeatured();
    const offerPage = OfferMapper.toResponses(featuredOffers);
    return offerPage;
  }

  async delete(offerId: string) {
    const isOfferExists = await offerRepository.isOfferExists(offerId);
    if (!isOfferExists) {
      throw new NotFoundError('Offer not found');
    }

    await offerRepository.delete(offerId);
    return;
  }

  async toggleFeatured(offerId: string) {
    const offer = await offerRepository.getById(offerId);
    if (!offer) {
      throw new NotFoundError('Offer not found');
    }

    if (offer.status !== OfferStatus.ACTIVE) {
      throw new ConflictError('Only active offers can be featured');
    }

    const featured = !offer.isFeatured;
    const updatedOffer = await offerRepository.updateFeatured(offerId, featured);

    const offerResponse = OfferMapper.toResponse(updatedOffer);
    return offerResponse;
  }
}

export const offerService = new OfferService();
