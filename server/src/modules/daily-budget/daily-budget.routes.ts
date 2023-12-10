import express from "express"

import requireAuth from "../../middleware/requireAuth.middleware"
import { findAll } from "./daily-budget.services"

const router = express.Router()

router.get("/", requireAuth, findAll)

export default router
