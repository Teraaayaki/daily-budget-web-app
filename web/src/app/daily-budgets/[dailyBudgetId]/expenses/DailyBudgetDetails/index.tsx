"use client"

import React from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import DeleteIcon from "@mui/icons-material/Delete"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { formatDateToMMMMDDYYYY } from "@/lib/date"
import { formatAmountToCurrency } from "@/lib/amount"
import { DailyBudgetForFindOne, Expense } from "@/api/DailyBudget"

type Props = {
  dailyBudget: DailyBudgetForFindOne
  rows: Expense[]
  handleOpenConfirmationDialog: (id: string) => void
}

export const DailyBudgetDetails = React.forwardRef(
  ({ dailyBudget, rows, handleOpenConfirmationDialog }: Props, ref) => {
    const columns: GridColDef[] = [
      {
        field: "category",
        headerName: "CATEGORY",
        minWidth: 250,
        filterable: false,
        valueFormatter: ({ value }) => value.toUpperCase(),
      },
      {
        field: "amount",
        headerName: "AMOUNT",
        minWidth: 200,
        filterable: false,
        valueFormatter: ({ value }) => formatAmountToCurrency(Number(value)),
      },
      {
        field: "notes",
        headerName: "NOTES",
        minWidth: 250,
        filterable: false,
        sortable: false,
        flex: 1,
      },
      {
        field: "delete",
        headerName: "",
        maxWidth: 30,
        filterable: false,
        sortable: false,
        align: "center",
        renderCell: (params) => (
          <IconButton
            onClick={(e) => {
              e.stopPropagation()
              handleOpenConfirmationDialog(params.row.id)
            }}
          >
            <DeleteIcon />
          </IconButton>
        ),
      },
    ]

    return (
      <Box ref={ref} className="h-[97%]">
        <Stack className="px-10 h-[97%]">
          <Stack className="mt-5 gap-2">
            <Typography fontSize={28} fontWeight={600}>
              {`BUDGET AND EXPENSES FOR ${formatDateToMMMMDDYYYY(
                dailyBudget.date
              )}`}
            </Typography>

            <Stack direction={"row"} spacing={14}>
              <Typography fontSize={18}>BUDGET</Typography>
              <Typography fontSize={18}>
                : {formatAmountToCurrency(dailyBudget.budget)}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={3.2}>
              <Typography fontSize={18}>TOTAL EXPENSES</Typography>
              <Typography fontSize={18}>
                : {formatAmountToCurrency(dailyBudget.totalExpenses)}
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <Typography fontSize={18}>REMAINING BUDGET</Typography>
              <Typography fontSize={18}>
                : {formatAmountToCurrency(dailyBudget.remainingBudget)}
              </Typography>
            </Stack>
            {dailyBudget.notes && (
              <Stack direction={"row"} spacing={17}>
                <Typography fontSize={18}>NOTE</Typography>
                <Typography fontSize={18}>: {dailyBudget.notes}</Typography>
              </Stack>
            )}
          </Stack>
          <Box className="h-[95%] mt-5">
            <DataGrid
              rows={rows.map((row) => ({
                ...row,
                deleteBtn: "",
              }))}
              columns={columns.map((col) => ({
                ...col,
                headerClassName: "bg-stone-200 text-base",
              }))}
              className="bg-light-gray shadow-md"
              disableRowSelectionOnClick
              hideFooter
              autoPageSize
            />
          </Box>
        </Stack>
      </Box>
    )
  }
)

export default DailyBudgetDetails
