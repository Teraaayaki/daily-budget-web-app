import React from "react"

import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Dialog from "@/components/parts/Dialog"
import { Stack } from "@mui/material"
import InputField from "@/components/parts/InputField"
import { useHooks } from "./hooks"
import Button from "@/components/parts/Button"
import SelectField from "@/components/parts/SelectField"
import DatePickerField from "@/components/parts/DatePickerField"
import { Categories } from "@/constants/daily-budget"

type AddExpenseModalModalProps = {
  open: boolean
  handleClose: () => void
  onSubmit: () => void
  dailyBudgetId: string
}

const AddExpenseModal = ({
  open,
  handleClose,
  onSubmit,
  dailyBudgetId,
}: AddExpenseModalModalProps) => {
  const { control, handleSubmit, handleResetAndClose } = useHooks(
    handleClose,
    onSubmit,
    dailyBudgetId
  )

  return (
    <Dialog
      title="Add Expense"
      open={open}
      handleClose={handleResetAndClose}
      handleSubmit={handleSubmit}
    >
      <Stack className="justify-center items-center gap-4 rounded-l p-2">
        <SelectField
          control={control}
          name="category"
          label="Category"
          options={Object.keys(Categories)}
        />
        <InputField
          control={control}
          name="amount"
          label="Amount"
          type="number"
        />
        <InputField control={control} name="notes" label="Notes" />
      </Stack>
    </Dialog>
  )
}

export default AddExpenseModal
