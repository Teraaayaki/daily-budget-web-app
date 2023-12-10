import { Category } from "@/constants/daily-budget"

import API from "../Base/index"

export type CreateData = {
  date: Date
  budget: number
  notes?: string | null
}

export type CreateDailyBudgetResponse = {
  message: string
}

export type Expense = {
  id: string
  notes: string | null
  category: Category
  amount: number
}

export interface DailyBudgetForFindAll {
  id: string
  date: Date
  budget: number
  notes: string | null
  totalExpenses: number
  remainingBudget: number
  expenses: { amount: number }[]
}

export type FindAllDailyBudgetResponseData = {
  data: DailyBudgetForFindAll[]
}

export interface DailyBudgetForFindOne
  extends Omit<DailyBudgetForFindAll, "expenses"> {
  expenses: Expense[]
}

export type FindOneDailyBudgetResponseData = {
  data: DailyBudgetForFindOne
}

const DailyBudgetApi = {
  create: (data: CreateData) => {
    const options = {
      method: "POST",
      url: "/daily-budgets",
      data,
    }

    return API.request(options)
  },
  delete: (id: string) => {
    const options = {
      method: "DELETE",
      url: `/daily-budgets/${id}`,
    }

    return API.request(options)
  },
  findAll: () => {
    const options = {
      method: "GET",
      url: "/daily-budgets",
    }

    return API.request<FindAllDailyBudgetResponseData>(options)
  },
  findOne: (id: string) => {
    const options = {
      method: "GET",
      url: `/daily-budgets/${id}`,
    }

    return API.request<FindOneDailyBudgetResponseData>(options)
  },
}

export default DailyBudgetApi
