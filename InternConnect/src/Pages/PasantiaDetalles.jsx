import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/PasantiaDetalles.css"

const pasantiasData = {
  1: {
    title: "Full Stack React/Java Developer",
    company: "FullStack Labs",
    location: "Santo Domingo, Distrito Nacional (Remoto)",
    isRemunerated: true,
    description: "Únete a nuestro equipo como desarrollador Full Stack. Trabajarás en proyectos emocionantes utilizando React y Java.",
    requirements: ["Conocimiento en React", "Experiencia con Java", "Habilidades de comunicación"],
    responsibilities: ["Desarrollar nuevas características", "Mantener código existente", "Colaborar con el equipo de diseño"],
    image: "https://via.placeholder.com/150x100"
  },
  // Añade más pasantías aquí...
};

export function PasantiaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pasantia = pasantiasData[id];

  if (!pasantia) {
    return <div>Pasantía no encontrada</div>;
  }

  const handleAplicar = () => {
    // Redirigir a la página de login
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div className="pasantia-detalle-container">
        <div className="pasantia-detalle">
          <div className="pasantia-info">
            <h1 className="pasantia-title">{pasantia.title}</h1>
            <h2 className="pasantia-company">{pasantia.company}</h2>
            <p><strong>Ubicación:</strong> {pasantia.location}</p>
            <p><strong>Remuneración:</strong> {pasantia.isRemunerated ? 'Remunerada' : 'No remunerada'}</p>
            <h3>Descripción</h3>
            <p className="pasantia-description">{pasantia.description}</p>
            <h3>Requisitos</h3>
            <ul className="pasantia-requirements">
              {pasantia.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h3>Responsabilidades</h3>
            <ul className="pasantia-responsibilities">
              {pasantia.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          <div className="pasantia-imagen-boton">
            <img src={pasantia.image} alt={pasantia.title} className="pasantia-image" />
            <button onClick={handleAplicar} className="aplicar-button">Aplicar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
