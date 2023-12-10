-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_dailyBudgetId_fkey";

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_dailyBudgetId_fkey" FOREIGN KEY ("dailyBudgetId") REFERENCES "DailyBudget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
