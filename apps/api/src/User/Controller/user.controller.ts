import { Response } from 'express';
import { AuthenticatedRequest } from '../../types/auth/AuthenticatedRequest';
import { userService } from '../Service/user.service';
import { SimpleApiResponse } from '@contracts/types/api/SimpleApiResponse.dto';

class UserController {
  async enableUser(req: AuthenticatedRequest, res: Response<SimpleApiResponse>) {
    const userId = req.params.id;
    const userRole = req.user.claims?.role;

    await userService.enableUser(userId, userRole);

    res.status(200).send({ message: 'User enabled successfully' });
  }

  async disableUser(req: AuthenticatedRequest, res: Response<SimpleApiResponse>) {
    const userId = req.params.id;
    const userRole = req.user.claims?.role;

    await userService.disableUser(userId, userRole);

    res.status(200).send({ message: 'User disabled successfully' });
  }
}

export const userController = new UserController();
