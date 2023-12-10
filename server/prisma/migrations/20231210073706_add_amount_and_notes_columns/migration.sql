/*
  Warnings:

  - Added the required column `notes` to the `DailyBudget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DailyBudget" ADD COLUMN     "notes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL;
