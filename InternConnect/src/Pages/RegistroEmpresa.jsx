import React, { useState } from 'react';

export function RegistroEmpresa  ()  {
  const [nombre, setNombre] = useState('');
  const [rnc, setRnc] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
    console.log('Nombre:', nombre);
    console.log('RNC:', rnc);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);
    console.log('Confirmar Contraseña:', confirmarContraseña);
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
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rnc">RNC:</label>
        <input
          type="text"
          id="rnc"
          value={rnc}
          onChange={(e) => setRnc(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmarContraseña"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

