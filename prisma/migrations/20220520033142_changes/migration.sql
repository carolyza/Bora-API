/*
  Warnings:

  - You are about to drop the column `subcategoryId` on the `catalogue` table. All the data in the column will be lost.
  - You are about to drop the `subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "catalogue" DROP CONSTRAINT "catalogue_subcategoryId_fkey";

-- AlterTable
ALTER TABLE "catalogue" DROP COLUMN "subcategoryId";

-- DropTable
DROP TABLE "subcategory";
