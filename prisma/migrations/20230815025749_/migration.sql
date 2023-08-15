/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Employee_name_key";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "codigo" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_codigo_key" ON "Employee"("codigo");
