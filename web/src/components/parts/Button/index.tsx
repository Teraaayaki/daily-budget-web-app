import React from "react"
import MUIButton from "@mui/material/Button"

type ButtonProps = {
  label: string
  onClick: () => void
  className?: string
}

const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <MUIButton
      onClick={onClick}
      className={`w-96 h-[56px] bg-navy-blue hover:bg-deep-blue text-white`}
      {...props}
    >
      {label}
    </MUIButton>
  )
}

export default Button
