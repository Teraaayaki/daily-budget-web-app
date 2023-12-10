import { ACCESS_TOKEN_KEY } from "@/constants/authentication"
import cookies from "js-cookie"

export const isAuthenticated = () => !!cookies.get(ACCESS_TOKEN_KEY)
