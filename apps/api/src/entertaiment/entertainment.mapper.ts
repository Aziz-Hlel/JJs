import { mediaService } from '@/media/media.service';
import { EntertainmentWithThumbnail } from '@/types/getPayload';
import { EntertainmentResponse } from '@contracts/schemas/Entertainment/EntertainmentResponse';
import { DefaultSearchParams } from '@contracts/types/api/DefaultSeachParams';
import { Page } from '@contracts/types/page/Page';

export class EntertainmentMapper {
  static toResponse(entertainment: EntertainmentWithThumbnail): EntertainmentResponse {
    const thumbnail = mediaService.getMediaKeyAndUrl(entertainment.thumbnail);
    return {
      id: entertainment.id,
      name: entertainment.name,
      description: entertainment.description,
      date: entertainment.date,
      thumbnail: thumbnail,
      isFeatured: entertainment.isFeatured,
      createdAt: entertainment.createdAt.toISOString(),
      updatedAt: entertainment.updatedAt.toISOString(),
    };
  }

  static toResponses(entertainments: EntertainmentWithThumbnail[]): EntertainmentResponse[] {
    return entertainments.map((entertainment) => this.toResponse(entertainment));
  }

  static toPageResponse(params: {
    entertainments: EntertainmentWithThumbnail[];
    totalElements: number;
    pagination: DefaultSearchParams;
  }): Page<EntertainmentResponse> {
    const data = params.entertainments.map((entertainment) => this.toResponse(entertainment));
    return {
      content: data,
      pagination: {
        number: params.pagination.page,
        size: params.pagination.size,
        totalElements: params.totalElements,
        totalPages: Math.ceil(params.totalElements / params.pagination.size),
        offset: params.pagination.page * params.pagination.size,
        pageSize: params.entertainments.length,
      },
    };
  }
}
