import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../containers/Home';

const DashboardRoutes = () => {
  return (
    // Se usa react-router-dom
    <BrowserRouter>
      <Routes>
        {/* Aqui generamos las rutas a las cuales se va a redirigir cada vez que hagamos click
        en los enlaces */}
        {/* aqui le decimos que todo lo redirija al home  */}
        <Route path="/" element={<Home />} />

        {/* de la misma forma incluimos cualquier otra ruta que requeramos, solo cambiandole
        el nombre   */}
        {/* <Route path="/nombre" element={<Nombre />} /> */}

        {/* aqui cualquier otra ruta, que sea diferente a las demas, va a redirigir a la "/"
        por lo que sera al home */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default DashboardRoutes