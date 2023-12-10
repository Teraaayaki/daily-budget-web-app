"use client"

import Alert from "@mui/material/Alert"
import MuiSnackbar from "@mui/material/Snackbar"

import { useHooks } from "./hooks"

export const Snackbar = () => {
  const {
    snackbarInfo: { open, severity, message },
    onClose,
  } = useHooks()

  return (
    <>
      {message && (
        <MuiSnackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            elevation={6}
            variant="filled"
            severity={severity}
            onClose={onClose}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {message}
          </Alert>
        </MuiSnackbar>
      )}
    </>
  )
}
