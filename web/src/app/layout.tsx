import type { Metadata } from "next"

import { Snackbar } from "@/components/parts/Snackbar"
import { SnackbarContextProvider } from "@/contexts/SnackbarContext"

import "./globals.css"

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
