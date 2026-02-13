import { OfferStatus } from '../../types/enums/enums';
import { MediaResponse } from '../media/MediaResponse';

export type OfferRowResponse = {
  id: string;
  code: string;
  title: string;
  description: string;
  status: OfferStatus;
  points: number;
  thumbnail: MediaResponse | null;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};
