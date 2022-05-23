/*
  Warnings:

  - You are about to drop the column `catalogueId` on the `tag` table. All the data in the column will be lost.
  - Added the required column `tagsartId` to the `catalogue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_catalogueId_fkey";

-- AlterTable
ALTER TABLE "catalogue" ADD COLUMN     "tagsartId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tag" DROP COLUMN "catalogueId";

-- CreateTable
CREATE TABLE "tagsart" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "tagsart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TagToTagsArt" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagToTagsArt_AB_unique" ON "_TagToTagsArt"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToTagsArt_B_index" ON "_TagToTagsArt"("B");

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_tagsartId_fkey" FOREIGN KEY ("tagsartId") REFERENCES "tagsart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToTagsArt" ADD CONSTRAINT "_TagToTagsArt_A_fkey" FOREIGN KEY ("A") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToTagsArt" ADD CONSTRAINT "_TagToTagsArt_B_fkey" FOREIGN KEY ("B") REFERENCES "tagsart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
