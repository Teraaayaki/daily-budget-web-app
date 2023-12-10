"use client"

import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import BackButton from "@/components/parts/BackButton"
import Button from "@/components/parts/Button"
import NavBar from "@/components/templates/NavBar"

type AuthenticatedLayoutProps = {
  title: string
  children: React.ReactNode
  addBtnLabel?: string
  onClickAddBtn?: () => void
  showBackBtn?: boolean
}

const AuthenticatedLayout = ({
  title,
  addBtnLabel,
  onClickAddBtn,
  children,
  showBackBtn = false,
}: AuthenticatedLayoutProps) => {
  return (
    <>
      <NavBar />
      <Stack className="h-[97%] bg-white p-10 shadow-md">
        <Stack direction={"row"} className="justify-between items-center">
          <Stack
            direction={"row"}
            className="justify-between items-center gap-4"
          >
            {showBackBtn && <BackButton />}
            <Typography className="text-2xl font-medium">{title}</Typography>
          </Stack>
          {addBtnLabel && onClickAddBtn && (
            <Button label={addBtnLabel} onClick={onClickAddBtn} />
          )}
        </Stack>
        {children}
      </Stack>
    </>
  )
}

export default AuthenticatedLayout
