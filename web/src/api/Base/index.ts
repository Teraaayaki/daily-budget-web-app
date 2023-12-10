import { ACCESS_TOKEN_KEY } from "@/constants/authentication"
import axios from "axios"
import cookies from "js-cookie"

const TOKEN = cookies.get(ACCESS_TOKEN_KEY)

const API = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
})

export default API
