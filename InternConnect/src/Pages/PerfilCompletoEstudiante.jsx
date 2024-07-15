import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import userImage from "../Images/user.png";
import axios from 'axios';
import "../Styles/StylesPages/PerfilEstudiante.css";

export function PerfilCompletoEstudiante() {
  const { idEstudiante } = useParams();

  const [estudianteData, setEstudianteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!idEstudiante) {
          throw new Error('ID de estudiante no definido');
        }

        // Log para verificar el valor de idEstudiante antes de hacer la solicitud
        console.log('ID Estudiante:', idEstudiante);

        const response = await axios.get(`https://localhost:7018/api/Estudiantes/${idEstudiante}`);
        setEstudianteData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los datos del estudiante:', error);
        setError('Error al cargar los datos del estudiante');
        setLoading(false);
      }
    };
  
    fetchData();
  }, [idEstudiante]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!estudianteData) return <div>No se encontraron datos del estudiante</div>;

  return (
    <>
      <Header />
      <div className="container">
        <div className="header-container">
          <img src={userImage} alt="Usuario" className="user-image" />
          <div className="header">{estudianteData.nombre}</div>
        </div>
        <main className="content">
          <InfoField label="ID Estudiante" value={estudianteData.idEstudiante} />
          <InfoField label="Nombre" value={estudianteData.nombre} />
          <InfoField label="Correo" value={estudianteData.correo} />
          <InfoField label="ID Universidad" value={estudianteData.idUniversidad} />
          <InfoField label="ID Carrera" value={estudianteData.idCarrera} />
          <InfoField label="Dirección" value={estudianteData.direccion} />
          <InfoField label="Teléfono" value={estudianteData.telefono} />
          <InfoField label="Tipo de Documento" value={estudianteData.tipoDocumento} />
          <InfoField label="Documento" value={estudianteData.documento} />
        </main>
      </div>
      <Footer />
    </>
  );
}

const InfoField = ({ label, value }) => (
  <p>
    <span className="content-regular-bold original-label">{label}: </span>
    <span className="content-regular">{value}</span>
  </p>
);

export default PerfilCompletoEstudiante;
