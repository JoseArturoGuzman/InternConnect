import React, { useState, useEffect } from 'react';
import styles from "../Styles/StylesComponents/CuadroPasante.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CuadroPasante = ({ estudiante, fechaAplicacion, estadoAplicacion, idAplicacion, idEstudiante, idPasantia, pasantia }) => {
  const [universidad, setUniversidad] = useState(null);
  const [carrera, setCarrera] = useState(null);
  const [estado, setEstado] = useState(estadoAplicacion);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchUniversidad = async () => {
      try {
        if (estudiante.idUniversidad) {
          const universidadResponse = await axios.get(`https://localhost:7018/api/Universidad/${estudiante.idUniversidad}`);
          setUniversidad(universidadResponse.data.nombre);
        }
      } catch (error) {
        console.error("Error fetching universidad:", error);
      }
    };

    const fetchCarrera = async () => {
      try {
        if (estudiante.idCarrera) {
          const carreraResponse = await axios.get(`https://localhost:7018/api/Carreras/${estudiante.idCarrera}`);
          setCarrera(carreraResponse.data.nombre);
        }
      } catch (error) {
        console.error("Error fetching carrera:", error);
      }
    };

    fetchUniversidad();
    fetchCarrera();
  }, [estudiante.idUniversidad, estudiante.idCarrera]);

  const handleProfileClick = () => {
    console.log('ID Estudiante en handleProfileClick:', idEstudiante); // Log para verificar idEstudiante antes de la navegación
    navigate(`/perfil-completo/${idEstudiante}/${idPasantia}`);
  };

  const handleAcceptClick = async () => {
    const data = {
      idAplicacion: idAplicacion,
      idEstudiante: idEstudiante,
      idPasantia: idPasantia,
      estadoAplicacion: 'aceptado',
      fechaAplicacion: fechaAplicacion
    };

    axios.defaults.headers.common['Content-Type'] = 'application/json';

    try {
      const response = await axios.put(`https://localhost:7018/api/Aplicacion/${idAplicacion}`, data);
      console.log('Respuesta de la API al aceptar:', response.data);
      setEstado('aceptado');
    } catch (error) {
      console.error('Error al aceptar la aplicación:', error);
      console.error('Detalles del error:', error.response.data);
    }
  };

  const handleRejectClick = async () => {
    const data = {
      idAplicacion: idAplicacion,
      idEstudiante: idEstudiante,
      idPasantia: idPasantia,
      estadoAplicacion: 'rechazado',
      fechaAplicacion: fechaAplicacion
    };

    axios.defaults.headers.common['Content-Type'] = 'application/json';

    try {
      const response = await axios.put(`https://localhost:7018/api/Aplicacion/${idAplicacion}`, data);
      console.log('Respuesta de la API al rechazar:', response.data);
      setEstado('rechazado');
    } catch (error) {
      console.error('Error al rechazar la aplicación:', error);
    }
  };

  console.log('ID Estudiante en CuadroPasante:', idEstudiante); // Log para verificar idEstudiante al renderizar CuadroPasante

  return (
    <div className={styles['cuadro-largo']}>
      <div className={styles['info-estudiante']}>
        <h3>Estudiante:</h3>
        <p><strong>Nombre:</strong> {estudiante.nombre}</p>
        <p><strong>Correo:</strong> {estudiante.correo}</p>
        <p><strong>Universidad:</strong> {universidad}</p>
        <p><strong>Carrera:</strong> {carrera}</p>
        <p><strong>Dirección:</strong> {estudiante.direccion}</p>
        <p><strong>Teléfono:</strong> {estudiante.telefono}</p>
      </div>
      <div className={styles['imagen-estudiante']}>
        <img src={estudiante.profileImageUrl} alt="Foto de perfil" />
      </div>
      <div className={styles.botones}>
        <button className={styles['btn-perfil-completo']} onClick={handleProfileClick}>Perfil Completo</button>
        <button className={styles['btn-aceptar']} onClick={handleAcceptClick}>Aceptar</button>
        <button className={styles['btn-eliminar']} onClick={handleRejectClick}>Rechazar</button>
      </div>
    </div>
  );
};

export default CuadroPasante;
