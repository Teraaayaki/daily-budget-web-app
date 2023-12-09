import React from "react"
import Stack from "@mui/material/Stack"

import Button from "@/components/parts/Button"
import InputField from "@/components/parts/InputField"
import Logo from "@/components/parts/Logo"

const Form = () => {
  return (
    <Stack className="bg-light-gray justify-center items-center gap-4 w-[550px] rounded-l">
      <Logo />
      <InputField label="Username" placeholder="john_doe" />
      <InputField label="Password" placeholder="••••••••••••" type="password" />
      <Button label="SIGN IN" />
    </Stack>
  )
}

export default Form
