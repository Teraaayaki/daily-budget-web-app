import API from "../Base/index"

export type CreateData = {
  date: Date
  budget: number
  notes?: string | null
}

export type CreateDailyBudgetResponse = {
  message: string
}

export type DailyBudget = {
  id: string
  date: Date
  budget: number
  notes: string | null
  totalExpenses: number
  remainingBudget: number
}

export type FindAllDailyBudgetResponseData = {
  data: DailyBudget[]
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
}

export default DailyBudgetApi
