import { OfferStatus } from "../../types/enums/enums";

export type OfferRowResponse = {
  id: string;
  code: string;
  title: string;
  description: string;
  status: OfferStatus;
  points: number;
  thumbnailUrl: string | null;
  createdAt: string;
  updatedAt: string;
};
