-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT
);
INSERT INTO "new_feedback" ("comment", "id", "screenshot", "type") SELECT "comment", "id", "screenshot", "type" FROM "feedback";
DROP TABLE "feedback";
ALTER TABLE "new_feedback" RENAME TO "feedback";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
