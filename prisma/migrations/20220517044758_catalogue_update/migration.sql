/*
  Warnings:

  - You are about to drop the column `date` on the `catalogue` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `catalogue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "catalogue" DROP COLUMN "date",
DROP COLUMN "hour";
