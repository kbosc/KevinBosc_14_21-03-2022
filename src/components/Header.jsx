import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react'

import CreateEmployee from '../pages/CreateEmployee';
import { ThemeDefault } from "../utils/style/theme"
import EmployeeList from "../pages/EmployeeList"
import * as Style from "./header.style"
import logo from "../assets/logo.png"



// const StyledTab = styled(Tab)(() => ({
//   // backgroundColor: ThemeDefault.colors.tertiary,
//   fontWeight: 'bold',
//   color: ThemeDefault.colors.primary,
//   "&:focus": {
//     color: ThemeDefault.colors.primary,
//   },
// }));
// const StyledTabs = styled(Tabs)(() => ({
//   borderColor: ThemeDefault.colors.primary,
//   "&:focus": {
//     borderColor: "ThemeDefault.colors.primary",
//     borderWidth: "10px",
//   },
// }));

const useStyles = makeStyles(() => ({
  customTabRoot: {
    color: ThemeDefault.colors.primary,
  },
  customTabIndicator: {
    backgroundColor: ThemeDefault.colors.primary
  }
}));


export default function Header() {
  const classes = useStyles();
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
                classes={{
                  root: classes.customTabRoot,
                  indicator: classes.customTabIndicator
              }}
                // TabIndicatorProps={{
                // style: {
                //   backgroundColor: ThemeDefault.colors.primary,
                //   color: ThemeDefault.colors.primary,
                // },}}
             value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab
              label={<span style={{ color: 'black' }}>CREATE EMPLOYEE</span>}
                // TabIndicatorProps={{
                //   style: {
                //     backgroundColor: ThemeDefault.colors.primary,
                //     color: ThemeDefault.colors.primary,
                //     fontWeight: 'bold',
                //   },}}
                //   classes={{
                //     root: classes.customTabRoot,
                //     indicator: classes.customTabIndicator
                // }}
                // label="CREATE EMPLOYEE" {...a11yProps(0)} 
              />
              <Tab
                label="VIEW CURRENT EMPLOYEES" {...a11yProps(1)}
                indicatorColor={ThemeDefault.colors.primary}
                textColor="black"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CreateEmployee />
          </TabPanel>
          <TabPanel value={value} index={1}>
          <EmployeeList />
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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
