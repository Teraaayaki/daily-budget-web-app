import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Daily Budget",
  description: "A web app that allows you to manage your daily budget.",
}

type RooyLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RooyLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
