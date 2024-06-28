import React, { useState } from 'react';

export function RegistroEstudiante(){
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
    <form onSubmit={handleSubmit}>
      <h2>Regístrate</h2>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="institucion">Institución:</label>
        <input
          type="text"
          id="institucion"
          value={institucion}
          onChange={(event) => setInstitucion(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={(event) => setContraseña(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
        <input
          type="password"
          id="confirmarContraseña"
          value={confirmarContraseña}
          onChange={(event) => setConfirmarContraseña(event.target.value)}
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};
