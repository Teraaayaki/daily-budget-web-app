import { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator"

type Action = "signIn" | "signUp" | "createDailyBudget" | "createExpense"

export const validate = (action: Action) => {
  switch (action) {
    case "signIn":
    case "signUp": {
      return [
        body("username", "Username is required.").exists(),
        body("password", "Password must be atleast 8 characters.").isLength({
          min: 8,
        }),
      ]
    }
    case "createDailyBudget": {
      return [
        body("date", "Date is required.").exists(),
        body("budget", "Budget is required.").exists().isNumeric(),
      ]
    }
    case "createExpense": {
      return [
        body("category", "Category is required.").exists(),
        body("amount", "Amount is required.").exists().isNumeric(),
      ]
    }
  }
}

export const validationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).send({ error: errors.array()[0].msg })
  }

  next()
}
