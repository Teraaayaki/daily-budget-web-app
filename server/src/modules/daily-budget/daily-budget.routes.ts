import express from "express"

import requireAuth from "../../middleware/requireAuth.middleware"
import { create, findAll, findOne, remove } from "./daily-budget.services"
import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"

const router = express.Router()

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
