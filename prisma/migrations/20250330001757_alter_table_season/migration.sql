-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Season" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "winner" TEXT,
    "cup_id" INTEGER,
    "league_id" INTEGER,
    CONSTRAINT "Season_cup_id_fkey" FOREIGN KEY ("cup_id") REFERENCES "Cup" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Season_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "League" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Season" ("cup_id", "id", "is_active", "league_id", "winner", "year") SELECT "cup_id", "id", "is_active", "league_id", "winner", "year" FROM "Season";
DROP TABLE "Season";
ALTER TABLE "new_Season" RENAME TO "Season";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
