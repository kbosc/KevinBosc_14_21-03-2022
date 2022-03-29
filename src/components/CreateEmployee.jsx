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
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { addEmployee } from "../redux"
import { ThemeDefault } from "../utils/style/theme"
// import { Modal, useModal } from "modal-component-library"

const StyledButtonLeft = styled(Button)(() => ({
  backgroundColor: ThemeDefault.colors.tertiary,
  "&:hover": {
    backgroundColor: ThemeDefault.colors.primary,
    color: ThemeDefault.colors.white,
  },
}));
const StyledButtonRight = styled(Button)(() => ({
  backgroundColor: ThemeDefault.colors.white,
  color: ThemeDefault.colors.tertiary,
  "&:hover": {
    backgroundColor: ThemeDefault.colors.primary,
    color: ThemeDefault.colors.white,
  },
}));

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
//   const [employee, setEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     startDate: "",
//     department: "",
//     dateOfBirth: "",
//     street: "",
//     city: "",
// });
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
// const formattingStartDate = format(valueStart, 'MM/dd/yyyy')
// const formattingBirthDate = format(valueBirth, 'MM/dd/yyyy')

const newEmployee = {
  firstName: capitalizeFirstLetter(firstName),
  lastName: capitalizeFirstLetter(lastName),
  startDate: "valueStart",
  department: department,
  dateOfBirth: "valueBirth",
  street: street,
  city: titleCase(city),
};
  
  // const handleChangeBirth = (newValue) => {
  //   setValueBirth(newValue);
  // };
  // const handleChangeStart = (newValue) => {
  //   setValueStart(newValue);
  // };
  // const handleChangeState = (event) => {
  //   setState(event.target.value);
  // };
  // const handleChangeDepartment = (event) => {
  //   setDepartment(event.target.value);
  // };
  // const { isShowing, isToggle } = useModal();

  function handleSubmit(event) {
    console.log("////////////////////identity/////////////")
    console.log( 'firstname:', firstName); 
    console.log( 'lastname:', lastName); 
    console.log( 'date of birth:', valueBirth);
    console.log("////////////////////adress////////////////")
    console.log( 'state:', state); 
    console.log( 'street:', street); 
    console.log( 'city:', city); 
    console.log( 'zip:', zip); 
    console.log("////////////////////Company status/////////")
    console.log("date start:", valueStart)
    console.log( 'department:', department); 
    console.log("////////////////////**************************/////////////////")
    const dateajour = format(valueBirth, 'MM/dd/yyyy')
    console.log(dateajour)
}
  return (
    <div>
      <Box
      sx={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Box
        spacing={10}
        component="form"
        onSubmit={handleSubmit}
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
          {/* <h2>Identity :</h2> */}
          <TextField 
            id="outlined-basic" 
            label="First Name" 
            variant="outlined" 
            onChange={ e => setFirstName(e.target.value)}
            // value={firstName}
            />
          <TextField 
            id="outlined-basic" 
            label="Last Name" 
            variant="outlined"
            onChange={ e => setLastName(e.target.value)}

          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date of Birth"
                inputFormat="MM/dd/yyyy"
                value={valueBirth}
                // onChange={handleChangeBirth}
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
          {/* <h2>Address :</h2> */}
          <TextField 
            id="outlined-basic" 
            label="Street" 
            variant="outlined"
            onChange={ e => setStreet(e.target.value)}
            /> 
          <TextField 
            id="outlined-basic" 
            label="City" 
            variant="outlined"
            onChange={ e => setCity(e.target.value)}
            />
          <FormControl>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="demo-simple-select"
              value={state}
              label="State"
              // onChange={handleChangeState}
              onChange={ e => setState(e.target.value)}
              >
              <MenuItem value={"Vermont"}>Vermont</MenuItem>
              <MenuItem value={"Virginia"}>Virginia</MenuItem>
              <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
            </Select>
          </FormControl>
          <TextField 
            id="outlined-basic" 
            label="Zip Code" 
            variant="outlined" 
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
          {/* <h2>Company Status :</h2> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={valueStart}
                // onChange={handleChangeStart}
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
              // onChange={handleChangeDepartment}
              onChange={ e => setDepartment(e.target.value)}
            >
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
              <MenuItem value={"Engineering"}>Engineering</MenuItem>
              <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
              <MenuItem value={"Legal"}>Legal</MenuItem>
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
          <StyledButtonLeft variant="contained" type="submit" onClick={() => dispatch(addEmployee(newEmployee))} >Save</StyledButtonLeft>
          {/* <StyledButtonLeft variant="contained" type="submit" onClick={handleSubmit} >Save</StyledButtonLeft> */}
          {/* <StyledButtonLeft onClick={isToggle} variant="contained">Save</StyledButtonLeft> */}
          <StyledButtonRight variant="contained">Reset</StyledButtonRight>
      </Box>
      {/* <Modal isShowing={isShowing} hide={isToggle} yourText="Employee Created!" /> */}
    </div>
  )
}
