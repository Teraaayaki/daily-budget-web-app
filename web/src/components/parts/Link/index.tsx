import React from "react"
import NextLink from "next/link"

type LinkProps = {
  href: string
  children: React.ReactNode
}

const Link = ({ href, children }: LinkProps) => {
  return <NextLink href={href}>{children}</NextLink>
}

export default Link
