-- CreateTable
CREATE TABLE "Coach" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "titles" INTEGER NOT NULL DEFAULT 0,
    "experiencie" INTEGER NOT NULL DEFAULT 0,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "nationality" TEXT,
    "tactics" TEXT,
    "preferenceFormation" TEXT
);
