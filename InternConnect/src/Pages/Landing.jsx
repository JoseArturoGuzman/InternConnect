import React from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import "../Styles/StylesPages/Landing.css";
import BackgroundImage from "../Images/ImagenLanding.png"; // Asegúrate de usar la ruta correcta para tu imagen
import Empresa1 from "../Images/Empresa1.png";
import Empresa2 from "../Images/Empresa2.png";

export function Landing() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <div className="background-container">
          <img src={BackgroundImage} alt="Background" className="background-image" />
          <div className="overlay">
            <h1 className="overlay-text">¡Potencia tu talento con las mejores oportunidades de pasantía!</h1>
          </div>
        </div>
        <section>
          <h2>Nuestras principales empresas asociadas.</h2>
          <div className='empresas-asociadas'>
            <img src={Empresa1} alt="Empresa 1" className="empresa-imagen" />
            <img src={Empresa2} alt="Empresa 2" className="empresa-imagen" />
            {/* Añade más imágenes de empresas según sea necesario */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
