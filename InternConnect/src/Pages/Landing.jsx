import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [companiesMap, setCompaniesMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pasantiasResponse, empresasResponse] = await Promise.all([
          axios.get("https://localhost:7018/api/Pasantias"),
          axios.get("https://localhost:7018/api/Empresas")
        ]);

        // Crear un mapa de empresas
        const companiesMap = {};
        empresasResponse.data.forEach(company => {
          companiesMap[company.idEmpresa] = company.nombre;
        });
        setCompaniesMap(companiesMap);

        // Establecer las pasantías y empresas
        setPasantias(pasantiasResponse.data);
        setEmpresas(empresasResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Función para construir la URL del logo
  const getLogoUrl = (logoFileName) => {
    return logoFileName ? `https://localhost:7018/uploads/${logoFileName}` : null;
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
              <CartaPasantia
                key={pasantia.idPasantia}
                idPasantia={pasantia.idPasantia}
                titulo={pasantia.titulo}
                nombreEmpresa={companiesMap[pasantia.idEmpresa] || 'Empresa desconocida'}
                modalidadPasa={pasantia.modalidadPasa}
                esRemuneracion={pasantia.esRemuneracion}
              />
            ))}
          </div>
        </section>

        <section className="empresas-asociadas">
          <h2>Nuestras principales empresas asociadas:</h2>
          <div className="empresas-list">
            {empresas.slice(0, 5).map(empresa => (
              <CartaEmpresa
                key={empresa.idEmpresa}
                id={empresa.idEmpresa}
                name={empresa.nombre}
                location={empresa.direccion}
                image={getLogoUrl(empresa.logoEmpresa)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}