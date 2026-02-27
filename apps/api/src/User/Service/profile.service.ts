import { DecodedIdTokenWithClaims } from '@/types/auth/DecodedIdTokenWithClaims';
import { CreateProfileRequest } from '@contracts/schemas/profile/createProfileRequest';
import { userRepo } from '../repo/user.repo';
import { BadRequestError, ConflictError } from '@/err/customErrors';
import { profileRepo } from '../repo/profile.repo';
import { UserProfileResponse } from '@contracts/schemas/profile/UserProfileResponse';
import { ProfileMapper } from '../mapper/profile.mapper';
import { UpdateMyAccountRequest } from '@contracts/schemas/profile/updateMyAccountRequest';
import UserMapper from '../mapper/user.mapper';

class ProfileService {
  async create(token: DecodedIdTokenWithClaims, schema: CreateProfileRequest): Promise<UserProfileResponse> {
    const userId = token.uid;

    const hasProfile = await userRepo.isUserHasProfile(userId);

    if (hasProfile instanceof Error) {
      throw new BadRequestError('User not found');
    }

    if (hasProfile) {
      throw new ConflictError('User already has a profile');
    }

    const profile = await profileRepo.create(userId, schema);

    const userProfileResponse = ProfileMapper.toUserProfileResponse(profile, token);

    return userProfileResponse;
  }

  async updateMyAccount(token: DecodedIdTokenWithClaims, schema: UpdateMyAccountRequest): Promise<UserProfileResponse> {
    const user = await userRepo.getUserByAuthId(token.uid);

    if (!user) {
      throw new BadRequestError('User not found');
    }

    const profile = await userRepo.updateMyAccount(user.id, schema);

    const userProfileResponse = UserMapper.toUserProfileResponse(profile, token.picture || null);

    return userProfileResponse;
  }
}
