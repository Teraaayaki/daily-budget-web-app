import React from "react"
import FormLabel from "@mui/material/FormLabel"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { Control, useController } from "react-hook-form"
import FormControl, { FormControlProps } from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"

export type TextInputFormControlProps = Omit<
  FormControlProps,
  "error" | "disabled"
>

export type TextInputProps = Omit<TextFieldProps, "error"> & {
  error?: string
  formControlProps?: TextInputFormControlProps
}

export type InputFieldProps = Omit<TextInputProps, "t"> & {
  name: string
  control: Control<any>
  defaultValue?: string | null
}

const InputField = ({
  label,
  placeholder,
  name,
  control,
  defaultValue = "",
  type = "text",
}: InputFieldProps) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({ name, control, defaultValue })

  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <TextField
        {...rest}
        inputRef={ref}
        placeholder={placeholder}
        type={type}
        name={name}
        error={!!error}
        className="bg-white w-96"
      />
      {error && (
        <FormHelperText error={!!error.message} className="mx-0">
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default InputField
