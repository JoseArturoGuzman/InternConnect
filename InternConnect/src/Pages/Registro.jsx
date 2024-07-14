import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import estudianteImg from '../Images/Estudiante.jpg';
import empresaImg from '../Images/Empresa.jpg';
import logouni from '../Images/NewLogo.png';
import '../Styles/StylesPages/RegistroEmpresa.css';

export function Registro() {
  const navigate = useNavigate();

  // Estado para manejar datos del formulario
  const [tipoUsuario, setTipoUsuario] = useState('estudiante');
  const [nombre, setNombre] = useState('');
  const [rnc, setRnc] = useState('');
  const [idUniversidad, setIdUniversidad] = useState('');
  const [idCarrera, setIdCarrera] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoDocumentoId, setTipoDocumentoId] = useState('');
  const [documentoIdentidad, setDocumentoIdentidad] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [errors, setErrors] = useState({});

  // Estados para almacenar datos obtenidos del servidor
  const [universidades, setUniversidades] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [tiposDocumento, setTiposDocumento] = useState([]);

  // Obtener datos del servidor al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [univRes, carrerasRes, tiposDocRes] = await Promise.all([
          axios.get('https://localhost:7018/api/Universidad'),
          axios.get('https://localhost:7018/api/Carreras'),
          axios.get('https://localhost:7018/api/TipoDocumento')
        ]);
        setUniversidades(univRes.data);
        setCarreras(carrerasRes.data);
        setTiposDocumento(tiposDocRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Manejar cambios en el campo de documento de identidad
  const handleDocumentoIdentidadChange = (event) => {
    setDocumentoIdentidad(event.target.value);
  };

  // Validar el formulario antes de enviarlo
  const validateForm = () => {
    const newErrors = {};
    if (!nombre) newErrors.nombre = 'El nombre es obligatorio';
    if (tipoUsuario === 'empresa' && !rnc) newErrors.rnc = 'El RNC es obligatorio';
    if (tipoUsuario === 'estudiante') {
      if (!idUniversidad) newErrors.idUniversidad = 'La universidad es obligatoria';
      if (!idCarrera) newErrors.idCarrera = 'La carrera es obligatoria';
      if (!tipoDocumentoId) newErrors.tipoDocumentoId = 'El tipo de documento es obligatorio';
      if (!documentoIdentidad) newErrors.documentoIdentidad = 'El documento de identidad es obligatorio';
    }
    if (!correo) newErrors.correo = 'El correo es obligatorio';
    if (!contraseña) newErrors.contraseña = 'La contraseña es obligatoria';
    if (!confirmarContraseña) newErrors.confirmarContraseña = 'La confirmación de la contraseña es obligatoria';
    if (contraseña && contraseña.length < 8) newErrors.contraseña = 'La contraseña debe tener al menos 8 caracteres';
    if (contraseña && confirmarContraseña && contraseña !== confirmarContraseña) newErrors.confirmarContraseña = 'Las contraseñas no coinciden';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        let userData;
        if (tipoUsuario === 'estudiante') {
          userData = {
            nombre,
            correo,
            idUniversidad: parseInt(idUniversidad),
            idCarrera: parseInt(idCarrera),
            direccion: direccion || "No especificada",
            telefono: telefono || "No especificado",
            tipoDocumento: parseInt(tipoDocumentoId),
            documento: documentoIdentidad,
            contraseñaHash: contraseña
          };

          console.log("Campos enviados en el POST:", userData);

          const response = await axios.post('https://localhost:7018/api/Estudiantes/Register', userData);
          console.log("Registro exitoso:", response.data);
          navigate('/PerfilEstudiante');
        } else {
          console.log("Registro de empresa no implementado");
        }
      } catch (error) {
        console.error("Error en el registro:", error);
        setErrors({ general: 'Error al registrar el usuario' });
      }
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
          {errors.nombre && <div style={{ color: 'red' }}>{errors.nombre}</div>}
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
            {errors.rnc && <div style={{ color: 'red' }}>{errors.rnc}</div>}
          </div>
        )}
        {tipoUsuario === 'estudiante' && (
          <>
            <div className="form-group">
              <label htmlFor="idUniversidad">Universidad:</label>
              <select
                id="idUniversidad"
                value={idUniversidad}
                onChange={(e) => setIdUniversidad(e.target.value)}
                required
              >
                <option value="">Selecciona una universidad</option>
                {universidades.map(univ => (
                  <option key={univ.idUniversidad} value={univ.idUniversidad}>
                    {univ.nombre}
                  </option>
                ))}
              </select>
              {errors.idUniversidad && <div style={{ color: 'red' }}>{errors.idUniversidad}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="idCarrera">Carrera:</label>
              <select
                id="idCarrera"
                value={idCarrera}
                onChange={(e) => setIdCarrera(e.target.value)}
                required
              >
                <option value="">Selecciona una carrera</option>
                {carreras.map(carrera => (
                  <option key={carrera.idCarrera} value={carrera.idCarrera}>
                    {carrera.nombre}
                  </option>
                ))}
              </select>
              {errors.idCarrera && <div style={{ color: 'red' }}>{errors.idCarrera}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipoDocumentoId">Tipo de Documento:</label>
              <select
                id="tipoDocumentoId"
                value={tipoDocumentoId}
                onChange={(e) => setTipoDocumentoId(e.target.value)}
                required
              >
                <option value="">Selecciona un tipo de documento</option>
                {tiposDocumento.map(tipo => (
                  <option key={tipo.tipoDocumentoId} value={tipo.tipoDocumentoId}>
                    {tipo.nombreTipoDocumento}
                  </option>
                ))}
              </select>
              {errors.tipoDocumentoId && <div style={{ color: 'red' }}>{errors.tipoDocumentoId}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="documentoIdentidad">Documento de Identidad:</label>
              <input
                type="text"
                id="documentoIdentidad"
                value={documentoIdentidad}
                onChange={handleDocumentoIdentidadChange}
                required
              />
              {errors.documentoIdentidad && <div style={{ color: 'red' }}>{errors.documentoIdentidad}</div>}
            </div>
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
          {errors.correo && <div style={{ color: 'red' }}>{errors.correo}</div>}
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
          {errors.contraseña && <div style={{ color: 'red' }}>{errors.contraseña}</div>}
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
          {errors.confirmarContraseña && <div style={{ color: 'red' }}>{errors.confirmarContraseña}</div>}
        </div>
        {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
        <div className="form-group">
          <button type="submit">Registrarse</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          ¿Ya tienes una cuenta? <a href="/Login">Inicia sesión aquí</a>
        </div>
      </form>
    </div>
  );
}

export default Registro;
