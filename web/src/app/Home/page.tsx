"use client"

import React from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { Box, Stack, Typography } from "@mui/material"
import Button from "@/components/parts/Button"

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "DATE",
    minWidth: 150,
  },
  {
    field: "budget",
    headerName: "BUDGET",
    minWidth: 250,
  },
  {
    field: "totalExpenses",
    headerName: "TOTAL EXPENSES",
    minWidth: 250,
  },
  {
    field: "remainingBudget",
    headerName: "REMAINING BUDGET",
    minWidth: 250,
  },
  {
    field: "viewLink",
    headerName: "",
    minWidth: 200,
  },
  {
    field: "exportPdfBtn",
    headerName: "",
    minWidth: 150,
    flex: 1,
  },
]

const rows = [
  {
    id: 1,
    date: "01/01/2021",
    budget: "1,000.00",
    totalExpenses: "900.00",
    remainingBudget: "100.00",
  },
  {
    id: 2,
    date: "01/01/2021",
    budget: "5,000.00",
    totalExpenses: "1,900.00",
    remainingBudget: "3,100.00",
  },
  {
    id: 3,
    date: "01/01/2021",
    budget: "5,000.00",
    totalExpenses: "1,900.00",
    remainingBudget: "3,100.00",
  },
  {
    id: 4,
    date: "01/01/2021",
    budget: "5,000.00",
    totalExpenses: "1,900.00",
    remainingBudget: "3,100.00",
  },
  {
    id: 5,
    date: "01/01/2021",
    budget: "5,000.00",
    totalExpenses: "1,900.00",
    remainingBudget: "3,100.00",
  },
  {
    id: 6,
    date: "01/01/2021",
    budget: "5,000.00",
    totalExpenses: "1,900.00",
    remainingBudget: "3,100.00",
  },
  {
    id: 7,
    date: "01/01/2021",
    budget: "5,000.00",
    totalExpenses: "1,900.00",
    remainingBudget: "3,100.00",
  },
]

const HomePage = () => {
  return (
    <Stack className="h-[90%] bg-deep-blue p-10 rounded shadow-md">
      <Stack direction={"row"} className="justify-between items-center">
        <Typography className="font-semi text-white text-xl font-medium">
          DAILY BUDGETS
        </Typography>
        <Button
          label="ADD A DAILY BUDGET"
          onClick={() => {}}
          customStyle="bg-deep-blue hover:bg-navy-blue h-10 w-52"
        />
      </Stack>
      <Box className="mt-10 h-[90%]">
        <DataGrid
          rows={rows.map((row) => ({
            ...row,
            viewLink: "View Details",
            exportPdfBtn: "Generate PDF",
          }))}
          columns={columns.map((col) => ({
            ...col,
            headerClassName: "bg-stone-200",
          }))}
          disableRowSelectionOnClick
          hideFooter
          autoHeight={false}
          autoPageSize
          className="bg-light-gray shadow-md"
        />
      </Box>
    </Stack>
  )
}

export default HomePage
