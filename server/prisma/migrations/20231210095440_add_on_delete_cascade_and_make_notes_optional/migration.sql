-- DropForeignKey
ALTER TABLE "DailyBudget" DROP CONSTRAINT "DailyBudget_userId_fkey";

-- AlterTable
ALTER TABLE "DailyBudget" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "notes" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "DailyBudget" ADD CONSTRAINT "DailyBudget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
