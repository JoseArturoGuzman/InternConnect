import React, { useState } from 'react';
import '../Styles/StylesPages/RegistroEmpresa.css';

export function Registro() {
  const [tipoUsuario, setTipoUsuario] = useState('estudiante'); // 'estudiante' por defecto
  const [nombre, setNombre] = useState('');
  const [rnc, setRnc] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [documentoIdentidad, setDocumentoIdentidad] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [errorContraseña, setErrorContraseña] = useState(null);
  const [errorCorreo, setErrorCorreo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del correo electrónico
    if (!correo.includes('@')) {
      setErrorCorreo('El correo electrónico no es válido');
      return;
    } else {
      setErrorCorreo(null);
    }

    // Validación de la contraseña
    if (contraseña.length < 8) {
      setErrorContraseña('La contraseña debe tener al menos 8 caracteres');
      return;
    } else if (contraseña !== confirmarContraseña) {
      setErrorContraseña('Las contraseñas no coinciden');
      return;
    } else {
      setErrorContraseña(null);
    }

    // Aquí puedes enviar los datos del formulario al servidor
    console.log('Tipo de Usuario:', tipoUsuario);
    console.log('Nombre:', nombre);
    console.log('RNC:', rnc);
    console.log('Institución:', institucion);
    console.log('Tipo de Documento:', tipoDocumento);
    console.log('Documento de Identidad:', documentoIdentidad);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);
    console.log('Confirmar Contraseña:', confirmarContraseña);
  };

  return (
    <form onSubmit={handleSubmit} className="registro-form">
      <h2 className="form-title">Regístrate</h2>
      <div className="form-group">
        <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
        <select
          id="tipoUsuario"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
          required
        >
          <option value="estudiante">Estudiante</option>
          <option value="empresa">Empresa</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      {tipoUsuario === 'empresa' && (
        <div className="form-group">
          <label htmlFor="rnc">RNC:</label>
          <input
            type="text"
            id="rnc"
            value={rnc}
            onChange={(e) => setRnc(e.target.value)}
            required
          />
        </div>
      )}
      {tipoUsuario === 'estudiante' && (
        <>
          <div className="form-group">
            <label htmlFor="institucion">Institución:</label>
            <select
              id="institucion"
              value={institucion}
              onChange={(e) => setInstitucion(e.target.value)}
              required
            >
              <option value="">Selecciona una institución</option>
              <option value="Intec">Intec</option>
              <option value="Unibe">Unibe</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            <select
              id="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo de documento</option>
              <option value="cedula">Cédula</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
          </div>
          {tipoDocumento && (
            <div className="form-group">
              <label htmlFor="documentoIdentidad">Documento de Identidad:</label>
              <input
                type="text"
                id="documentoIdentidad"
                value={documentoIdentidad}
                onChange={(e) => setDocumentoIdentidad(e.target.value)}
                required
              />
            </div>
          )}
        </>
      )}
      <div className="form-group">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        {errorCorreo && <div style={{ color: 'red' }}>{errorCorreo}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        {errorContraseña && <div style={{ color: 'red' }}>{errorContraseña}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmarContraseña"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Registrar</button>
    </form>
  );
}
