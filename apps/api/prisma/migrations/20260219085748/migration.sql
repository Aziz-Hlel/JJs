/*
  Warnings:

  - The values [ADJUSTMENT] on the enum `PointsTransactionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `offerName` on the `TransactionHistory` table. All the data in the column will be lost.
  - You are about to drop the column `offerPrice` on the `TransactionHistory` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PointsTransactionType_new" AS ENUM ('EARN', 'REDEEM');
ALTER TABLE "TransactionHistory" ALTER COLUMN "type" TYPE "PointsTransactionType_new" USING ("type"::text::"PointsTransactionType_new");
ALTER TYPE "PointsTransactionType" RENAME TO "PointsTransactionType_old";
ALTER TYPE "PointsTransactionType_new" RENAME TO "PointsTransactionType";
DROP TYPE "public"."PointsTransactionType_old";
COMMIT;

-- AlterTable
ALTER TABLE "TransactionHistory" DROP COLUMN "offerName",
DROP COLUMN "offerPrice",
ADD COLUMN     "metadata" JSONB;
