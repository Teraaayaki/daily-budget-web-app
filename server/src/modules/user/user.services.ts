import bcrypt from "bcrypt"
import dotenv from "dotenv"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

import { db } from "../../utils/db.server"

dotenv.config()

export const findUser = async (id?: string, username?: string) => {
  const user = await db.user.findFirst({
    where: { id, username },
    select: { id: true, username: true, password: true },
  })

  return user
}

export const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const isExistingUsername = await findUser(undefined, username)

  if (isExistingUsername) {
    return res.status(400).json({
      error: "Username already exists. Please choose a different username.",
    })
  }

  try {
    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
      },
      select: { id: true },
    })

    if (!process.env.ACCESS_TOKEN_SECRET) {
      return res.status(500).json({
        error: "Internal Server Error: Missing required configuration.",
      })
    }

    const token = jwt.sign(
      { user_id: user.id },
      process.env.ACCESS_TOKEN_SECRET
    )

    return res.status(201).json({
      message: "Successfully signed up.",
      token,
    })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}

export const signIn = async (req: Request, res: Response) => {
  const { username, password } = req.body

  try {
    const user = await findUser(undefined, username)

    if (!user) {
      return res.status(422).send({ error: "Invalid username or password." })
    }

    bcrypt.compare(password, user.password, (_, success) => {
      if (success) {
        if (!process.env.ACCESS_TOKEN_SECRET) {
          return res.status(500).json({
            error: "Internal Server Error: Missing required configuration.",
          })
        }

        const token = jwt.sign(
          { user_id: user.id },
          process.env.ACCESS_TOKEN_SECRET
        )

        return res.status(200).json({
          message: "Successfully logged-in.",
          token,
        })
      } else {
        return res.status(422).send({ error: "Invalid username or password." })
      }
    })
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error", e })
  }
}
