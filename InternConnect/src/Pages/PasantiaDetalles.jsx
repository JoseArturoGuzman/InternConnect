import React from 'react';
import { useParams } from 'react-router-dom';
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
  // ... (añade la propiedad 'image' a los demás objetos)
};

export function PasantiaDetalle() {
  const { id } = useParams();
  const pasantia = pasantiasData[id];

  if (!pasantia) {
    return <div>Pasantía no encontrada</div>;
  }

  const handleAplicar = () => {
    // Aquí puedes agregar la lógica para manejar la aplicación
    alert("Has aplicado a esta pasantía!");
  };

  return (
    <div>
      <Header />
      <div className="pasantia-detalle">
        <div className="pasantia-info">
          <h1>{pasantia.title}</h1>
          <h2>{pasantia.company}</h2>
          <p>Ubicación: {pasantia.location}</p>
          <p>Remuneración: {pasantia.isRemunerated ? 'Remunerada' : 'No remunerada'}</p>
          <h3>Descripción</h3>
          <p>{pasantia.description}</p>
          <h3>Requisitos</h3>
          <ul>
            {pasantia.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <h3>Responsabilidades</h3>
          <ul>
            {pasantia.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="pasantia-imagen-boton">
          <img src={pasantia.image} alt={pasantia.title} className="pasantia-imagen" />
          <button onClick={handleAplicar} className="aplicar-button">Aplicar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
