import React, { useRef, useEffect, useState } from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import "../Styles/StylesPages/Landing.css";
import BackgroundImage from "../Images/ImagenLanding.png"; // Asegúrate de usar la ruta correcta para tu imagen
import Empresa1 from "../Images/Empresa1.png";
import Empresa2 from "../Images/Empresa2.png";

export function Landing() {
  const [empresas, setEmpresas] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Simula una llamada a la base de datos para obtener las imágenes de las empresas
    const fetchEmpresas = () => {
      const empresaData = [
        { id: 1, src: Empresa1, alt: 'Empresa 1' },
        { id: 2, src: Empresa2, alt: 'Empresa 2' },
        { id: 3, src: Empresa1, alt: 'Empresa 1' },
        { id: 4, src: Empresa2, alt: 'Empresa 2' },
        { id: 5, src: Empresa1, alt: 'Empresa 1' },
        { id: 6, src: Empresa2, alt: 'Empresa 2' },
        { id: 7, src: Empresa1, alt: 'Empresa 1' },
        { id: 8, src: Empresa2, alt: 'Empresa 2' },
      ];

      setEmpresas(empresaData);
    };

    fetchEmpresas();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollContainerRef.current.scrollLeft = scrollLeft - scrollWidth / 2;
        } else if (scrollLeft <= 0) {
          scrollContainerRef.current.scrollLeft = scrollWidth / 2;
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const autoScroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 300; // Ajusta el valor según sea necesario
      }
    };

    const intervalId = setInterval(autoScroll, 0); // Desplazamiento automático cada 2 segundos

    return () => clearInterval(intervalId);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // Ajusta el valor según sea necesario
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Ajusta el valor según sea necesario
    }
  };

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
          <div className="scroll-buttons">
            <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
            <div className="empresas-asociadas" ref={scrollContainerRef}>
              {[...empresas, ...empresas].map((empresa, idx) => (
                <img key={idx} src={empresa.src} alt={empresa.alt} className="empresa-imagen" />
              ))}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
