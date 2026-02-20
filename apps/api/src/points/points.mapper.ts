import { mediaService } from '@/media/media.service';
import { OfferWithThumbnail } from '@/types/getPayload';
import { UserWithProfile } from '@/User/types';
import { EarnQuoteResponse } from '@contracts/schemas/points/EarnQuoteResponse';
import { RedeemResponse } from '@contracts/schemas/points/RedeemResponse';

export class PointsMapper {
  static toEarnQuoteResponse(user: UserWithProfile, points: number): EarnQuoteResponse {
    return {
      points,
      user: {
        id: user.id,
        referenceCode: user.referenceCode,
        email: user.email,
        username: user.username,
        avatar: user.profile?.avatar ?? null,
      },
    };
  }

  static toRedeemQuoteResponse(user: UserWithProfile, offer: OfferWithThumbnail): RedeemResponse {
    const offerThumbnail = mediaService.getMediaKeyAndUrl(offer.thumbnail);

    return {
      success:true,
      user: {
        id: user.id,
        referenceCode: user.referenceCode,
        email: user.email,
        username: user.username,
        avatar: user.profile?.avatar ?? null,
      },
      offer: {
        id: offer.id,
        code: offer.code,
        title: offer.title,
        points: offer.points,
        thumbnail: offerThumbnail,
      },
    };
  }
}
