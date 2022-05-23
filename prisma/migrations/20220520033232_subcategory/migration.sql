/*
  Warnings:

  - Added the required column `subcategoryId` to the `catalogue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "catalogue" ADD COLUMN     "subcategoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "subcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subcategory_name_key" ON "subcategory"("name");

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "subcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
