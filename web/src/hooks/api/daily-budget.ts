import DailyBudgetApi, {
  DailyBudgetForFindAll,
  DailyBudgetForFindOne,
} from "@/api/DailyBudget"
import { useEffect, useState } from "react"

export const useDailyBudgets = () => {
  const [dailyBudgets, setDailyBudgets] = useState<DailyBudgetForFindAll[]>([])
  const [triggerRefetch, setTriggerRefetch] = useState(false)

  useEffect(() => {
    DailyBudgetApi.findAll().then(({ data }) => {
      setDailyBudgets(data.data || [])
    })
  }, [triggerRefetch])

  const refetch = () => {
    setTriggerRefetch((prev) => !prev)
  }

  return { dailyBudgets, refetch }
}

export const useDailyBudget = (id?: string) => {
  const [dailyBudget, setDailyBudget] = useState<DailyBudgetForFindOne | null>(
    null
  )
  const [triggerRefetch, setTriggerRefetch] = useState(false)

  useEffect(() => {
    if (!id) return

    DailyBudgetApi.findOne(id).then(({ data }) => {
      setDailyBudget(data.data || null)
    })
  }, [triggerRefetch, id])

  const refetch = () => {
    setTriggerRefetch((prev) => !prev)
  }

  return { dailyBudget, refetch }
}
