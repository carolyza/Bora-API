-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessionsart" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "catalogueId" INTEGER NOT NULL,

    CONSTRAINT "sessionsart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sessionsart" ADD CONSTRAINT "sessionsart_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessionsart" ADD CONSTRAINT "sessionsart_catalogueId_fkey" FOREIGN KEY ("catalogueId") REFERENCES "catalogue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
