import type { Metadata } from "next"

import "./globals.css"
import NavBar from "@/components/templates/NavBar"

export const metadata: Metadata = {
  title: "Daily Budget",
  description: "A web app that allows you to manage your daily budget.",
}

type RootLayoutProps = { children: React.ReactNode }

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-navy-blue h-full pb-10">
        {/* TODO: Only nav bar show when logged-in */}
        <NavBar />
        <main className="px-56 h-full">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
