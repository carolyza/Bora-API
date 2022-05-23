/*
  Warnings:

  - The `date` column on the `session` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hour` column on the `session` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "session" DROP COLUMN "date",
ADD COLUMN     "date" TEXT[],
DROP COLUMN "hour",
ADD COLUMN     "hour" TEXT[];
