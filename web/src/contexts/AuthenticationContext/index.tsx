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
import cookies from "js-cookie"
import { ACCESS_TOKEN_KEY } from "@/constants/authentication"

type UserAuthenticationInfo = {
  id: string | undefined
  isAuthenticated: boolean
}

type SnackbarContextValues = {
  userAuthenticationInfo: UserAuthenticationInfo
  setUserAuthenticationInfo: Dispatch<SetStateAction<UserAuthenticationInfo>>
}

const userAuthenticationInfoDefaultValue: UserAuthenticationInfo = {
  id: cookies.get("user_id"),
  isAuthenticated: !!cookies.get(ACCESS_TOKEN_KEY),
}

export const defaultValues: SnackbarContextValues = {
  userAuthenticationInfo: userAuthenticationInfoDefaultValue,
  setUserAuthenticationInfo: () => {},
}

const UserAuthenticationContext =
  createContext<SnackbarContextValues>(defaultValues)

export const SnackbarContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [userAuthenticationInfo, setUserAuthenticationInfo] =
    useState<UserAuthenticationInfo>(userAuthenticationInfoDefaultValue)

  return (
    <UserAuthenticationContext.Provider
      value={{ userAuthenticationInfo, setUserAuthenticationInfo }}
    >
      {children}
    </UserAuthenticationContext.Provider>
  )
}

export const useUserAuthenticationContext = () => {
  const values = useContext(UserAuthenticationContext)

  if (!values) {
    throw new Error(
      "context value for UserAuthenticationContext was not found. You may forget to wrap your component with <UserAuthenticationContext.Provider>"
    )
  }

  return values
}
