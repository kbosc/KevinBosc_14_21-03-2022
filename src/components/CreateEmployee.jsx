import { Modal, useModal } from "modal-component-library"
import { useDispatch } from "react-redux"
import React, { useState } from 'react';
import { format } from 'date-fns'

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


import { employeeState, employeeDepartment } from "../api/index"
import * as Style from "./createEmployee.style"
import { addEmployee } from "../redux"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

export default function CreateEmployee() {
  const [valueBirth, setValueBirth] = useState(new Date('2014-08-18T21:11:54'));
  const [valueStart, setValueStart] = useState(new Date('2014-08-18T21:11:54'));
  const [department, setDepartment] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [street, setStreet] = useState('')
  const [state, setState] = useState('');
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const dispatch = useDispatch()
  const { isShowing, isToggle } = useModal();
  //   const [employee, setEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     startDate: "",
//     department: "",
//     dateOfBirth: "",
//     street: "",
//     city: "",
// });

  function submit() {
    const formattingStartDate = format(valueStart, 'MM/dd/yyyy')
    const formattingBirthDate = format(valueBirth, 'MM/dd/yyyy')
    const newEmployee = {
      firstName: capitalizeFirstLetter(firstName),
      lastName: capitalizeFirstLetter(lastName),
      startDate: formattingStartDate,
      department: department,
      dateOfBirth: formattingBirthDate,
      street: street,
      city: titleCase(city),
    };
    dispatch(addEmployee(newEmployee))
    isToggle()
  }

  function resetField() {
    setValueBirth(new Date('2014-08-18T21:11:54'))
    setValueStart(new Date('2014-08-18T21:11:54'))
    setDepartment("")
    setFirstName("")
    setLastName("")
    setStreet("")
    setState("")
    setCity("")
    setZip("")
  }

  return (
    <div>
      <Box
      sx={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Box
        spacing={10}
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, 
          width: '50%', 
          display: 'flex', 
          flexDirection: 'column'
        }}
        noValidate
        autoComplete="off"
        >
          <Typography component={'span'} variant={'body2'}>Identity :</Typography>
          <TextField 
            id="outlined-basic" 
            label="First Name" 
            variant="outlined"
            value={firstName}
            onChange={ e => setFirstName(e.target.value)}
            // onChange={ e => setEmployee({firstname: e.target.value, ...employee})}
            />
          <TextField 
            id="outlined-basic" 
            label="Last Name" 
            variant="outlined"
            value={lastName}
            onChange={ e => setLastName(e.target.value)}

          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date of Birth"
                inputFormat="MM/dd/yyyy"
                value={valueBirth}
                onChange={e => setValueBirth(e)}
                renderInput={(params) => <TextField {...params} />}
              />
          </LocalizationProvider>
        </Box>

        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, 
          width: '50%', 
          display: 'flex', 
          flexDirection: 'column'
        }}
        noValidate
        autoComplete="off"
        >
          <Typography component={'span'} variant={'body2'}>Address :</Typography>
          <TextField 
            id="outlined-basic" 
            label="Street" 
            variant="outlined"
            value={street}
            onChange={ e => setStreet(e.target.value)}
            /> 
          <TextField 
            id="outlined-basic" 
            label="City" 
            variant="outlined"
            value={city}
            onChange={ e => setCity(e.target.value)}
            />
          <FormControl>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="demo-simple-select"
              label="State"
              value={state}
              onChange={ e => setState(e.target.value)}
              >
                {employeeState.map((state, index) => (
                  <MenuItem key={index} value={state.state}>{state.state}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField 
            id="outlined-basic" 
            label="Zip Code" 
            variant="outlined" 
            value={zip}
            onChange={ e => setZip(e.target.value)}
          />
        </Box>

        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column'
        }}
        noValidate
        autoComplete="off"
        >
          <Typography component={'span'} variant={'body2'}>Company Status :</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={valueStart}
                onChange={e => setValueStart(e)}
                renderInput={(params) => <TextField {...params} />}
              />
          </LocalizationProvider>
          <FormControl>
            <InputLabel id="Department-label">Department</InputLabel>
            <Select
              labelId="Department-label"
              id="demo-simple-select"
              value={department}
              label="Department"
              onChange={ e => setDepartment(e.target.value)}
            >
              {employeeDepartment.map((department, index) => (
                  <MenuItem key={index} value={department.department}>{department.department}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
      sx={{
        '& > :not(style)': { m: 1, p: 2, width: "10%" },  
        display: 'flex', 
        justifyContent: 'flex-end',
      }}>
          <Style.SButtonLeft variant="contained" type="submit" onClick={submit} >Save</Style.SButtonLeft>
          <Style.SButtonRight variant="contained" onClick={resetField}>Reset</Style.SButtonRight>
      </Box>
      <Modal isShowing={isShowing} hide={isToggle} yourText="Employee Created!" />
    </div>
  )
}