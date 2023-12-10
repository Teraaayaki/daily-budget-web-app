import * as yup from "yup"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import cookies from "js-cookie"

import AuthApi from "@/api/Auth"
import { ACCESS_TOKEN_KEY } from "@/constants/authentication"
import {
  defaultSnackbarInfo,
  useSnackbarContext,
} from "@/contexts/SnackbarContext"

import { FormType } from "."

const schema = yup.object({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required(),
})

export type FormValues = yup.InferType<typeof schema>

export const useHooks = (type: FormType) => {
  const router = useRouter()
  const { setSnackbarInfo } = useSnackbarContext()

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  })

  const submit = async (values: FormValues) => {
    try {
      let token = "",
        message = ""

      switch (type) {
        case "signIn": {
          const {
            data: { token: signInToken, message: signInMessage },
          } = await AuthApi.signIn(values)

          token = signInToken
          message = signInMessage
          break
        }
        case "signUp": {
          const {
            data: { token: signUpToken, message: signUpMessage },
          } = await AuthApi.signUp(values)

          token = signUpToken
          message = signUpMessage
          break
        }
      }

      cookies.set(ACCESS_TOKEN_KEY, token)

      setSnackbarInfo({
        message,
        open: true,
        severity: "success",
      })

      router.push("/daily-budgets")
    } catch (e) {
      setSnackbarInfo({
        severity: "error",
        message: (e as any).response.data.error,
        open: true,
      })
    } finally {
      setTimeout(() => {
        setSnackbarInfo(defaultSnackbarInfo)
      }, 2000)
    }
  }

  return {
    control,
    onSubmit: handleSubmit(submit),
    label: type === "signIn" ? "SIGN IN" : "SIGN UP",
  }
}
