import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import {Landing} from "./Pages/Landing.jsx"
import { SobreNosotros } from './Pages/SobreNosotros.jsx'
import { Login } from './Pages/Login.jsx'
import { Registro } from './Pages/Registro.jsx';
import {ConsultarPasantias} from './Pages/ConsultarPasantias.jsx'
import {ConsultarEmpresas} from './Pages/ConsultarEmpresas.jsx'
import { PreguntasFrecuentes } from './Pages/PreguntasFrecuentes.jsx';
import { PasantiaDetalle } from './Pages/PasantiaDetalles.jsx';
import { EmpresaDetalle } from './Pages/EmpresaDetalles.jsx';
import {PasantiasInterna} from './Pages/PasantiasInterna.jsx';
import { CrearPasantia } from './Pages/CrearPasantia.jsx';

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
  path:'/SobreNosotros',
  element:<SobreNosotros/>
},
{
  path:"/Registro",
  element:<Registro/>
},

{
  path:"/ConsultarPasantias",
  element:<ConsultarPasantias/>
},
{
  path:"/ConsultarEmpresas",
  element:<ConsultarEmpresas/>
},
{
  path:"/Preguntas",
  element:<PreguntasFrecuentes/>
},
{
  path:"/PerfilEstudiante",
  element: <PerfilEstudiantes/>
},
{
  path:"/pasantia/:id",
  element:<PasantiaDetalle/>
},
{
  path:"/empresa/:id",
  element:<EmpresaDetalle/>
},
{
  path:"/pasantias-internas",
  element: <PasantiasInterna/>
},
{
  path:"/crear-pasantia",
  element: <CrearPasantia/>
}


]);
import './index.css'
import { PerfilEstudiantes } from './Pages/PerfilEstudiante.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
