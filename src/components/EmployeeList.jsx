import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

import { ThemeDefault } from "../utils/style/theme"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: ThemeDefault.colors.secondaryLighten,
    color: ThemeDefault.colors.tertiary,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'left',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState('')
  const userData = useSelector(state => state.employee)
  console.log(userData.data);
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
          <Stack width="50%">
            <TextField id="outlined-basic" label="Search Employee" variant="outlined" onChange={e => {setSearchTerm(e.target.value)}} />
          </Stack>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Start Date</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Date of Birth</StyledTableCell>
                <StyledTableCell>Street</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.data.filter((value) => {
                if (searchTerm === "") {
                  return value
                } else if (value.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || value.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return value
                }
              }).map((row, index) => (
                <StyledTableRow key={index}>
                  {/* <StyledTableCell component="th" scope="row">{row.firstName}</StyledTableCell> */}
                  <StyledTableCell>{row.firstName}</StyledTableCell>
                  <StyledTableCell>{row.lastName}</StyledTableCell>
                  <StyledTableCell>{row.startDate}</StyledTableCell>
                  <StyledTableCell>{row.department}</StyledTableCell>
                  <StyledTableCell>{row.dateOfBirth}</StyledTableCell>
                  <StyledTableCell>{row.street}</StyledTableCell>
                  <StyledTableCell>{row.city}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" >
        <Pagination count={10} />
      </Stack>
    </Stack>
  )
}
