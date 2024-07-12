import React from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import CuadroLargo from '../Components/CuadroPasante.jsx';
import styles from "../Styles/StylesPages/Pasantes.module.css"; // Importa los estilos CSS como un módulo
import { useLocation } from 'react-router-dom';

const Pasante = () => {
  const location = useLocation();
  const pasantes = location.state?.pasantes || [];

  const handleVolverClick = () => {
    // Lógica para redirigir a la página anterior o realizar alguna acción de retorno
    console.log('Volver');
  };

  return (
    <div className={styles['page-container']}>
      <Header />
      <main className={styles['main-content']}>
        <section className={styles['pasante-section']}>
          <div className={styles['titulo-volver']}>
            <button className={styles['btn-volver']} onClick={handleVolverClick}>Volver</button>
            <h1>Pasantes</h1>
          </div>
          <div className="cuadros-largos">
            {pasantes.length === 0 ? (
              <p>No hay pasantes para esta pasantía.</p>
            ) : (
              pasantes.map(pasante => (
                <CuadroLargo key={pasante.id} pasantia={pasante.pasantia} estudiante={pasante.estudiante} />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pasante;
