import dotenv from "dotenv"
import { Request, Response } from "express"

import { db } from "../../utils/db.server"

dotenv.config()

export const findAll = (req: Request, res: Response) => {
  const { id: userId } = (req as any).user

  try {
    const dailyBudgets = db.dailyBudget.findMany({
      where: { userId },
      select: {
        date: true,
        budget: true,
        notes: true,
        expenses: true,
      },
    })

    return res.status(200).json({ data: dailyBudgets })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
