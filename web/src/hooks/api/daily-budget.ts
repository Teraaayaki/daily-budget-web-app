import DailyBudgetApi, { DailyBudget } from "@/api/DailyBudget"
import { useEffect, useMemo, useState } from "react"

export const useDailyBudgets = () => {
  const [dailyBudgets, setDailyBudgets] = useState<DailyBudget[]>([])
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
