import React from "react"
import Stack from "@mui/material/Stack"

import FormSection from "@/components/templates/LoginForm/FormSection"
import VectorDisplay from "@/components/templates/LoginForm/VectorDisplay"

const LoginForm = () => {
  return (
    <Stack direction="row" className="h-[680px]">
      <FormSection />
      <VectorDisplay />
    </Stack>
  )
}

export default LoginForm
