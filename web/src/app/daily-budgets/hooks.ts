import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { GridRowParams } from "@mui/x-data-grid"

import DailyBudgetApi from "@/api/DailyBudget"
import { useDailyBudgets } from "@/hooks/api/daily-budget"
import {
  defaultSnackbarInfo,
  useSnackbarContext,
} from "@/contexts/SnackbarContext"
import { formatAmountToCurrency } from "@/lib/amount"
import { isAuthenticated } from "@/lib/authentication"
import { formatDateToMMDDYYYY } from "@/lib/date"

export const useHooks = () => {
  const { replace, push } = useRouter()
  const { setSnackbarInfo } = useSnackbarContext()

  const [openAddDialog, setOpenAddNewDialog] = useState(false)
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false)
  const [idToDelete, setIdToDelete] = useState<string>()

  const { dailyBudgets, refetch } = useDailyBudgets()

  useEffect(() => {
    if (!isAuthenticated()) replace("/")
  }, [])

  const rows = useMemo(() => {
    return dailyBudgets.map((dailyBudget) => ({
      ...dailyBudget,
      date: formatDateToMMDDYYYY(dailyBudget.date),
      budget: formatAmountToCurrency(dailyBudget.budget),
      totalExpenses: formatAmountToCurrency(dailyBudget.totalExpenses),
      remainingBudget: formatAmountToCurrency(dailyBudget.remainingBudget),
    }))
  }, [dailyBudgets])

  const addNewDailyBudget = () => setOpenAddNewDialog(true)

  const closeAddDialog = () => setOpenAddNewDialog(false)

  const handleOpenConfirmationDialog = (id: string) => {
    setIdToDelete(id)
    setOpenConfirmationDialog(true)
  }

  const handleCloseConfirmationDialog = () => {
    setIdToDelete(undefined)
    setOpenConfirmationDialog(false)
  }

  const handleRowClick = (params: GridRowParams) => {
    push(`/daily-budgets/${params.row.id}/expenses`)
  }

  const handleDeleteDailyBudget = async () => {
    if (!idToDelete) return

    try {
      const {
        data: { message },
      } = await DailyBudgetApi.delete(idToDelete)

      setSnackbarInfo({
        message,
        open: true,
        severity: "success",
      })

      refetch()
      handleCloseConfirmationDialog()
    } catch (e) {
      setSnackbarInfo({
        severity: "error",
        message: (e as any).response.data.error,
        open: true,
      })
    } finally {
      setTimeout(() => {
        setSnackbarInfo(defaultSnackbarInfo)
      }, 2000)
    }
  }

  return {
    rows,
    openAddDialog,
    addNewDailyBudget,
    closeAddDialog,
    handleRowClick,
    openConfirmationDialog,
    handleOpenConfirmationDialog,
    handleCloseConfirmationDialog,
    handleDeleteDailyBudget,
    refetch,
  }
}
