"use client"

import React from "react"
import { useRouter } from "next/navigation"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import cookies from "js-cookie"

import { ACCESS_TOKEN_KEY } from "@/constants/authentication"
import Logo from "@/components/parts/Logo"
import Button from "@/components/parts/Button"

const NavBar = () => {
  const router = useRouter()

  const handleClose = () => {
    cookies.remove(ACCESS_TOKEN_KEY)
    router.push("/")
  }

  return (
    <AppBar position="static" className="bg-deep-blue">
      <Toolbar className="px-10 py-3">
        <Logo size="md" customStyle="flex-grow my-auto" />
        <Button
          label="SIGN OUT"
          onClick={handleClose}
          className="text-white hover:bg-navy-blue"
        />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
