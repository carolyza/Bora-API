/*
  Warnings:

  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessionsart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessionsart" DROP CONSTRAINT "sessionsart_catalogueId_fkey";

-- DropForeignKey
ALTER TABLE "sessionsart" DROP CONSTRAINT "sessionsart_sessionId_fkey";

-- DropTable
DROP TABLE "session";

-- DropTable
DROP TABLE "sessionsart";

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "session" TEXT[],
    "catalogueId" INTEGER NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_catalogueId_fkey" FOREIGN KEY ("catalogueId") REFERENCES "catalogue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
