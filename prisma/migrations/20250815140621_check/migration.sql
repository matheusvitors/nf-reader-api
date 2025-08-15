/*
  Warnings:

  - You are about to drop the column `lido` on the `notafiscal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `notafiscal` DROP COLUMN `lido`,
    ADD COLUMN `check` BOOLEAN NOT NULL DEFAULT false;
