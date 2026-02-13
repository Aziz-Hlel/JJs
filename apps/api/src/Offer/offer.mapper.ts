import { Offer } from '@/generated/prisma/client';
import { mediaService } from '@/media/media.service';
import { OfferWithThumbnail } from '@/types/getPayload';
import { OfferResponse } from '@contracts/schemas/offre/offerResponse';
import { OfferRowResponse } from '@contracts/schemas/offre/OfferRowResponse';
import { DefaultSearchParams } from '@contracts/types/api/DefaultSeachParams';
import { Page } from '@contracts/types/page/Page';

export class OfferMapper {
  static toResponse(offer: OfferWithThumbnail): OfferResponse {
    const thumbnail = mediaService.getMediaKeyAndUrl(offer.thumbnail);

    return {
      title: offer.title,
      description: offer.description,
      code: offer.code,
      id: offer.id,
      status: offer.status,
      points: offer.points,
      thumbnail: thumbnail,
      isFeatured: offer.isFeatured,
      createdAt: offer.createdAt.toISOString(),
      updatedAt: offer.updatedAt.toISOString(),
    };
  }

  private static toRowResponse(offer: OfferWithThumbnail): OfferRowResponse {
    const thumbnail = mediaService.getMediaKeyAndUrl(offer.thumbnail);
    return {
      title: offer.title,
      description: offer.description,
      code: offer.code,
      id: offer.id,
      status: offer.status,
      points: offer.points,
      thumbnail: thumbnail,
      isFeatured: offer.isFeatured,
      createdAt: offer.createdAt.toISOString(),
      updatedAt: offer.updatedAt.toISOString(),
    };
  }

  static toRowsResponse(params: {
    offers: OfferWithThumbnail[];
    totalElements: number;
    pagination: DefaultSearchParams;
  }): Page<OfferRowResponse> {
    const offers = params.offers.map((offer) => this.toRowResponse(offer));

    return {
      content: offers,
      pagination: {
        number: params.pagination.page,
        size: params.pagination.size,
        totalElements: params.totalElements,
        totalPages: Math.ceil(params.totalElements / params.pagination.size),
        offset: params.pagination.page * params.pagination.size,
        pageSize: params.offers.length,
      },
    };
  }
}
