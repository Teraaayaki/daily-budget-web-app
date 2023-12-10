import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import AuthApi from "@/api/Auth"
import { useRouter } from "next/navigation"
import cookies from "js-cookie"

import {
  defaultSnackbarInfo,
  useSnackbarContext,
} from "@/contexts/SnackbarContext"
import { Categories } from "@/constants/daily-budget"
import DailyBudgetApi from "@/api/DailyBudget"

const schema = yup.object({
  date: yup.date().required().typeError("date is a required field"),
  budget: yup.number().required().typeError("budget is a required field"),
  notes: yup.string().nullable(),
})

export type FormValues = yup.InferType<typeof schema>

export const useHooks = (handleClose: () => void, onSubmit: () => void) => {
  const { setSnackbarInfo } = useSnackbarContext()

  const { control, handleSubmit, clearErrors, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  })

  const handleResetAndClose = () => {
    reset({})
    clearErrors()
    handleClose()
  }

  const submit = async (values: FormValues) => {
    try {
      const {
        data: { message },
      } = await DailyBudgetApi.create(values)

      setSnackbarInfo({
        message,
        open: true,
        severity: "success",
      })
      handleResetAndClose()
      onSubmit()
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
    handleResetAndClose,
    handleSubmit: handleSubmit(submit),
  }
}
