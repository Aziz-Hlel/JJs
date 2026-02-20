-- CreateTable
CREATE TABLE "Entertainment" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "date" VARCHAR(100) NOT NULL,
    "thumbnailId" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entertainment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entertainment_thumbnailId_key" ON "Entertainment"("thumbnailId");

-- CreateIndex
CREATE INDEX "Entertainment_isFeatured_idx" ON "Entertainment"("isFeatured");

-- AddForeignKey
ALTER TABLE "Entertainment" ADD CONSTRAINT "Entertainment_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
