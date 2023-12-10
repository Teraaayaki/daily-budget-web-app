import type { GetServerSidePropsContext, Metadata } from "next"

import "./globals.css"
import NavBar from "@/components/templates/NavBar"
import { SnackbarContextProvider } from "@/contexts/SnackbarContext"
import { Snackbar } from "@/components/parts/Snackbar"
import { isAuthenticated } from "@/lib/authentication"

export const metadata: Metadata = {
  title: "Daily Budget",
  description: "A web app that allows you to manage your daily budget.",
}

type RootLayoutProps = { children: React.ReactNode }

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-navy-blue h-full pb-10">
        <SnackbarContextProvider>
          <Snackbar />
          <main className="px-56 h-full">{children}</main>
        </SnackbarContextProvider>
      </body>
    </html>
  )
}

export default RootLayout
