import express from "express"

import {
  validate,
  validationErrors,
} from "../../middleware/validation.middleware"
import { signUp, signIn } from "./user.services"

const router = express.Router()

/**
 * Create a new user with the provided data
 *
 * @route POST /api/users/sign-up
 *
 * @param {Object} req.body - The user data { username: string, password: string }
 * @returns {Object} Returns a success message with the json web token or an error response
 * @throws {Error} Throws an error if there's an issue with the server or if the provided data is invalid
 *
 * @async
 * @function
 * @name signUp
 */
router.post("/sign-up", validate("signUp"), validationErrors, signUp)

/**
 * Sign in user with provided credentials
 *
 * @route POST /api/users/sign-in
 *
 * @param {Object} req.body - The user data { username: string, password: string }
 * @returns {Object} Returns a success message with the json web token or an error response
 * @throws {Error} Throws an error if there's an issue with the server or if the provided data is invalid
 *
 * @async
 * @function
 * @name signIn
 */
router.post("/sign-in", validate("signIn"), validationErrors, signIn)

export default router
