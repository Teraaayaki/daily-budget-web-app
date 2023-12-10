import { useDailyBudget, useDailyBudgets } from "@/hooks/api/daily-budget"
import { isAuthenticated } from "@/lib/authentication"
import { formatAmountToCurrency } from "@/lib/amount"
import { GridRowParams } from "@mui/x-data-grid"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { formatDateToMMDDYYYY } from "@/lib/date"
import DailyBudgetApi from "@/api/DailyBudget"
import {
  defaultSnackbarInfo,
  useSnackbarContext,
} from "@/contexts/SnackbarContext"
import ExpenseApi from "@/api/Expense"
import { useReactToPrint } from "react-to-print"

export const useHooks = () => {
  const componentRef = useRef()
  const { replace, push } = useRouter()
  const { setSnackbarInfo } = useSnackbarContext()

  const [openAddDialog, setOpenAddNewDialog] = useState(false)
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false)
  const [idToDelete, setIdToDelete] = useState<string>()
  const [id, setId] = useState(() => window.location.pathname.split("/")[2])

  const { dailyBudget, refetch } = useDailyBudget(id)

  useEffect(() => {
    const dailyBudgetId = window.location.pathname.split("/")[2]
    setId(dailyBudgetId)
  }, [])

  useEffect(() => {
    if (!isAuthenticated()) replace("/")
  }, [])

  const rows = useMemo(() => {
    return dailyBudget?.expenses ?? []
  }, [dailyBudget])

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

  const handleDeleteExpense = async () => {
    if (!idToDelete) return

    try {
      const {
        data: { message },
      } = await ExpenseApi.delete(idToDelete)

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!!,
  })

  return {
    rows,
    openAddDialog,
    addNewDailyBudget,
    closeAddDialog,
    openConfirmationDialog,
    handleOpenConfirmationDialog,
    handleCloseConfirmationDialog,
    handleDeleteExpense,
    refetch,
    dailyBudget,
    componentRef,
    handlePrint,
  }
}
