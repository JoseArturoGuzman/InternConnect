// PerfilEstudiante.jsx
import React, { useState, useEffect } from 'react';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import userImage from "../Images/user.png";
import "../Styles/StylesPages/PerfilEstudiante.css";

export function PerfilEstudiantes({ location }) {
  const [estudianteData, setEstudianteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const { user } = location.state;

    if (user) {
      setEstudianteData({
        nombre: user.nombre,
        correo: user.correo,
        institucion: user.institucion,
        area: user.area,
        carreraActual: user.carreraActual,
        pasantiasPasadas: user.pasantiasPasadas,
        pasantiasActuales: user.pasantiasActuales
      });
      setLoading(false);
    } else {
      setError('No se encontraron datos del estudiante');
      setLoading(false);
    }
  }, [location.state]);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e, field) => {
    setEstudianteData({
      ...estudianteData,
      [field]: e.target.value
    });
  };

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
          <button onClick={handleEditToggle} className={`edit-button ${editMode ? 'active' : ''}`}>
            {editMode ? 'Guardar' : 'Editar'}
          </button>
        </div>
        <main className="content">
          {/* Resto del código de PerfilEstudiantes.js */}
        </main>
      </div>
      <Footer />
    </>
  );
}
