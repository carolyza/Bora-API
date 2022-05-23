/*
  Warnings:

  - You are about to drop the `_SessionToSessions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sessionId` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_SessionToSessions" DROP CONSTRAINT "_SessionToSessions_A_fkey";

-- DropForeignKey
ALTER TABLE "_SessionToSessions" DROP CONSTRAINT "_SessionToSessions_B_fkey";

-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "sessionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_SessionToSessions";

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
