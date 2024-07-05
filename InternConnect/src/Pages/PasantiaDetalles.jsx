import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/PasantiaDetalles.css"

const pasantiasData = {
  1: {
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

  const handleEmpresaClick = () => {
    navigate(`/empresa/${pasantia.idEmpresa}`);
  };

  return (
    <div>
      <Header />
      <div className="pasantia-detalle-container">
        <div className="pasantia-detalle">
          <div className="pasantia-info">
            <h1 className="pasantia-title">{pasantia.title}</h1>
            <h2 className="pasantia-company" onClick={handleEmpresaClick} style={{ cursor: 'pointer', color: 'blue' }}>{pasantia.company}</h2>
            <p><strong>Ubicación:</strong> {pasantia.location}</p>
            <p><strong>Remuneración:</strong> {pasantia.isRemunerated ? 'Remunerada' : 'No remunerada'}</p>
            {pasantia.isRemunerated && <p><strong>Monto Remuneración:</strong> {pasantia.dineroRemunera}</p>}
            <p><strong>Duración:</strong> {pasantia.duracion}</p>
            <p><strong>Modalidad:</strong> {pasantia.modalidadPasa}</p>
            <p><strong>Área:</strong> {pasantia.area}</p>
            <p><strong>Estado:</strong> {pasantia.estado}</p>
            <h3>Descripción</h3>
            <p className="pasantia-description">{pasantia.description}</p>
            <h3>Requisitos</h3>
            <ul className="pasantia-requirements">
              {pasantia.requisitos.map((req, index) => (
                <li key={index}>{req}</li>
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
