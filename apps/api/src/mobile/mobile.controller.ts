import { Request, Response } from 'express';
import { VersionPolicyResponse } from '@contracts/schemas/mobile/versionPolicyResponse';
import { mobileService } from './mobile.service';

class MobileController {
  async getAndroidVersion(_: Request, res: Response<VersionPolicyResponse>) {
    const version = await mobileService.getAppVersion('android');
    res.status(200).json(version);
  }

  async getIosVersion(_: Request, res: Response<VersionPolicyResponse>) {
    const version = await mobileService.getAppVersion('ios');
    res.status(200).json(version);
  }
}

export const mobileController = new MobileController();
