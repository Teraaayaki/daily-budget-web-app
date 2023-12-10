import dotenv from "dotenv"
import { Request, Response } from "express"

import { db } from "../../utils/db.server"

dotenv.config()

export const create = async (req: Request, res: Response) => {
  const { date, budget, notes } = req.body
  const { id: userId } = (req as any).user

  const existingBudgetDate = await db.dailyBudget.findFirst({
    where: { date },
    select: { date: true },
  })

  if (existingBudgetDate) {
    const formattedDate = new Date(existingBudgetDate.date).toLocaleDateString(
      "en-US",
      {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }
    )

    return res.status(400).json({
      error: `You have already created a budget for ${formattedDate}`,
    })
  }

  try {
    await db.dailyBudget.create({
      data: { userId, date, budget, notes },
    })

    return res
      .status(201)
      .json({ message: "Successfully added new daily budget." })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    await db.dailyBudget.delete({
      where: { id },
    })

    return res
      .status(200)
      .json({ message: "Successfully deleted daily budget." })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}

export const findAll = async (req: Request, res: Response) => {
  const { id: userId } = (req as any).user

  try {
    const dailyBudgets = await db.dailyBudget.findMany({
      where: { userId },
      select: {
        id: true,
        date: true,
        budget: true,
        notes: true,
        expenses: true,
      },
      orderBy: {
        date: "desc",
      },
    })

    const updatedDailyBudgets = dailyBudgets.map((dailyBudget) => {
      const totalExpenses = dailyBudget.expenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
      )

      // Return a new object with calculated totalExpenses and remainingBudget
      return {
        ...dailyBudget,
        budget: Number(dailyBudget.budget),
        totalExpenses,
        remainingBudget: Number(dailyBudget.budget) - totalExpenses,
      }
    })

    return res.status(200).json({ data: updatedDailyBudgets })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}
