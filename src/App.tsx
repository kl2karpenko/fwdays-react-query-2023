import * as React from "react";

import { useUsers } from "./api";
import Container from '@mui/material/Container';
import { Users, SignIn } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {PAGE_TYPES} from "./api/constants.ts";

function App() {
  const { data: users, isLoading } = useUsers();
  console.log(users, isLoading, ' users');

  return (
    <BrowserRouter>
      <Container fixed>
        <Routes>
          {/*<Route element={<Home />} key="home" path="*" />*/}
          <Route
            element={<Users users={users?.data} />}
            key="users"
            path="/users"
          />
          <Route
            element={<SignIn pageType={PAGE_TYPES.login} />}
            key="signin"
            path="/signin"
          />
          <Route
            element={<SignIn pageType={PAGE_TYPES.signup} />}
            key="signup"
            path="/signup"
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
