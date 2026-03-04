import { userRepo } from '../repo/user.repo';
import { NotFoundError, PermissionDeniedError } from '@/err/customErrors';
import { Role } from '@/generated/prisma/enums';
import PERMISSION_SCORE from '@contracts/utils/PermissionScore';
import { firebaseUserService } from '@/firebase/service/firebase.user.service';

class UserService {
  async disableUser(userId: string, currentUserRole: Role): Promise<void> {
    const user = await userRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    if (PERMISSION_SCORE[currentUserRole] < PERMISSION_SCORE[user.role]) {
      throw new PermissionDeniedError('You do not have permission to disable this user');
    }

    await firebaseUserService.disableUser(user.authId);
    await userRepo.disableUser(userId);
  }

  async enableUser(userId: string, currentUserRole: Role): Promise<void> {
    const user = await userRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    if (PERMISSION_SCORE[currentUserRole] < PERMISSION_SCORE[user.role]) {
      throw new PermissionDeniedError('You do not have permission to enable this user');
    }

    await firebaseUserService.enableUser(user.authId);
    await userRepo.enableUser(userId);
  }
}

export const userService = new UserService();
