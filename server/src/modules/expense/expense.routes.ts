import express from "express"

import requireAuth from "../../middleware/requireAuth.middleware"
import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"
import { create, remove } from "./expense.services"

const router = express.Router()

/**
 * Create an expense for a specific daily budget with the provided data.
 *
 * @route POST /api/expense/:dailyBudgetId
 *
 * @param {string} req.params.dailyBudgetId - ID of the daily budget where the expense belongs to
 * @param {Object} req.body - The expense data to be created { category: Category, amount: number, notes?: string | null }
 * @returns {Object} Returns a success message or an error response
 * @throws {Error} Throws an error if there's an issue with the server or if the provided data is invalid
 *
 * @async
 * @function
 * @name create
 */
router.post(
  "/:dailyBudgetId",
  requireAuth,
  validate("createExpense"),
  validationErrors,
  create
)

/**
 * Delete a specific expense by ID
 *
 * @route DELETE /api/daily-budgets/:ID
 *
 * @param {string} req.params.id - ID of the daily budget to be deleted
 * @returns {Object} Returns a success message or an error response
 * @throws {Error} Throws an error if there's an issue with the server or if the provided data is invalid
 *
 * @async
 * @function
 * @name remove
 */
router.delete("/:id", requireAuth, remove)

export default router
