import React from "react"

import Button from "@mui/material/Button"
import MUIDialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

type DialogProps = {
  open: boolean
  title: string
  handleClose: () => void
  handleSubmit: () => void
  children: React.ReactNode
}

const Dialog = ({
  open,
  title,
  handleClose,
  handleSubmit,
  children,
}: DialogProps) => {
  return (
    <MUIDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="text-black">
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </MUIDialog>
  )
}

export default Dialog
