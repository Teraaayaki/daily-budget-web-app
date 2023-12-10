"use client"

import React from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import Dialog from "@/components/parts/Dialog"
import AddNewDailyBudgetModal from "@/components/templates/AddNewDailyBudgetModal"
import AuthenticatedLayout from "@/components/templates/AuthenticatedLayout"

import { useHooks } from "./hooks"

const DailyBudgetListPage = () => {
  const {
    rows,
    openAddDialog,
    addNewDailyBudget,
    closeAddDialog,
    handleRowClick,
    openConfirmationDialog,
    handleOpenConfirmationDialog,
    handleCloseConfirmationDialog,
    handleDeleteDailyBudget,
    refetch,
  } = useHooks()

  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "DATE",
      minWidth: 150,
      filterable: false,
    },
    {
      field: "budget",
      headerName: "BUDGET",
      minWidth: 200,
      filterable: false,
    },
    {
      field: "totalExpenses",
      headerName: "TOTAL EXPENSES",
      minWidth: 250,
      filterable: false,
    },
    {
      field: "remainingBudget",
      headerName: "REMAINING BUDGET",
      minWidth: 250,
      filterable: false,
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
    <AuthenticatedLayout
      title="DAILY BUDGETS"
      addBtnLabel="Add New Daily Budget"
      onClickAddBtn={addNewDailyBudget}
    >
      <Box className="mt-10 h-[95%]">
        <DataGrid
          rows={rows.map((row) => ({
            ...row,
            deleteBtn: "",
          }))}
          columns={columns.map((col) => ({
            ...col,
            headerClassName: "bg-stone-200 text-base",
          }))}
          onRowClick={handleRowClick}
          getRowId={(row) => row.id}
          className="bg-light-gray shadow-md cursor-pointer"
          disableRowSelectionOnClick
          hideFooter
          autoPageSize
        />
      </Box>
      <AddNewDailyBudgetModal
        open={openAddDialog}
        handleClose={closeAddDialog}
        onSubmit={refetch}
      />
      <Dialog
        title="Confirm Deletion"
        open={openConfirmationDialog}
        handleClose={handleCloseConfirmationDialog}
        handleSubmit={handleDeleteDailyBudget}
      >
        Are you sure you want to delete this daily budget?
      </Dialog>
    </AuthenticatedLayout>
  )
}

export default DailyBudgetListPage
