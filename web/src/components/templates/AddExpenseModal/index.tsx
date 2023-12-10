import React from "react"
import Stack from "@mui/material/Stack"

import Dialog from "@/components/parts/Dialog"
import InputField from "@/components/parts/InputField"
import SelectField from "@/components/parts/SelectField"
import { Categories } from "@/constants/daily-budget"

import { useHooks } from "./hooks"

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
