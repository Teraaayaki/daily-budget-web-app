import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import Button from "@/components/parts/Button"
import InputField from "@/components/parts/InputField"
import Link from "@/components/parts/Link"
import Logo from "@/components/parts/Logo"

import { useHooks } from "./hooks"

export type FormType = "signIn" | "signUp"

type FormProps = {
  type: FormType
}

const Form = ({ type }: FormProps) => {
  const { control, onSubmit, label } = useHooks(type)

  return (
    <Stack className="bg-light-gray justify-center items-center gap-4 w-[550px] rounded-l">
      <Logo />
      <Typography className="mb-4 text-xl font-semibold">{label}</Typography>
      <InputField
        control={control}
        name="username"
        label="Username"
        placeholder="john_doe"
      />
      <InputField
        control={control}
        name="password"
        label="Password"
        type="password"
        placeholder="••••••••••••"
      />
      <Button label={label} onClick={onSubmit} />
      {type === "signIn" ? (
        <Typography className="mt-4">
          No account yet? <Link href="/sign-up">Sign Up</Link>
        </Typography>
      ) : (
        <Typography className="mt-4">
          Already have an account? <Link href="/">Sign In</Link>
        </Typography>
      )}
    </Stack>
  )
}

export default Form
