import React from "react"
import NextLink from "next/link"

type LinkProps = {
  href: string
  children: React.ReactNode
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <NextLink href={href} className="text-blue-500 underline">
      {children}
    </NextLink>
  )
}

export default Link
