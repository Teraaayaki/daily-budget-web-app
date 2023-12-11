import express from "express"

import requireAuth from "../../middleware/requireAuth.middleware"
import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"
import { create, findAll, findOne, remove } from "./daily-budget.services"

const router = express.Router()

/**
 * Gets all the daily budgets of the logged-in user
 *
 * @route GET /api/daily-budgets/
 *
 * @returns {Object} Returns a list of daily budgets
 *
 * @async
 * @function
 * @name findAll
 */
router.get("/", requireAuth, findAll)

/**
 * Gets a specific daily budget
 *
 * @route GET /api/daily-budgets/:id
 *
 * @param {string} req.params.id - The ID of the daily budget to get
 * @returns {Object} Returns retrieved daily budget based on ID
 *
 * @async
 * @function
 * @name findOne
 */
router.get("/:id", requireAuth, findOne)

/**
 * Create a daily budget with the provided data
 *
 * @route POST /api/daily-budgets/
 *
 * @param {Object} req.body - The daily budget data to be created { date: Date, budget: number, notes?: string | null }
 * @returns {Object} Returns a success message or an error response
 * @throws {Error} Throws an error if there's an issue with the server or if the provided data is invalid
 *
 * @async
 * @function
 * @name create
 */
router.post(
  "/",
  requireAuth,
  validate("createDailyBudget"),
  validationErrors,
  create
)

/**
 * Delete a specific daily budget by ID
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
