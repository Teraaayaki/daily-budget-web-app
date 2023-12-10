-- CreateEnum
CREATE TYPE "ExpenseCategory" AS ENUM ('FoodAndDining', 'Transportation', 'Utilities', 'Housing', 'Healthcare', 'Education', 'Travel', 'Savings', 'Debt', 'Miscellaneous');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyBudget" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "budget" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "DailyBudget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "dailyBudgetId" TEXT NOT NULL,
    "category" "ExpenseCategory" NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "DailyBudget" ADD CONSTRAINT "DailyBudget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_dailyBudgetId_fkey" FOREIGN KEY ("dailyBudgetId") REFERENCES "DailyBudget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
