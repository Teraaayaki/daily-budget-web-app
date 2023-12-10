import express from "express"

import requireAuth from "../../middleware/requireAuth.middleware"
import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"
import { create, remove } from "./expense.services"


const router = express.Router()

router.post(
  "/:dailyBudgetId",
  requireAuth,
  validate("createExpense"),
  validationErrors,
  create
)

router.delete("/:id", requireAuth, remove)

export default router
