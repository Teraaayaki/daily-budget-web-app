import { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator"

type Action = "signIn" | "signUp"

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
