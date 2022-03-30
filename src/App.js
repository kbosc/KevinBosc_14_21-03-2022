// import { ThemeProvider } from "styled-components"
import { Routes, Route } from "react-router-dom"
import Container from '@mui/material/Container';
import { Provider } from "react-redux"
import React from "react"

// import GlobalStyle from './utils/style/GlobalStyle'
// import { ThemeDefault } from "./utils/style/theme"
import Error from "./pages/Error";
import Home from "./pages/Home";
import { store } from "./redux"


function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={ThemeDefault}> */}
        <React.Fragment>
          {/* <GlobalStyle /> */}
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/*' element={<Error />}/>
            </Routes>
          </Container>
        </React.Fragment>
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;