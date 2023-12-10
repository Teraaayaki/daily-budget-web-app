import React from "react"
import { useRouter } from "next/navigation"

import Stack from "@mui/material/Stack"
import Button from "@/components/parts/Button"
import InputField from "@/components/parts/InputField"
import Logo from "@/components/parts/Logo"

const Form = () => {
  const router = useRouter()

  return (
    <Stack className="bg-light-gray justify-center items-center gap-4 w-[550px] rounded-l">
      <Logo />
      <InputField label="Username" placeholder="john_doe" />
      <InputField label="Password" placeholder="••••••••••••" type="password" />
      <Button label="SIGN IN" onClick={() => router.push("/home")} />
    </Stack>
  )
}

export default Form
