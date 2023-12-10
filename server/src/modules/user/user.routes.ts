import express from "express"

import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"
import { signUp, signIn } from "./user.services"

const router = express.Router()

router.post("/sign-up", validate("signUp"), validationErrors, signUp)
router.post("/sign-in", validate("signIn"), validationErrors, signIn)

export default router
