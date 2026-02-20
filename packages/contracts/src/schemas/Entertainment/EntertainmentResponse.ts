import { MediaResponse } from '../media/MediaResponse';

export type EntertainmentResponse = {
  id: string;
  name: string;
  description: string;
  date: string;
  thumbnail: MediaResponse | null;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};
