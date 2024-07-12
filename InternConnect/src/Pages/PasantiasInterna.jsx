import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalEliminar from '../Components/EliminarPasantia';
import styles from '../Styles/StylesPages/PasantiasInterna.module.css'; // Importa el archivo CSS Module
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

export function PasantiasInterna() {
  const [pasantias, setPasantias] = useState([
    {
      id: 1,
      titulo: 'Full Stack React/Java Developer - Remote - Latin America',
      ubicacion: 'Santo Domingo, Distrito Nacional (Remoto)',
      remuneracion: 'Remunerada',
      visible: true,
      pasantes: [
        {
          id: 1,
          name: 'Juan Pérez',
          career: 'Ingeniería en Informática',
          university: 'Universidad de Ejemplo',
          profileImageUrl: 'https://via.placeholder.com/150',
        },
        // Agregar más pasantes según sea necesario
      ],
    },
    {
      id: 2,
      titulo: 'Data Science Intern',
      ubicacion: 'Remote',
      remuneracion: 'No remunerada',
      visible: true,
      pasantes: [
        {
          id: 2,
          name: 'María Gómez',
          career: 'Diseño Gráfico',
          university: 'Otra Universidad',
          profileImageUrl: 'https://via.placeholder.com/150',
        },
        // Agregar más pasantes según sea necesario
      ],
    },
    {
      id: 3,
      titulo: 'UX/UI Design Internship',
      ubicacion: 'New York, NY (Remote)',
      remuneracion: 'Remunerada',
      visible: true,
      pasantes: [
        // Puedes inicializar con los pasantes correspondientes si ya tienes la información
      ],
    },
    // Agrega más objetos de pasantías aquí si es necesario
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [pasantiaAEliminar, setPasantiaAEliminar] = useState(null);
  const navigate = useNavigate();

  const handleEliminarClick = (pasantia) => {
    setPasantiaAEliminar(pasantia);
    setModalVisible(true);
  };

  const confirmarEliminar = () => {
    setPasantias(pasantias.map((p) => (p.id === pasantiaAEliminar.id ? { ...p, visible: false } : p)));
    setModalVisible(false);
  };

  const cancelarEliminar = () => {
    setModalVisible(false);
  };

  const irACrearPasantia = () => {
    navigate('/crear-pasantia');
  };

  const irAPasantes = (pasantes) => {
    // Navegar a la página de pasantes con los pasantes específicos de esta pasantía
    navigate('/pasantes', { state: { pasantes } });
  };

  return (
    <div className={styles['pasantias-internas']}>
      <Header />
      <div className={styles['content-wrapper']}>
        <div className={styles.buscador}>
          <input type="text" placeholder="Buscar Pasantía" className={styles['search-input']} />
          <button className={styles['crear-pasantia']} onClick={irACrearPasantia}>
            Crear Pasantía
          </button>
        </div>
        <h1 className={styles['main-title']}>Pasantías en la Empresa</h1>
        <div className={styles['internship-list']}>
          {pasantias
            .filter((p) => p.visible)
            .map((pasantia) => (
              <div key={pasantia.id} className={styles['internship-card']}>
                <div className={styles['internship-card-header']}>
                  <h3 className={styles['internship-title']}>{pasantia.titulo}</h3>
                </div>
                <div className={styles['internship-card-body']}>
                  <p className={styles['internship-card-location']}>{pasantia.ubicacion}</p>
                  <p className={styles['internship-card-remuneration']}>{pasantia.remuneracion}</p>
                </div>
                <div className={styles['internship-card-actions']}>
                  <button className={`${styles['action-button']} ${styles['edit-button']}`} onClick={() => handleEditarClick(pasantia)}>
                    Editar
                  </button>
                  <button className={`${styles['action-button']} ${styles['delete-button']}`} onClick={() => handleEliminarClick(pasantia)}>
                    Eliminar
                  </button>
                  <button className={styles['action-button']} onClick={() => irAPasantes(pasantia.pasantes)}>
                    Pasantes
                  </button>
                </div>
              </div>
            ))}
        </div>
        {modalVisible && <ModalEliminar onConfirm={confirmarEliminar} onCancel={cancelarEliminar} />}
      </div>
      <Footer />
    </div>
  );
}
