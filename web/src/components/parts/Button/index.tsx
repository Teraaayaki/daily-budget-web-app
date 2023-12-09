import React from "react"
import MUIButton from "@mui/material/Button"

type ButtonProps = {
  label: string
}

const Button = ({ label }: ButtonProps) => {
  return (
    <MUIButton className="w-96 h-[56px] bg-navy-blue hover:bg-deep-blue text-white">
      {label}
    </MUIButton>
  )
}

export default Button
