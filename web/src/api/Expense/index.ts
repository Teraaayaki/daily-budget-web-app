import { Category } from "@/constants/daily-budget"

import API from "../Base/index"

export type CreateData = {
  category: Category
  amount: number
  notes?: string | null
}

const ExpenseApi = {
  create: (dailyBudgetId: string, data: CreateData) => {
    const options = {
      method: "POST",
      url: `/expenses/${dailyBudgetId}`,
      data,
    }

    return API.request(options)
  },
  delete: (id: string) => {
    const options = {
      method: "DELETE",
      url: `/expenses/${id}`,
    }

    return API.request(options)
  },
}

export default ExpenseApi
