// RegistroEstudiante.js
import React, { useState } from 'react';
import '../Styles/StylesPages/RegistroEstudiante.css';

export function RegistroEstudiante() {
  const [nombre, setNombre] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se realiza la lógica para registrar al usuario
    console.log('Nombre:', nombre);
    console.log('Institución:', institucion);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);
    console.log('Confirmar contraseña:', confirmarContraseña);
  };

  return (
    <form onSubmit={handleSubmit} className="registro-form">
      <h2 className="form-title">Regístrate</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="institucion">Institución:</label>
        <input
          type="text"
          id="institucion"
          value={institucion}
          onChange={(event) => setInstitucion(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={(event) => setContraseña(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
        <input
          type="password"
          id="confirmarContraseña"
          value={confirmarContraseña}
          onChange={(event) => setConfirmarContraseña(event.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Registrar</button>
    </form>
  );
}
