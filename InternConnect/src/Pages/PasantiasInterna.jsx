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
    },
    {
      id: 2,
      titulo: 'Data Science Intern',
      ubicacion: 'Remote',
      remuneracion: 'No remunerada',
      visible: true,
    },
    {
      id: 3,
      titulo: 'UX/UI Design Internship',
      ubicacion: 'New York, NY (Remote)',
      remuneracion: 'Remunerada',
      visible: true,
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
                  <button className={styles['action-button']}>Pasantes</button>
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
