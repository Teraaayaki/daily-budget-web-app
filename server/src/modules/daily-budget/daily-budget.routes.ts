import express from "express"

import requireAuth from "../../middleware/requireAuth.middleware"
import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"
import { create, findAll, findOne, remove } from "./daily-budget.services"

const router = express.Router()

/**
 * Gets all the daily budget of the logged-in user
 */
router.get("/", requireAuth, findAll)

router.get("/:id", requireAuth, findOne)

router.post(
  "/",
  requireAuth,
  validate("createDailyBudget"),
  validationErrors,
  create
)

router.delete("/:id", requireAuth, remove)

export default router
