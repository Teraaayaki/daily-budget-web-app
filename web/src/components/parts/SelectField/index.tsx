import React from "react"
import { Control, useController } from "react-hook-form"
import FormLabel from "@mui/material/FormLabel"
import FormControl, { FormControlProps } from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select"

export type SelectFieldFormControlProps = Omit<
  FormControlProps,
  "error" | "disabled"
>

export type SelectInputProps = Omit<SelectProps, "error"> & {
  error?: string
  formControlProps?: SelectFieldFormControlProps
}

export type SelectFieldProps = Omit<SelectInputProps, "t"> & {
  name: string
  control: Control<any>
  defaultValue?: string | null
  options: string[]
}

const SelectField = ({
  label,
  placeholder,
  name,
  control,
  defaultValue = "",
  options,
}: SelectFieldProps) => {
  const {
    field: { ref, onChange, value, ...rest },
    fieldState: { error },
  } = useController({ name, control, defaultValue })

  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <Select
        {...rest}
        value={value}
        onChange={(event: SelectChangeEvent) => {
          onChange(event.target.value)
        }}
        inputRef={ref}
        placeholder={placeholder}
        name={name}
        error={!!error}
        className="bg-white w-96"
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText error={!!error.message} className="mx-0 w-[384px]">
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default SelectField
