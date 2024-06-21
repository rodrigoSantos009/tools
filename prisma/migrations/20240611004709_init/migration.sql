-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsOnTools" (
    "tagId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,

    CONSTRAINT "TagsOnTools_pkey" PRIMARY KEY ("tagId","toolId")
);

-- AddForeignKey
ALTER TABLE "TagsOnTools" ADD CONSTRAINT "TagsOnTools_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnTools" ADD CONSTRAINT "TagsOnTools_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
