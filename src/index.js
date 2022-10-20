import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import DashboardRoutes from './routes/DashboardRoutes';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Se crea enrutamiento dinamico: dirijiendose hacia el dashboardroutes para generar alli
    las distribuciones de las rutas segun necesitemos */}
    <DashboardRoutes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();
