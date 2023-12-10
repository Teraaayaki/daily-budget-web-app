import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import http from "http"

dotenv.config()

import userRoutes from "./modules/user/user.routes"
import dailyBudgetRoutes from "./modules/daily-budget/daily-budget.routes"
import expenseRoutes from "./modules/expense/expense.routes"

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = Number(process.env.PORT)

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", userRoutes)
app.use("/api/daily-budgets", dailyBudgetRoutes)
app.use("/api/expenses", expenseRoutes)

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
