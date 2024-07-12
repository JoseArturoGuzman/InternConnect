import React from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import CuadroLargo from '../Components/CuadroPasante.jsx';

const Pasante = () => {
  // Datos simulados de pasantes (pueden ser obtenidos de una API)
  const pasantes = [
    {
      id: 1,
      pasantia: {
        id: 1,
        title: 'Desarrollador Full Stack',
        company: 'Tech Solutions',
        location: 'Ciudad de Ejemplo',
        remunerated: true,
      },
      estudiante: {
        id: 1,
        name: 'Juan Pérez',
        career: 'Ingeniería en Informática',
        university: 'Universidad de Ejemplo',
        profileImageUrl: 'https://via.placeholder.com/150',
      },
    },
    {
      id: 2,
      pasantia: {
        id: 2,
        title: 'Diseñador UI/UX',
        company: 'Creative Designs',
        location: 'Otra Ciudad',
        remunerated: false,
      },
      estudiante: {
        id: 2,
        name: 'María Gómez',
        career: 'Diseño Gráfico',
        university: 'Otra Universidad',
        profileImageUrl: 'https://via.placeholder.com/150',
      },
    },
    // Puedes añadir más objetos de pasantes según sea necesario
  ];

  const handleVolverClick = () => {
    // Lógica para redirigir a la página anterior o realizar alguna acción de retorno
    console.log('Volver');
  };

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <section className="pasante-section">
          <div className="titulo-volver">
            <h1>Pasantes</h1>
            <button className="btn-volver" onClick={handleVolverClick}>Volver</button>
          </div>
          <div className="cuadros-largos">
            {pasantes.map(pasante => (
              <CuadroLargo key={pasante.id} pasantia={pasante.pasantia} estudiante={pasante.estudiante} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pasante;
