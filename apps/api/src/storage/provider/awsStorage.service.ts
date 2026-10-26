import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PresignedUrlGenerator } from '@repo/contracts/schemas/storage/PresignedUrl';
import { IStorageProvider } from '../interface/storage.interface';

interface AwsStorageConfig {
  AWS_REGION: string;
  AWS_S3_BUCKET: string;
  AWS_CLOUDFRONT_URL: string;
}

export class AwsStorageService implements IStorageProvider {
  client: S3Client;
  config: AwsStorageConfig;

  constructor(config: AwsStorageConfig) {
    this.config = config;
    this.client = new S3Client({ region: config.AWS_REGION });
  }

  async generatePresignedUrl({ mediaKey: fileKey, mimeType, expiresIn }: PresignedUrlGenerator): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.config.AWS_S3_BUCKET,
      Key: fileKey,
      ContentType: mimeType,
    });

    const signedUrl = await getSignedUrl(this.client, command, { expiresIn });

    return signedUrl;
  }

  getObjectUrl(fileKey: string): string {
    return `https://${this.config.AWS_CLOUDFRONT_URL}/${fileKey}`;
  }
}
