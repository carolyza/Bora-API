/*
  Warnings:

  - You are about to drop the column `tagId` on the `catalogue` table. All the data in the column will be lost.
  - Added the required column `tagsartId` to the `catalogue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "catalogue" DROP CONSTRAINT "catalogue_tagId_fkey";

-- AlterTable
ALTER TABLE "catalogue" DROP COLUMN "tagId",
ADD COLUMN     "tagsartId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "tagsart" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "tagsart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tagsart" ADD CONSTRAINT "tagsart_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_tagsartId_fkey" FOREIGN KEY ("tagsartId") REFERENCES "tagsart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
