"use client"

import { useRouter } from "next/navigation"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

import React from "react"
import Logo from "@/components/parts/Logo"
import Button from "@/components/parts/Button"

const NavBar = () => {
  const router = useRouter()

  const handleClose = () => router.push("/")

  return (
    <AppBar position="static" className="bg-deep-blue mb-10">
      <Toolbar className="px-56">
        <Logo size="md" customStyle="flex-grow my-auto" />
        <Button
          label="SIGN OUT"
          onClick={handleClose}
          customStyle="w-52 h-10"
        />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
