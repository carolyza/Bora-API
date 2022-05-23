/*
  Warnings:

  - You are about to drop the column `session` on the `sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "session";

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SessionToSessions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SessionToSessions_AB_unique" ON "_SessionToSessions"("A", "B");

-- CreateIndex
CREATE INDEX "_SessionToSessions_B_index" ON "_SessionToSessions"("B");

-- AddForeignKey
ALTER TABLE "_SessionToSessions" ADD CONSTRAINT "_SessionToSessions_A_fkey" FOREIGN KEY ("A") REFERENCES "session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SessionToSessions" ADD CONSTRAINT "_SessionToSessions_B_fkey" FOREIGN KEY ("B") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
