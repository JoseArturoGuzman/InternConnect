import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/EmpresaDetalles.css";

const empresasData = {
  1: {
    name: "FullStack Labs",
    industry: "Tecnología",
    location: "Santo Domingo, Distrito Nacional",
    description: "Desarrollo de software y servicios de tecnología. Proyectos innovadores y oportunidades de crecimiento.",
    employees: 500,
    image: "https://via.placeholder.com/150x100"
  },
  // Añade más empresas aquí...
};

export function EmpresaDetalle() {
  const { id } = useParams();
  const empresa = empresasData[id];

  if (!empresa) {
    return <div>Empresa no encontrada</div>;
  }

  return (
    <div>
      <Header />
      <div className="empresa-detalle-container">
        <div className="empresa-detalle">
          <div className="empresa-info">
            <h1 className="empresa-name">{empresa.name}</h1>
            <h2 className="empresa-industry">{empresa.industry}</h2>
            <p><strong>Ubicación:</strong> {empresa.location}</p>
            <p><strong>Empleados:</strong> {empresa.employees}</p>
            <h3>Descripción</h3>
            <p className="empresa-description">{empresa.description}</p>
          </div>
          <div className="empresa-imagen">
            <img src={empresa.image} alt={empresa.name} className="empresa-image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
