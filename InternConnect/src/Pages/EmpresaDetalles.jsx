// EmpresaDetalle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import PasantiaCard from '../Components/CartaPasantia'; // Importar el componente PasantiaCard
import "../Styles/StylesPages/EmpresaDetalles.css";

const empresasData = {
  1: {
    name: "FullStack Labs",
    correoRRHH: "rrhh@fullstacklabs.com",
    direccion: "Santo Domingo, Distrito Nacional",
    description: "Desarrollo de software y servicios de tecnología. Proyectos innovadores y oportunidades de crecimiento.",
    logoEmpresa: "https://via.placeholder.com/150x100",
    contacto: "809-555-1234",
    industry: "Tecnología",
    image: "https://via.placeholder.com/150x100"
  },
  // Añade más empresas aquí...
};

const pasantiasData = {
  1: {
    id: 1,
    title: "Full Stack React/Java Developer",
    description: "Únete a nuestro equipo como desarrollador Full Stack. Trabajarás en proyectos emocionantes utilizando React y Java.",
    isRemunerated: true,
    dineroRemunera: "RD$ 30,000",
    duracion: "6 meses",
    idEmpresa: 1,
    modalidadPasa: "Remoto",
    requisitos: ["Conocimiento en React", "Experiencia con Java", "Habilidades de comunicación"],
    area: "Desarrollo de Software",
    estado: "Activa",
    idBeneficios: [1, 2, 3],
    rol: "Desarrollador",
    company: "FullStack Labs",
    location: "Santo Domingo, Distrito Nacional (Remoto)",
    image: "https://via.placeholder.com/150x100"
  },
  2: {
    id: 2,
    title: "Frontend Developer Intern",
    description: "Únete a nuestro equipo como desarrollador Frontend. Trabajarás en proyectos innovadores utilizando React.",
    isRemunerated: true,
    dineroRemunera: "RD$ 20,000",
    duracion: "3 meses",
    idEmpresa: 1,
    modalidadPasa: "Remoto",
    requisitos: ["Conocimiento en React", "Habilidades de comunicación"],
    area: "Desarrollo de Software",
    estado: "Activa",
    idBeneficios: [1, 2],
    rol: "Desarrollador Frontend",
    company: "FullStack Labs",
    location: "Santo Domingo, Distrito Nacional (Remoto)",
    image: "https://via.placeholder.com/150x100"
  },
  3: {
    id: 3,
    title: "Frontend Developer Intern",
    description: "Únete a nuestro equipo como desarrollador Frontend. Trabajarás en proyectos innovadores utilizando React.",
    isRemunerated: true,
    dineroRemunera: "RD$ 20,000",
    duracion: "3 meses",
    idEmpresa: 1,
    modalidadPasa: "Remoto",
    requisitos: ["Conocimiento en React", "Habilidades de comunicación"],
    area: "Desarrollo de Software",
    estado: "Activa",
    idBeneficios: [1, 2],
    rol: "Desarrollador Frontend",
    company: "FullStack Labs",
    location: "Santo Domingo, Distrito Nacional (Remoto)",
    image: "https://via.placeholder.com/150x100"
  },
  // Añade más pasantías aquí...
};

export function EmpresaDetalle() {
  const { id } = useParams();
  const empresa = empresasData[id];

  if (!empresa) {
    return <div>Empresa no encontrada</div>;
  }

  const pasantiasRelacionadas = Object.values(pasantiasData).filter(pasantia => pasantia.idEmpresa === parseInt(id));

  return (
    <div>
      <Header />
      <div className="empresa-detalle-container">
        <div className="empresa-detalle">
          <div className="empresa-info">
            <h1 className="empresa-name">{empresa.name}</h1>
            <h2 className="empresa-industry">{empresa.industry}</h2>
            <p><strong>Ubicación:</strong> {empresa.direccion}</p>
            <p><strong>Correo RRHH:</strong> {empresa.correoRRHH}</p>
            <p><strong>Contacto:</strong> {empresa.contacto}</p>
            <h3>Descripción</h3>
            <p className="empresa-description">{empresa.description}</p>
          </div>
          <div className="empresa-imagen">
            <img src={empresa.logoEmpresa} alt={empresa.name} className="empresa-logo" />
            <img src={empresa.image} alt={empresa.name} className="empresa-image" />
          </div>
        </div>
        <div className="pasantias-relacionadas">
          <h3>Pasantías Relacionadas</h3>
          <div className="internship-list">
            {pasantiasRelacionadas.length > 0 ? (
              pasantiasRelacionadas.map((pasantia, index) => (
                <PasantiaCard key={index} {...pasantia} />
              ))
            ) : (
              <p>No hay pasantías relacionadas.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
