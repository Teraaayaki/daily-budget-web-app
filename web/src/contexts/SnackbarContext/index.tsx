"use client"

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react"

type SnackbarProps = {
  severity?: "success" | "error"
  message?: string
  open: boolean
}

type SnackbarContextValues = {
  snackbarInfo: SnackbarProps
  setSnackbarInfo: Dispatch<SetStateAction<SnackbarProps>>
}

export const defaultSnackbarInfo: SnackbarProps = {
  severity: undefined,
  message: "",
  open: false,
}

const SnackbarContext = createContext<SnackbarContextValues>({
  snackbarInfo: defaultSnackbarInfo,
  setSnackbarInfo: () => {},
})

export const SnackbarContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [snackbarInfo, setSnackbarInfo] =
    useState<SnackbarProps>(defaultSnackbarInfo)

  return (
    <SnackbarContext.Provider value={{ snackbarInfo, setSnackbarInfo }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export const useSnackbarContext = () => {
  const values = useContext(SnackbarContext)

  if (!values) {
    throw new Error(
      "context value for SnackbarContext was not found. You may forget to wrap your component with <SnackbarContext.Provider>"
    )
  }

  return values
}
