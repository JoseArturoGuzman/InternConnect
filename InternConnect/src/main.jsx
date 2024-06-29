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
}

]);
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
