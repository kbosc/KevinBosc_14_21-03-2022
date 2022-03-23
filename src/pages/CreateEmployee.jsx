import React, { useState } from 'react';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { ThemeDefault } from "../utils/style/theme"

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
  const [state, setState] = useState('');
  const [department, setDepartment] = useState('');
  
  const handleChangeBirth = (newValue) => {
    setValueBirth(newValue);
  };
  const handleChangeStart = (newValue) => {
    setValueStart(newValue);
  };
  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

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
          <h2>Identity :</h2>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date of Birth"
                inputFormat="MM/dd/yyyy"
                value={valueBirth}
                onChange={handleChangeBirth}
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
          <h2>Address :</h2>
          <TextField id="outlined-basic" label="Street" variant="outlined" /> 
          <TextField id="outlined-basic" label="City" variant="outlined" />
          <FormControl>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="demo-simple-select"
              value={state}
              label="State"
              onChange={handleChangeState}
            >
              <MenuItem value={1}>Vermont</MenuItem>
              <MenuItem value={2}>Virginia</MenuItem>
              <MenuItem value={3}>Wisconsin</MenuItem>
            </Select>
          </FormControl>
          <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
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
          <h2>Company Status :</h2>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={valueStart}
                onChange={handleChangeStart}
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
              onChange={handleChangeDepartment}
            >
              <MenuItem value={1}>Sales</MenuItem>
              <MenuItem value={2}>Marketing</MenuItem>
              <MenuItem value={3}>Engineering</MenuItem>
              <MenuItem value={4}>Human Resources</MenuItem>
              <MenuItem value={5}>Legal</MenuItem>
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
          <StyledButtonLeft variant="contained">Save</StyledButtonLeft>
          <StyledButtonRight variant="contained">Reset</StyledButtonRight>
      </Box>
    </div>
  )
}
