import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer.jsx";
import "./SobreNosotros.css"; // Importa tu archivo CSS para estilos específicos

export function SobreNosotros() {
  return (
    <div className="sobre-nosotros-container">
      <Header />
      <div className="sobre-nosotros-content">
        <h1>Sobre nosotros</h1>
        
        <p>
          <strong>Historia</strong>
          <br />
          InternConnect comenzó como una idea en la mente de un grupo de amigos,
          todos ellos antiguos compañeros de universidad que, al finalizar sus
          estudios, se encontraron con la frustrante realidad de buscar
          pasantías. Durante sus propias experiencias, se dieron cuenta de que
          existía una desconexión significativa entre las expectativas de los
          estudiantes y las necesidades de las empresas. Aunque ambos lados
          estaban dispuestos a colaborar, no existía una plataforma eficiente
          que facilitara esta interacción.
        </p>
        <p>
          <strong>Misión</strong>
          <br />
          La misión de InternConnect es clara y ambiciosa: cerrar la brecha
          entre el mundo académico y el profesional, creando un entorno donde
          los estudiantes puedan encontrar oportunidades que complementen sus
          estudios y les preparen para el futuro, y donde las empresas puedan
          acceder a una fuente constante de talento emergente.
        </p>
        <p>
          <strong>Valores Fundamentales:</strong>
        </p>
        <ol>
          <li>
            <strong>Accesibilidad:</strong> Queremos que todos los estudiantes,
            sin importar su ubicación o recursos, tengan acceso a oportunidades de
            pasantías de calidad.
          </li>
          <li>
            <strong>Innovación:</strong> Estamos comprometidos a utilizar las
            últimas tecnologías para mejorar continuamente nuestra plataforma y
            la experiencia del usuario.
          </li>
          <li>
            <strong>Calidad:</strong> Nos esforzamos por asegurar que todas las
            oportunidades en nuestra plataforma sean verificadas y de alta
            calidad.
          </li>
          <li>
            <strong>Comunicación:</strong> Fomentamos una comunicación abierta y
            transparente entre los estudiantes y las empresas, facilitando una
            comprensión mutua de expectativas y necesidades.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
}
