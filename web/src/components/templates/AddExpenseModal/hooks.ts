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

import DailyBudgetApi from "@/api/DailyBudget"
import ExpenseApi from "@/api/Expense"
import { Categories, Category } from "@/constants/daily-budget"

const schema = yup.object({
  category: yup
    .string()
    .transform((value) => value ?? "")
    .oneOf<Category>(Object.values(Categories))
    .required('category is a required field') as yup.StringSchema<Category>,
  amount: yup.number().required().typeError("amount is a required field"),
  notes: yup.string().nullable(),
})

export type FormValues = yup.InferType<typeof schema>

export const useHooks = (
  handleClose: () => void,
  onSubmit: () => void,
  dailyBudgetId: string
) => {
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
      } = await ExpenseApi.create(dailyBudgetId, values)

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
