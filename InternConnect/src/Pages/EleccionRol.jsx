import React from 'react';
import { Link } from 'react-router-dom';
import Student from "../Images/UniStudent.png"
import Company from "../Images/Company.png"

export function EleccionRol (){
  return (
    <div>
      <h1>¿Registrarse Como?</h1>
      <div>
        <div>
          <img src={Student} alt="Estudiante" />
          <Link to="/RegistrateEstudiante">
            <button>Estudiante</button>
          </Link>
        </div>
        <div>
          <img src={Company} alt="Empresa" />
          <Link to="/RegistrateEmpresa">
            <button>Empresa</button>
          </Link>
        </div>
      </div>
    </div>
  );
};