import React from "react"
import Stack from "@mui/material/Stack"

import DatePickerField from "@/components/parts/DatePickerField"
import Dialog from "@/components/parts/Dialog"
import InputField from "@/components/parts/InputField"

import { useHooks } from "./hooks"

type AddNewDailyBudgetModalProps = {
  open: boolean
  handleClose: () => void
  onSubmit: () => void
}

const AddNewDailyBudgetModal = ({
  open,
  handleClose,
  onSubmit,
}: AddNewDailyBudgetModalProps) => {
  const { control, handleSubmit, handleResetAndClose } = useHooks(
    handleClose,
    onSubmit
  )

  return (
    <Dialog
      title="Add New Daily Budget"
      open={open}
      handleClose={handleResetAndClose}
      handleSubmit={handleSubmit}
    >
      <Stack className="justify-center items-center gap-4 rounded-l p-2">
        <DatePickerField control={control} name="date" label="Date" />
        <InputField
          control={control}
          name="budget"
          label="Budget"
          type="number"
        />
        <InputField control={control} name="notes" label="Notes" />
      </Stack>
    </Dialog>
  )
}

export default AddNewDailyBudgetModal
