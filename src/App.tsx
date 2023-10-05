import * as React from "react";

import Container from '@mui/material/Container';
import { Users, SignIn } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Container fixed>
        <Routes>
          {/*<Route element={<Home />} key="home" path="*" />*/}
          <Route
            element={<Users />}
            key="users"
            path="/users"
          />
          <Route
            element={<SignIn />}
            key="login"
            path="/login"
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
