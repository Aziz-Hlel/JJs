import { Response } from 'express';
import { AuthenticatedRequest } from '../../types/auth/AuthenticatedRequest';
import { profileService } from '../Service/profile.service';
import { UserProfileRowResponse } from '@contracts/schemas/user/UserRowResponse';
import { queryParamsSchema } from '@contracts/schemas/user/UserPageQuery';
import { createUserProfileRequestSchema } from '@contracts/schemas/profile/createUserProfileRequest';
import { UserProfileResponse } from '@contracts/schemas/profile/UserProfileResponse';
import PERMISSION_SCORE from '@contracts/utils/PermissionScore';
import { BadRequestError, PermissionDeniedError } from '@/err/customErrors';
import { SimpleApiResponse } from '@contracts/types/api/SimpleApiResponse.dto';
import { updateUserProfileRequestSchema } from '@contracts/schemas/profile/updateUserProfileRequest';
import { Page } from '@contracts/types/page/Page';
import { updateMyAccountRequestSchema } from '@contracts/schemas/profile/updateMyAccountRequest';
import getParam from '../utils/getParam';

class ProfileController {
  async getUserPage(req: AuthenticatedRequest, res: Response<Page<UserProfileRowResponse>>) {
    const parsedQuery = queryParamsSchema.parse(req.query);

    const response = await profileService.getUserPage(parsedQuery);
    res.json(response);
  }

  async createUserProfile(req: AuthenticatedRequest, res: Response<UserProfileResponse>) {
    const parsedBody = createUserProfileRequestSchema.parse(req.body);

    const userRole = req.user.claims?.role;
    if (PERMISSION_SCORE[userRole] < PERMISSION_SCORE[parsedBody.role]) {
      throw new PermissionDeniedError(`Insufficient permissions to create a user with role ${parsedBody.role}`);
    }
    const response = await profileService.createUserProfile(parsedBody);
    res.status(201).json(response);
  }

  async updateUserProfile(req: AuthenticatedRequest, res: Response<UserProfileResponse>) {
    const userId = getParam(req, 'id');
    const parsedBody = updateUserProfileRequestSchema.parse(req.body);

    const userRole = req.user.claims?.role;
    if (PERMISSION_SCORE[userRole] < PERMISSION_SCORE[parsedBody.role]) {
      throw new PermissionDeniedError(`Insufficient permissions to update a user with role ${parsedBody.role}`);
    }

    const response = await profileService.updateUserProfile(userId, parsedBody, userRole);
    res.status(200).json(response);
  }

  async deleteUserProfile(req: AuthenticatedRequest, res: Response<SimpleApiResponse>) {
    const userToDeleteId = getParam(req, 'id');

    const userRole = req.user.claims.role;

    await profileService.deleteUser(userToDeleteId, userRole);

    res.status(204).send({ message: 'User deleted successfully' });
  }

  async updateMyAccount(req: AuthenticatedRequest, res: Response<UserProfileResponse>) {
    const parsedBody = updateMyAccountRequestSchema.parse(req.body);

    const response = await profileService.updateMyAccount(parsedBody, req.user);
    res.status(200).json(response);
  }

  async deleteMyAccount(req: AuthenticatedRequest, res: Response<SimpleApiResponse>) {
    await profileService.deleteMyAccount(req.user);
    res.status(204).send({ message: 'User deleted successfully' });
  }
}

export const profileController = new ProfileController();
