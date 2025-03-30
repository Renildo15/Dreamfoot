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

-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "continent" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teams_count" INTEGER NOT NULL,
    "reputation" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_group_stage" BOOLEAN NOT NULL,
    "logo_cup" TEXT,
    "groups_count" INTEGER NOT NULL,
    "image_trophy" TEXT,
    "award" REAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    CONSTRAINT "Cup_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teams_count" INTEGER NOT NULL,
    "cup_id" INTEGER NOT NULL,
    CONSTRAINT "Group_cup_id_fkey" FOREIGN KEY ("cup_id") REFERENCES "Cup" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "League" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teams_count" INTEGER NOT NULL,
    "knockout" BOOLEAN NOT NULL,
    "reputation" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "division_count" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL,
    CONSTRAINT "League_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Division" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teams_count" INTEGER NOT NULL,
    "division_logo" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "image_trophy" TEXT,
    "division_order" INTEGER NOT NULL,
    "award" REAL NOT NULL,
    "league_id" INTEGER NOT NULL,
    CONSTRAINT "Division_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "League" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Season" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "winner" TEXT,
    "cup_id" INTEGER NOT NULL,
    "league_id" INTEGER NOT NULL,
    CONSTRAINT "Season_cup_id_fkey" FOREIGN KEY ("cup_id") REFERENCES "Cup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Season_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "League" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
