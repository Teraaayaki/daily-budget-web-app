"use client"

import React from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { Box, Stack, Typography } from "@mui/material"
import Button from "@/components/parts/Button"

import { isAuthenticated } from "@/lib/authentication"
import NavBar from "@/components/templates/NavBar"

type AuthenticatedLayoutProps = {
  title: string
  children: React.ReactNode
  addBtnLabel?: string
  onClickAddBtn?: () => void
}

const AuthenticatedLayout = ({
  title,
  addBtnLabel,
  onClickAddBtn,
  children,
}: AuthenticatedLayoutProps) => {
  return (
    <>
      <NavBar />
      <Stack className="h-[97%] bg-white p-10 shadow-md">
        <Stack direction={"row"} className="justify-between items-center">
          <Typography className="text-2xl font-medium">{title}</Typography>
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
