import PropTypes from 'prop-types';
import React from 'react'

import { Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import CreateEmployee from '../components/CreateEmployee';
import EmployeeList from "../components/EmployeeList"
import * as Style from "./Home.style"
import logo from "../assets/logo.jpg"




export default function Header() {
  const classes = Style.useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Style.Header>
        <Style.HeaderUp>
          <Style.LogoHrnet src={logo} alt="logo HR net" />
          <Style.TitleHeader>HRnet</Style.TitleHeader>
        </Style.HeaderUp>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                  value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab
                classes={{root: classes.customTab}}
                label="CREATE EMPLOYEE" {...a11yProps(0)} 
              />
              <Tab
                classes={{root: classes.customTab}}
                label="VIEW CURRENT EMPLOYEES" {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CreateEmployee />
          </TabPanel>
          <TabPanel value={value} index={1}>
          {window.matchMedia("(min-width: 600px)").matches ? (
            /* La largeur minimum de l'affichage est 600 px inclus */
            <EmployeeList />
            ) : (
            <Typography component={'span'}>
              Afin d'avoir une expérience utilsateur optimisé, veuillez pivoter votre smartphone.
            </Typography>
            /* L'affichage est inférieur à 600px de large */
          )}
          </TabPanel>
        </Box>
    </Style.Header>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Style.SBox>
          <Typography component={'span'} >{children}</Typography>
        </Style.SBox>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
