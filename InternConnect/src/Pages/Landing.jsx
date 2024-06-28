import React from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import "../Styles/StylesPages/Landing.css";
import BackgroundImage from "../Images/ImagenLanding.png"; // Asegúrate de usar la ruta correcta para tu imagen

export function Landing() {
  return (
    <main className="main-container">
      <Header />
      <div className="background-container">
        <img src={BackgroundImage} alt="Background" className="background-image" />
        <div className="overlay">
          <h1 className="overlay-text">Potencia tu talento con las 
          mejores oportunidades de pasantia!
          </h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}
