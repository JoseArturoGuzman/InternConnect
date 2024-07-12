import React, { useState, useEffect } from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import CartaPasantia from '../Components/CartaPasantia.jsx';
import CartaEmpresa from '../Components/CartaEmpresa.jsx';
import "../Styles/StylesPages/Landing.css";
import BackgroundImage from "../Images/ImagenLanding.png";
import { Link } from 'react-router-dom';
export function Landing() {
  const [pasantias, setPasantias] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    // Simular la obtención de datos de pasantías
    const fetchPasantias = () => {
      const pasantiasData = [
        { id: 1, title: 'Full Stack React/Java Developer', company: 'FullStack Labs', location: 'Santo Domingo, Distrito Nacional (Remoto)', remunerated: true, image: 'https://via.placeholder.com/150x100' },
        { id: 2, title: 'Frontend Developer', company: 'Microsoft', location: 'Santo Domingo, Distrito Nacional (Remoto)', remunerated: true, image: 'https://via.placeholder.com/150x100' },
        { id: 3, title: 'DevOps Engineer', company: 'Shopify', location: 'Toronto, Canada (Remoto)', remunerated: false, image: 'https://via.placeholder.com/150x100' },
        { id: 4, title: 'Desarrollador Web', company: 'Grupo Popular', location: 'Santo Domingo, Distrito Nacional', remunerated: true, image: 'https://via.placeholder.com/150x100' },
        { id: 5, title: 'Analisis de Datos', company: 'Banco BHD Leon', location: 'Santo Domingo, Distrito Nacional', remunerated: true, image: 'https://via.placeholder.com/150x100' },
      ];
      setPasantias(pasantiasData);
    };

    // Simular la obtención de datos de empresas
    const fetchEmpresas = () => {
      const empresasData = [
        { id: 1, name: 'FullStack Labs', location: 'Sacramento, California', image: 'https://via.placeholder.com/150x100' },
        { id: 2, name: 'FullStack Labs', location: 'Sacramento, California', image: 'https://via.placeholder.com/150x100' },
        { id: 3, name: 'FullStack Labs', location: 'Sacramento, California', image: 'https://via.placeholder.com/150x100' },
        { id: 4, name: 'FullStack Labs', location: 'Sacramento, California', image: 'https://via.placeholder.com/150x100' },
        { id: 5, name: 'FullStack Labs', location: 'Sacramento, California', image: 'https://via.placeholder.com/150x100' },
      ];
      setEmpresas(empresasData);
    };

    fetchPasantias();
    fetchEmpresas();
  }, []);

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

        <section className="connect-talent">
          <p>Conecta tu talento con las mejores oportunidades de pasantía y da los primeros pasos hacia una carrera exitosa.</p>
          <div className="auth-buttons">
          <Link to="/login" className="btn-iniciar-sesion">Iniciar sesión</Link>
          <Link to="/registro" className="btn-registrarse">Registrarse</Link>
          </div>
        </section>

        <section className="ultimas-pasantias">
          <h2>Nuestras últimas pasantías:</h2>
          <div className="pasantias-list">
            {pasantias.slice(0, 5).map(pasantia => (
              <CartaPasantia key={pasantia.id} {...pasantia} />
            ))}
          </div>
        </section>

        <section className="empresas-asociadas">
          <h2>Nuestras principales empresas asociadas:</h2>
          <div className="empresas-list">
            {empresas.map(empresa => (
              <CartaEmpresa key={empresa.id} {...empresa} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
