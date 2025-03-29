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
CREATE TABLE "Season" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL DEFAULT 30,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Championship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "teams_count" INTEGER NOT NULL,
    "logo" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "relevance" INTEGER,
    "season_id" INTEGER,
    CONSTRAINT "Championship_season_id_fkey" FOREIGN KEY ("season_id") REFERENCES "Season" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Division" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ChampionshipTeam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "championship_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    CONSTRAINT "ChampionshipTeam_championship_id_fkey" FOREIGN KEY ("championship_id") REFERENCES "Championship" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChampionshipTeam_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "_ChampionshipDivisions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ChampionshipDivisions_A_fkey" FOREIGN KEY ("A") REFERENCES "Championship" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ChampionshipDivisions_B_fkey" FOREIGN KEY ("B") REFERENCES "Division" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Division_level_key" ON "Division"("level");

-- CreateIndex
CREATE UNIQUE INDEX "_ChampionshipDivisions_AB_unique" ON "_ChampionshipDivisions"("A", "B");

-- CreateIndex
CREATE INDEX "_ChampionshipDivisions_B_index" ON "_ChampionshipDivisions"("B");
