/*
  Warnings:

  - Changed the type of `size` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('little', 'medium', 'big');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "size",
ADD COLUMN     "size" "Size" NOT NULL;