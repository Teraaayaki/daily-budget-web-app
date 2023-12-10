
import dotenv from "dotenv"
import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

import { findUser } from "../modules/user/user.services"

dotenv.config()

export default (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header("Authorization")
  const token = authorization?.replace("Bearer ", "")

  if (!authorization || !token) {
    return res.status(401).send({
      error: "You must be logged in to access this resource.",
    })
  }

  if (!process.env.ACCESS_TOKEN_SECRET) {
    return res
      .status(500)
      .json({ error: "Internal Server Error: Missing required configuration." })
  }

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    undefined,
    async (err: any, payload: string | JwtPayload | undefined) => {
      if (err) {
        return res.status(401).send({
          error: "You must be logged in to access this resource.",
        })
      }

      if (!payload) {
        return res.status(401).send({
          error: "Invalid token payload.",
        })
      }

      const { user_id } = payload as JwtPayload

      const user = await findUser(user_id)

      ;(req as any).user = user
      next()
    }
  )
}
