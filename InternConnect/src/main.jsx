import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import {Landing} from "./Pages/Landing.jsx"
import { SobreNosotros } from './Pages/SobreNosotros.jsx'
import { Login } from './Pages/Login.jsx'
import {EleccionRol} from "./Pages/EleccionRol.jsx"
import { RegistroEstudiante } from './Pages/RegistroEstudiante.jsx';
import { RegistroEmpresa } from './Pages/RegistroEmpresa.jsx';
import {ConsultarPasantias} from './Pages/ConsultarPasantias.jsx'
import {ConsultarEmpresas} from './Pages/ConsultarEmpresas.jsx'

const router = createBrowserRouter([

{
  path:'/',
  element: <Landing/>
},
{
  path:'/Login',
  element : <Login/>

},
{
  path:'/EleccionRol',
  element:<EleccionRol/>
},
{
  path:'/SobreNosotros',
  element:<SobreNosotros/>
},
{
  path:"/RegistrateEstudiante",
  element:<RegistroEstudiante/>
},
{
  path:"/RegistrateEmpresa",
  element:<RegistroEmpresa/>
},
{
  path:"/ConsultarPasantias",
  element:<ConsultarPasantias/>
},
{
  path:"/ConsultarEmpresas",
  element:<ConsultarEmpresas/>
},

]);
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
