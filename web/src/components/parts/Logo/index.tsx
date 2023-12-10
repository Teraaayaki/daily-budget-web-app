import React from "react"
import Typography from "@mui/material/Typography"

type LogoProps = {
  size?: "sm" | "md" | "lg"
  customStyle?: string
}

const sizes = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-6xl",
}

const Logo = ({ size = "lg", customStyle }: LogoProps) => {
  return (
    <Typography className={`${sizes[size]} font-black mb-3 ${customStyle}`}>
      BudgEase
    </Typography>
  )
}

export default Logo
