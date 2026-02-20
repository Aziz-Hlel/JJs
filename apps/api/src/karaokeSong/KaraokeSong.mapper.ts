import { KaraokeSong } from '@/generated/prisma/client';
import { KaraokeSongResponse } from '@contracts/schemas/karaekoSong/KaraokeSongResponse';

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
}
