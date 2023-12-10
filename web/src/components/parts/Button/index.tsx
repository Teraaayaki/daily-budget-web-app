import React from "react"
import MUIButton from "@mui/material/Button"

type ButtonProps = {
  label: string
  onClick: () => void
  customStyle?: string
}

const Button = ({ label, onClick, customStyle }: ButtonProps) => {
  return (
    <MUIButton
      onClick={onClick}
      className={`w-96 h-[56px] bg-navy-blue hover:bg-deep-blue text-white ${customStyle}`}
    >
      {label}
    </MUIButton>
  )
}

export default Button
