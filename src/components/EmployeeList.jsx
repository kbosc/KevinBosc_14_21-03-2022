import { useSelector } from "react-redux"
import React, { useState } from 'react'

import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

import * as Style from "./employeeList.style"


export default function EmployeeList() {
  const userData = useSelector(state => state.employee)
  const [searchTerm, setSearchTerm] = useState('')
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, userData.data.length - page * rowsPerPage);

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
          <Stack width="50%">
            <TextField id="outlined-basic" label="Search Employee" variant="outlined" onChange={e => {setSearchTerm(e.target.value)}} />
          </Stack>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <Style.STableCell>First Name</Style.STableCell>
                <Style.STableCell>Last Name</Style.STableCell>
                <Style.STableCell>Start Date</Style.STableCell>
                <Style.STableCell>Department</Style.STableCell>
                <Style.STableCell>Date of Birth</Style.STableCell>
                <Style.STableCell>Street</Style.STableCell>
                <Style.STableCell>City</Style.STableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.data.filter((value) => {
                if (searchTerm === "") {
                  return value
                } else if (value.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || value.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return value
                }
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <Style.STableRow key={index}>
                  <Style.STableCell component="th" scope="row">{row.firstName}</Style.STableCell>
                  <Style.STableCell>{row.lastName}</Style.STableCell>
                  <Style.STableCell>{row.startDate}</Style.STableCell>
                  <Style.STableCell>{row.department}</Style.STableCell>
                  <Style.STableCell>{row.dateOfBirth}</Style.STableCell>
                  <Style.STableCell>{row.street}</Style.STableCell>
                  <Style.STableCell>{row.city}</Style.STableCell>
                </Style.STableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" >
        <TablePagination
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          onPageChange={handleChangePage}
          count={userData.data.length}
          rowsPerPage={rowsPerPage}
          component="div"
          page={page}
        />
      </Stack>
    </Stack>
  )
}
