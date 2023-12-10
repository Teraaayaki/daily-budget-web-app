"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { isAuthenticated } from "@/lib/authentication"
import SignInForm from "@/components/templates/SignInForm"

export const SignInPage = () => {
  const { replace } = useRouter()

  useEffect(() => {
    if (isAuthenticated()) replace("/daily-budgets")
  }, [])

  return (
    <main className="py-40">
      <SignInForm />
    </main>
  )
}

export default SignInPage
