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

type AddNewDailyBudgetModalProps = {
  open: boolean
  handleClose: () => void
  onSubmit: () => void
}

const AddNewDailyBudgetModal = ({
  open,
  handleClose,
  onSubmit
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
        {/* <SelectField
          control={control}
          name="category"
          label="Category"
          options={categoryOptions}
        /> */}
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
