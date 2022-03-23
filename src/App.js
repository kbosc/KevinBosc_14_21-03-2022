// import { ThemeProvider } from "styled-components"
import { Routes, Route } from "react-router-dom"
import Container from '@mui/material/Container';
// import { Provider } from "react-redux"
import React from "react"

// import CreateEmployee from "./pages/CreateEmployee";
// import EmployeeList from "./pages/EmployeeList";
// import GlobalStyle from './utils/style/GlobalStyle'
// import { ThemeDefault } from "./utils/style/theme"
import Header from "./components/Header";
import Error from "./pages/Error";


function App() {
  return (
    // <ThemeProvider theme={ThemeDefault}>
      <React.Fragment>
        {/* <GlobalStyle /> */}
        <Container>
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<Header />} />
            {/* <Route path='/' element={<CreateEmployee />} />
            <Route path='/employeeList' element={<EmployeeList />}/> */}
            <Route path='/*' element={<Error />}/>
          </Routes>
        </Container>
      </React.Fragment>
    // </ThemeProvider>
  );
}

export default App;