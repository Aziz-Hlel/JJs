import { MediaResponse } from '../media/MediaResponse';

export type OfferRedeemResponse = {
  id: string;
  code: string;
  title: string;
  points: number;
  thumbnail: MediaResponse | null;
};
