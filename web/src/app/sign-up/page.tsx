"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated } from "@/lib/authentication"
import SignUpForm from "@/components/templates/SignUpForm"

export const SignInPage = () => {
  const { replace } = useRouter()

  useEffect(() => {
    if (isAuthenticated()) replace("/daily-budgets")
  }, [])

  return (
    <main className="py-40">
      <SignUpForm />
    </main>
  )
}

export default SignInPage
