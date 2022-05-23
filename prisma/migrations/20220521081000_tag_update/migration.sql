/*
  Warnings:

  - You are about to drop the column `tagsartId` on the `catalogue` table. All the data in the column will be lost.
  - You are about to drop the `tagsart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `catalogueId` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "catalogue" DROP CONSTRAINT "catalogue_tagsartId_fkey";

-- DropForeignKey
ALTER TABLE "tagsart" DROP CONSTRAINT "tagsart_tagId_fkey";

-- AlterTable
ALTER TABLE "catalogue" DROP COLUMN "tagsartId";

-- AlterTable
ALTER TABLE "tag" ADD COLUMN     "catalogueId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "tagsart";

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_catalogueId_fkey" FOREIGN KEY ("catalogueId") REFERENCES "catalogue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
