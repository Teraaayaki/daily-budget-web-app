import React from "react"
import FormLabel from "@mui/material/FormLabel"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { Control, useController } from "react-hook-form"
import FormControl, { FormControlProps } from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

export type DatePickerFormControlProps = Omit<
  FormControlProps,
  "error" | "disabled"
>

export type InputFieldProps = {
  name: string
  label: string
  error?: string
  control: Control<any>
  formControlProps?: DatePickerFormControlProps
  defaultValue?: Date | null
}

const DatePickerField = ({
  label,
  name,
  control,
  defaultValue = null,
}: InputFieldProps) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({ name, control, defaultValue })

  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker {...rest} inputRef={ref} className="bg-white w-96" />
      </LocalizationProvider>
      {error && (
        <FormHelperText error={!!error.message} className="mx-0">
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default DatePickerField
