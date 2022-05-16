-- CreateTable
CREATE TABLE "classification" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "classification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "state" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statecity" (
    "id" SERIAL NOT NULL,
    "stateId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "statecity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalogue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "statecityId" INTEGER NOT NULL,
    "sinopse" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "classificationId" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "catalogue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "classification_name_key" ON "classification"("name");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "city_name_key" ON "city"("name");

-- CreateIndex
CREATE UNIQUE INDEX "state_name_key" ON "state"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "tag"("name");

-- AddForeignKey
ALTER TABLE "statecity" ADD CONSTRAINT "statecity_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statecity" ADD CONSTRAINT "statecity_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "classification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalogue" ADD CONSTRAINT "catalogue_statecityId_fkey" FOREIGN KEY ("statecityId") REFERENCES "statecity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
