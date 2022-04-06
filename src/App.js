import { Routes, Route } from "react-router-dom"
import Container from '@mui/material/Container';
import { Provider } from "react-redux"
import React from "react"

import Error from "./pages/Error";
import Home from "./pages/Home";
import { store } from "./redux"


function App() {
  return (
    <Provider store={store}>
        <React.Fragment>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/*' element={<Error />}/>
            </Routes>
          </Container>
        </React.Fragment>
    </Provider>
  );
}

export default App;