import React from "react"
import FormLabel from "@mui/material/FormLabel"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"

type InputFieldProps = {
  placeholder?: string
  type?: string
  label: string
}

const InputField = ({ label, placeholder, type = "text" }: InputFieldProps) => {
  return (
    <Stack spacing={1}>
      <FormLabel>{label}</FormLabel>
      <TextField
        placeholder={placeholder}
        type={type}
        className="bg-white w-96"
      />
    </Stack>
  )
}

export default InputField
