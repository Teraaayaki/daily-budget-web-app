import cookies from "js-cookie"

import { ACCESS_TOKEN_KEY } from "@/constants/authentication"

export const isAuthenticated = () => !!cookies.get(ACCESS_TOKEN_KEY)
