import { KaraokeSong } from '@/generated/prisma/client';
import { KaraokeSongResponse } from '@repo/contracts/schemas/karaekoSong/KaraokeSongResponse';
import { DefaultSearchParams } from '@repo/contracts/types/api/DefaultSeachParams';
import { Page } from '@repo/contracts/types/page/Page';

export class KaraokeSongMapper {
  static toResponseDto(karaokeSong: KaraokeSong): KaraokeSongResponse {
    return {
      id: karaokeSong.id,
      title: karaokeSong.title,
      artist: karaokeSong.artist,
      album: karaokeSong.album,
    };
  }

  static toResponseDtoList(karaokeSongs: KaraokeSong[]): KaraokeSongResponse[] {
    return karaokeSongs.map(this.toResponseDto);
  }

  private static toRowResponses(karaokeSongs: KaraokeSong[]): KaraokeSongResponse[] {
    return karaokeSongs.map(this.toResponseDto);
  }

  static toPageResponse(params: {
    karaokeSongs: KaraokeSong[];
    totalElements: number;
    pagination: DefaultSearchParams;
  }): Page<KaraokeSongResponse> {
    const karaokeSongRowResponses = this.toRowResponses(params.karaokeSongs);
    return {
      content: karaokeSongRowResponses,
      pagination: {
        number: params.pagination.page,
        size: params.pagination.size,
        totalElements: params.totalElements,
        totalPages: Math.ceil(params.totalElements / params.pagination.size),
        offset: params.pagination.page * params.pagination.size,
        pageSize: params.karaokeSongs.length,
      },
    };
  }
}
