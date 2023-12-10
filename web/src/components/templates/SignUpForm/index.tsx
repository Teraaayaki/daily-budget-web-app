"use client"

import React from "react"
import Stack from "@mui/material/Stack"

import FormSection from "@/components/templates/FormSection"
import VectorDisplay from "@/components/templates/VectorDisplay"

const SignUpForm = () => {
  return (
    <Stack direction="row" className="h-[680px]">
      <FormSection type="signUp" />
      <VectorDisplay />
    </Stack>
  )
}

export default SignUpForm
