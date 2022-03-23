import React from 'react'

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

function createData(firstName, lastName, startDate, department, dateOfBirth, street, city) {
  return { firstName, lastName, startDate, department, dateOfBirth, street, city };
}

const rows = [
  createData('John', "Doe", "22/03/2021", "Sales", "03/07/1984", "111 8th Ave", "New York"),
  createData('Patrick', "Chaun", "22/03/2021", "Sales", "03/07/1984", "111 8th Ave", "Las Vegas"),
  createData('Delphine', "Doe", "22/03/2021", "Sales", "03/07/1984", "111 8th Ave", "Menphis"),
  createData('Augustin', "Banjo", "22/03/2021", "Sales", "03/07/1984", "111 8th Ave", "Los Angeles"),
  createData('Catherine', "Manson", "22/03/2021", "Sales", "03/07/1984", "111 8th Ave", "wisconsis"),
];

export default function EmployeeList() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
          <Stack width="50%">
            <TextField id="outlined-basic" label="Search Employee" variant="outlined" />
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
              {rows.map((row) => (
                <StyledTableRow key={row.firstName}>
                  <StyledTableCell component="th" scope="row">
                    {row.firstName}
                  </StyledTableCell>
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
