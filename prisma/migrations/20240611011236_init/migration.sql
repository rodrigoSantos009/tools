/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnTools` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnTools" DROP CONSTRAINT "TagsOnTools_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnTools" DROP CONSTRAINT "TagsOnTools_toolId_fkey";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TagsOnTools";
