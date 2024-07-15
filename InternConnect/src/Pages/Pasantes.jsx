import React, { useState, useEffect } from 'react';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';
import CuadroPasante from '../Components/CuadroPasante.jsx';
import styles from "../Styles/StylesPages/Pasantes.module.css"; // Importa los estilos CSS como un módulo
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Pasante = () => {
  const location = useLocation();
  const [pasantes, setPasantes] = useState([]);
  const [pasantia, setPasantia] = useState(null);
  const pasantiaId = location.state?.pasantiaId;

  useEffect(() => {
    const fetchPasantes = async () => {
      try {
        // Obtener aplicaciones relacionadas a la pasantía
        const aplicacionesResponse = await axios.get(`https://localhost:7018/api/Aplicacion`);
        const aplicacionesFiltradas = aplicacionesResponse.data.filter(aplicacion => aplicacion.idPasantia === pasantiaId);

        // Obtener detalles de estudiantes y pasantías
        const estudiantesPromises = aplicacionesFiltradas.map(aplicacion =>
          axios.get(`https://localhost:7018/api/Estudiantes/${aplicacion.idEstudiante}`)
        );
        const estudiantesResponses = await Promise.all(estudiantesPromises);

        const pasantiasPromises = aplicacionesFiltradas.map(aplicacion =>
          axios.get(`https://localhost:7018/api/Pasantias/${aplicacion.idPasantia}`)
        );
        const pasantiasResponses = await Promise.all(pasantiasPromises);

        const pasantesData = aplicacionesFiltradas.map((aplicacion, index) => ({
          idAplicacion: aplicacion.idAplicacion,
          idEstudiante: aplicacion.idEstudiante,
          idPasantia: aplicacion.idPasantia,
          estudiante: estudiantesResponses[index].data,
          fechaAplicacion: aplicacion.fechaAplicacion,
          estadoAplicacion: aplicacion.estadoAplicacion,
          pasantia: pasantiasResponses[index].data,
        }));

        setPasantes(pasantesData);

        // Obtener detalles de la pasantía seleccionada
        const pasantiaResponse = await axios.get(`https://localhost:7018/api/Pasantias/${pasantiaId}`);
        setPasantia(pasantiaResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (pasantiaId) {
      fetchPasantes();
    }
  }, [pasantiaId]);

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
                <CuadroPasante
                  key={pasante.idAplicacion}
                  idAplicacion={pasante.idAplicacion}
                  estudiante={pasante.estudiante}
                  fechaAplicacion={pasante.fechaAplicacion}
                  estadoAplicacion={pasante.estadoAplicacion}
                  idPasantia={pasante.idPasantia}
                  pasantia={pasante.pasantia}
                />
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
