"use client"

import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import PrintIcon from "@mui/icons-material/Print"

import Dialog from "@/components/parts/Dialog"
import AddExpenseModal from "@/components/templates/AddExpenseModal"
import AuthenticatedLayout from "@/components/templates/AuthenticatedLayout"

import { useHooks } from "./hooks"
import DailyBudgetDetails from "./DailyBudgetDetails"

const ExpenseListPage = () => {
  const {
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
  } = useHooks()

  if (!dailyBudget) return null

  return (
    <AuthenticatedLayout
      title="Daily Budget Details"
      addBtnLabel="Add Expense"
      onClickAddBtn={addNewDailyBudget}
      showBackBtn
    >
      <Stack direction={"row"} ml="auto" mt={2}>
        <IconButton onClick={handlePrint}>
          <Typography fontSize={16} className="text-blue-500">
            PRINT
          </Typography>
          <PrintIcon className="text-blue-500" />
        </IconButton>
      </Stack>
      <DailyBudgetDetails
        ref={componentRef}
        dailyBudget={dailyBudget}
        rows={rows}
        handleOpenConfirmationDialog={handleOpenConfirmationDialog}
      />
      <AddExpenseModal
        open={openAddDialog}
        handleClose={closeAddDialog}
        onSubmit={refetch}
        dailyBudgetId={dailyBudget.id}
      />
      <Dialog
        title="Confirm Deletion"
        open={openConfirmationDialog}
        handleClose={handleCloseConfirmationDialog}
        handleSubmit={handleDeleteExpense}
      >
        Are you sure you want to delete this expense?
      </Dialog>
    </AuthenticatedLayout>
  )
}

export default ExpenseListPage
