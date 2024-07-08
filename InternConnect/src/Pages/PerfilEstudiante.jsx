import React, { useState, useEffect } from 'react';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import userImage from "../Images/user.png"; // Ajusta la ruta a la imagen de usuario
import "../Styles/StylesPages/PerfilEstudiante.css";

// Simulación de datos de la API
const API_DATA = {
  nombre: "José Ángel Florentino Pesquera",
  correo: "josengelflorentino@gmail.com",
  institucion: "INTEC",
  area: "Ingeniería",
  carreraActual: "Ingeniería de Software",
  pasantiasPasadas: "Aún no se han cursado pasantías",
  pasantiasActuales: "Aún no se han cursado pasantías"
};

export function PerfilEstudiantes() {
  const [estudianteData, setEstudianteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEstudianteData(API_DATA);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos del estudiante');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <EditableInput 
            editMode={editMode} 
            value={estudianteData.correo} 
            onChange={(e) => handleInputChange(e, 'correo')} 
            className="content-regular"
            label="Correo: "
          />
          <EditableInput 
            editMode={editMode} 
            value={estudianteData.institucion} 
            onChange={(e) => handleInputChange(e, 'institucion')} 
            className="content-regular"
            label="Institución: "
          />
          <EditableInput 
            editMode={editMode} 
            value={estudianteData.area} 
            onChange={(e) => handleInputChange(e, 'area')} 
            className="content-regular"
            label="Área: "
          />
          <EditableInput 
            editMode={editMode} 
            value={estudianteData.carreraActual} 
            onChange={(e) => handleInputChange(e, 'carreraActual')} 
            className="content-regular"
            label="Carrera Actual:"
          />
          <EditableInput 
            editMode={editMode} 
            value={estudianteData.pasantiasPasadas} 
            onChange={(e) => handleInputChange(e, 'pasantiasPasadas')} 
            className="content-regular"
            label="Pasantías Pasadas: "
          />
          <EditableInput 
            editMode={editMode} 
            value={estudianteData.pasantiasActuales} 
            onChange={(e) => handleInputChange(e, 'pasantiasActuales')} 
            className="content-regular"
            label="Pasantías Actuales: "
          />
        </main>
      </div>
      <Footer />
    </>
  );
}

const EditableInput = ({ editMode, value, onChange, className, label }) => {
  if (editMode) {
    return (
      <div className="editable-input">
        <span className={`${className}-bold original-label`}>{label}</span>
        <input 
          type="text" 
          value={value} 
          onChange={onChange} 
          className={`${className} editable`} 
        />
      </div>
    );
  }

  return (
    <p>
      <span className={`${className}-bold original-label`}>{label}</span>
      <span className={className}>{value}</span>
    </p>
  );
};
