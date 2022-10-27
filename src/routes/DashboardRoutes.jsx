import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../containers/Home';
import { SignIn } from '../containers/SignIn';
import { Login } from '../containers/Login'
// import useInitialState from '../hooks/useInitialState.js';
import { AppContext } from '../components/context/AppContext';
import initialState from '../helpers/initialState';


const DashboardRoutes = () => {
  // const initialState2 = useContext(useInitialState);

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/nombre" element={<Nombre />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default DashboardRoutes