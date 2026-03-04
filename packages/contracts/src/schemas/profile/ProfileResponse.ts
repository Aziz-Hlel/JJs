import { Gender } from "../../types/enums/enums";

export type ProfileResponse = {
  phoneNumber: string | null;
  gender: Gender | null;
  address: string | null;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
};
