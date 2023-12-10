import dotenv from "dotenv"
import { Request, Response } from "express"

import { db } from "../../utils/db.server"

dotenv.config()

export const create = async (req: Request, res: Response) => {
  const { category, amount, notes } = req.body
  const dailyBudgetId = req.params.dailyBudgetId

  const dailyBudget = await db.dailyBudget.findFirst({
    where: { id: dailyBudgetId },
  })

  if (!dailyBudget) {
    return res.status(404).json({ error: "Daily budget not found." })
  }

  try {
    await db.expense.create({
      data: { dailyBudgetId, category, amount, notes },
    })

    return res.status(201).json({ message: "Successfully added expense." })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id

  console.log({ id })

  const expense = await db.expense.findFirst({
    where: { id },
  })

  if (!expense) {
    return res.status(404).json({ error: "Expense not found." })
  }

  try {
    await db.expense.delete({
      where: { id },
    })

    return res.status(200).json({ message: "Successfully deleted expense." })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}
