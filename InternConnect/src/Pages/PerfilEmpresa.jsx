import React, { useState, useEffect } from 'react';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import logoEmpresa from "../Images/Empresa1.png";
import "../Styles/StylesPages/PerfilEmpresa.css";

// Simulación de datos de la API
const API_DATA = {
  nombre: "FullStack Labs",
  correo: "FullStackLabs@gmail.com",
  direccion: "Cra. 57 #99A-65, Riomar, Barranquilla, Atlántico, Colombia",
  pasantiasActivas: 20,
  descripcion: "FullStack is a technology partner that builds industry-leading software solutions through our FullStack Talent Network and FullStack Labs.",
  linkedin: "https://www.linkedin.com/company/fullstack-labs/life/ourcompany/",
  sitioWeb: "https://www.fullstack.com/"
};

export function PerfilEmpresa() {
  const [empresaData, setEmpresaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulación de una espera de datos (1 segundo)
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEmpresaData(API_DATA);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos de la empresa');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e, field) => {
    setEmpresaData({
      ...empresaData,
      [field]: e.target.value
    });
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!empresaData) return <div>No se encontraron datos de la empresa</div>;

  return (
    <>
      <Header />
      <div className="container">
        <div className="header-container">
          <img src={logoEmpresa} alt="Logo Empresa" className="company-logo" />
          <div className="header">{empresaData.nombre}</div>
          <button onClick={handleEditToggle} className={`edit-button ${editMode ? 'active' : ''}`}>
            {editMode ? 'Guardar' : 'Editar'}
          </button>
        </div>
        <main className="content">
          <EditableInput 
            editMode={editMode} 
            value={empresaData.correo} 
            onChange={(e) => handleInputChange(e, 'correo')} 
            className="content-regular"
            label="Correo: "
          />
          <EditableInput 
            editMode={editMode} 
            value={empresaData.direccion} 
            onChange={(e) => handleInputChange(e, 'direccion')} 
            className="content-regular"
            label="Dirección: "
          />
          <EditableInput 
            editMode={editMode} 
            value={empresaData.pasantiasActivas.toString()} 
            onChange={(e) => handleInputChange(e, 'pasantiasActivas')} 
            className="content-regular"
            label="Pasantías Activas: "
          />
          <EditableInput 
            editMode={editMode} 
            value={empresaData.descripcion} 
            onChange={(e) => handleInputChange(e, 'descripcion')} 
            className="content-regular"
            label="Descripción:"
          />
          <EditableInput 
            editMode={editMode} 
            value={empresaData.linkedin} 
            onChange={(e) => handleInputChange(e, 'linkedin')} 
            className="content-link"
            label="LinkedIn:"
          />
          <EditableInput 
            editMode={editMode} 
            value={empresaData.sitioWeb} 
            onChange={(e) => handleInputChange(e, 'sitioWeb')} 
            className="content-link"
            label="Sitio Web:"
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
