"use client"

import React from "react"
import Stack from "@mui/material/Stack"

import FormSection from "@/components/templates/FormSection"
import VectorDisplay from "@/components/templates/VectorDisplay"

const SignInForm = () => {
  return (
    <Stack direction="row" className="h-[680px]">
      <FormSection type="signIn" />
      <VectorDisplay />
    </Stack>
  )
}

export default SignInForm
