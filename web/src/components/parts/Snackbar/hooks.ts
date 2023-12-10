import {
  defaultSnackbarInfo,
  useSnackbarContext,
} from "@/contexts/SnackbarContext"

export const useHooks = () => {
  const { snackbarInfo, setSnackbarInfo } = useSnackbarContext()

  const onClose = () => {
    setSnackbarInfo(defaultSnackbarInfo)
  }

  return { snackbarInfo, onClose }
}
