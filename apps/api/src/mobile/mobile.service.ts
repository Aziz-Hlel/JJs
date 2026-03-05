import ENV from '@/config/ENV';
import { VersionPolicyResponse } from '@repo/contracts/schemas/mobile/versionPolicyResponse';

class MobileService {
  async getAppVersion(platform: 'ios' | 'android'): Promise<VersionPolicyResponse> {
    if (platform === 'ios') {
      return { minSupportedVersion: ENV.IOS_MIN_SUPPORTED_VER };
    }
    return { minSupportedVersion: ENV.ANDROID_MIN_SUPPORTED_VER };
  }
}

export const mobileService = new MobileService();
