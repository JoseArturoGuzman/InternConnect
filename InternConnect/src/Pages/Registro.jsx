import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Components/authContext";
import estudianteImg from '../Images/Estudiante.jpg';
import empresaImg from '../Images/Empresa.jpg';
import logouni from '../Images/NewLogo.png';
import '../Styles/StylesPages/RegistroEmpresa.css';

export function Registro() {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const [tipoUsuario, setTipoUsuario] = useState('estudiante');
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

  const formatCedula = (value) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < cleaned.length && i < 11; i++) {
      if (i === 3 || i === 10) {
        formatted += '-';
      }
      formatted += cleaned[i];
    }
    return formatted;
  };

  const handleDocumentoIdentidadChange = (event) => {
    const formattedValue = formatCedula(event.target.value);
    setDocumentoIdentidad(formattedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!correo.includes('@')) {
      setErrorCorreo('El correo electrónico no es válido');
      return;
    } else {
      setErrorCorreo(null);
    }

    if (contraseña.length < 8) {
      setErrorContraseña('La contraseña debe tener al menos 8 caracteres');
      return;
    } else if (contraseña !== confirmarContraseña) {
      setErrorContraseña('Las contraseñas no coinciden');
      return;
    } else {
      setErrorContraseña(null);
    }

    const userData = {
      nombre,
      email: correo,
      password: contraseña,
      tipoUsuario,
      rnc: tipoUsuario === 'empresa' ? rnc : undefined,
      institucion: tipoUsuario === 'estudiante' ? institucion : undefined,
      tipoDocumento: tipoUsuario === 'estudiante' ? tipoDocumento : undefined,
      documentoIdentidad: tipoUsuario === 'estudiante' ? documentoIdentidad : undefined,
    };

    const newUser = registerUser(userData);
    if (newUser) {
      if (newUser.tipoUsuario === 'estudiante') {
        navigate('/PerfilEstudiante');
      } else if (newUser.tipoUsuario === 'empresa') {
        navigate('/PerfilEmpresa');
      }
    } else {
      setErrorCorreo('Error al registrar el usuario');
    }
  };

  return (
    <div className="registro-container">
      <div className="image-background" style={{ backgroundImage: `url(${tipoUsuario === 'estudiante' ? estudianteImg : empresaImg})` }}></div>
      <form onSubmit={handleSubmit} className="registro-form">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={logouni} alt="Logo Uni" style={{ width: '360px', marginTop: '2px' }} />
        </div>
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
            {tipoDocumento === 'cedula' && (
              <div className="form-group">
                <label htmlFor="documentoIdentidad">Documento de Identidad:</label>
                <input
                  type="text"
                  id="documentoIdentidad"
                  value={documentoIdentidad}
                  onChange={handleDocumentoIdentidadChange}
                  maxLength={13}
                  required
                />
              </div>
            )}
            {tipoDocumento === 'pasaporte' && (
              <div className="form-group">
                <label htmlFor="documentoIdentidad">Número de Pasaporte:</label>
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
    </div>
  );
}
