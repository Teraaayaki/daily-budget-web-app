import API from "../Base/index"

export type Data = {
  username: string
  password: string
}

export type AuthResponseData = {
  message: string
  token: string
}

const AuthApi = {
  signUp: (data: Data) => {
    const options = {
      method: "POST",
      url: "/users/sign-up",
      data,
    }

    return API.request<AuthResponseData>(options)
  },
  signIn: (data: Data) => {
    const options = {
      method: "POST",
      url: "/users/sign-in",
      data,
    }

    return API.request<AuthResponseData>(options)
  },
}

export default AuthApi
