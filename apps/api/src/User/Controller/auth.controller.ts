import { Request, Response } from 'express';
import { authService as authService } from '../Service/auth.service';
import { AuthenticatedRequest } from '../../types/auth/AuthenticatedRequest';
import { CreateUserSchema } from '@contracts/schemas/user/CreateUserDto';
import { RegisterUserNoProviderSchema } from '@contracts/schemas/user/RegisterUserNoProvider';
import { CreateUserWithProviderSchema } from '@contracts/schemas/user/CreateUserWithProviderRequest';

class AuthController {
  async register(req: Request, res: Response) {
    const schema = RegisterUserNoProviderSchema.parse(req.body);

    const user = await authService.registerUser(schema);

    res.status(201).json(user);
  }

  async loginWithPassword(req: Request, res: Response) {
    const { idToken } = CreateUserSchema.parse(req.body);

    const user = await authService.authenticateWithPassword(idToken);
    res.status(200).json(user);
  }

  async authenticateWithProvider(req: Request, res: Response) {
    const { idToken, username } = CreateUserWithProviderSchema.parse(req.body);
    const user = await authService.authenticateWithProvider(idToken, username);

    res.status(200).json(user);
  }

  async me(req: AuthenticatedRequest, res: Response) {
    const idToken = req.user;

    const user = await authService.me(idToken);

    res.status(200).json(user);
  }
}


export const authController = new AuthController();