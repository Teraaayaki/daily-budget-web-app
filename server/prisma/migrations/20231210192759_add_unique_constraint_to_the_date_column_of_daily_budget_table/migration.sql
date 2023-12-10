/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `DailyBudget` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DailyBudget_date_key" ON "DailyBudget"("date");
