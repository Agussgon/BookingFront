import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../containers/Home';
import { SignIn } from '../containers/SignIn';

const DashboardRoutes = () => {
  return (
    // Se usa react-router-dom
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/nombre" element={<Nombre />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default DashboardRoutes