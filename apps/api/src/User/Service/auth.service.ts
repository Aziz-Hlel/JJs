import { firebaseAuthService } from '../../firebase/service/firebase.auth.service';
import UserMapper from '../mapper/user.mapper';
import { InternalServerError } from '../../err/customErrors';
import { DecodedIdTokenWithClaims } from '../../types/auth/DecodedIdTokenWithClaims';
import { userRepo } from '../repo/user.repo';
import { UserProfileResponse } from '@contracts/schemas/profile/UserProfileResponse';
import { generateUserReferenceCode } from '../utils/generateUserReferenceCode';
import { type RegisterUserNoProviderDto } from '@contracts/schemas/user/RegisterUserNoProvider';

class AuthService {
  private firebaseService = firebaseAuthService;

  async registerUser(schema: RegisterUserNoProviderDto): Promise<UserProfileResponse> {
    const decodedToken = await this.firebaseService.verifyToken(schema.idToken);

    let email = decodedToken.email as string;

    const isEmailExist = await userRepo.isUserEmailExists(email);

    if (isEmailExist)
      throw new InternalServerError(
        `New User registered with auth Provider but account email already exists in the system. 
        authId: ${decodedToken.uid}, email: ${email}`,
      );

    const referenceCode = generateUserReferenceCode();
    const userToCreate = UserMapper.toUserCreateInputWithFullName(decodedToken, referenceCode, schema.username);
    const newUser = await userRepo.createUser(userToCreate);

    await this.firebaseService.setCustomUserClaims({
      userId: newUser.id,
      userAuthId: newUser.authId,
      userRole: newUser.role,
    });

    const userWithNoProfile = { ...newUser, profile: null };

    return UserMapper.toUserProfileResponse(userWithNoProfile, decodedToken.picture || null);
  }

  async authenticateWithPassword(tokenId: string): Promise<UserProfileResponse> {
    const decodedToken = await this.firebaseService.verifyToken(tokenId);

    const userAuthId = decodedToken.uid;

    const user = await userRepo.getUserByAuthId(userAuthId);

    if (!user) {
      throw new InternalServerError(`User with authId ${userAuthId} does not exist in the system.`);
    }

    return UserMapper.toUserProfileResponse(user, decodedToken.picture || null);
  }

  async authenticateWithProvider(tokenId: string): Promise<UserProfileResponse> {
    const decodedToken = await this.firebaseService.verifyToken(tokenId);

    const userAuthId = decodedToken.uid;
    let user = await userRepo.getUserByAuthId(userAuthId);

    if (!user) {
      const referenceCode = generateUserReferenceCode();
      const userToCreate = UserMapper.toUserCreateInput(decodedToken, referenceCode);
      user = await userRepo.createUser(userToCreate);
      await this.firebaseService.setCustomUserClaims({
        userId: user.id,
        userAuthId: user.authId,
        userRole: user.role,
      });
    }

    return UserMapper.toUserProfileResponse(user, decodedToken.picture || null);
  }

  async me(decodedToken: DecodedIdTokenWithClaims): Promise<UserProfileResponse> {
    const userAuthId = decodedToken.uid;

    const user = await userRepo.getUserByAuthId(userAuthId);

    if (!user) {
      throw new InternalServerError(
        `User with authId ${userAuthId} registered in auth provider but does not exist in the system.`,
      );
    }
    const isValidClaims = this.firebaseService.validateCustomClaims(user, decodedToken);
    if (!isValidClaims) {
      await this.firebaseService.setCustomUserClaims({
        userId: user.id,
        userAuthId: user.authId,
        userRole: user.role,
      });
    }
    return UserMapper.toUserProfileResponse(user, decodedToken.picture || null);
  }
}

export const authService = new AuthService();
