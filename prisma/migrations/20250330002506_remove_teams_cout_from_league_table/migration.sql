/*
  Warnings:

  - You are about to drop the column `teams_count` on the `League` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_League" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "knockout" BOOLEAN NOT NULL,
    "reputation" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "division_count" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL,
    CONSTRAINT "League_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_League" ("country_id", "division_count", "id", "is_active", "knockout", "name", "reputation") SELECT "country_id", "division_count", "id", "is_active", "knockout", "name", "reputation" FROM "League";
DROP TABLE "League";
ALTER TABLE "new_League" RENAME TO "League";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
