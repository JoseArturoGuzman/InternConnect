import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalEliminar from '../Components/EliminarPasantia';
import styles from '../Styles/StylesPages/PasantiasInterna.module.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import axios from 'axios';

export function PasantiasInterna() {
  const [pasantias, setPasantias] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pasantiaAEliminar, setPasantiaAEliminar] = useState(null);
  const navigate = useNavigate();

  // Simulación del id de empresa del usuario actual
  const idEmpresa = 2; // Debes ajustar esto según cómo obtienes el id de la empresa del usuario

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7018/api/Pasantias');
        // Filtrar pasantías por id de empresa
        const pasantiasEmpresa = response.data.filter(pasantia => pasantia.idEmpresa === idEmpresa);
        setPasantias(pasantiasEmpresa);
      } catch (error) {
        console.error('Error fetching internships:', error);
        // Aquí puedes añadir lógica para mostrar un mensaje de error al usuario si lo deseas
      }
    };

    fetchData();
  }, [idEmpresa]); // Dependencia de idEmpresa para volver a cargar cuando cambia

  const handleEliminarClick = (pasantia) => {
    setPasantiaAEliminar(pasantia);
    setModalVisible(true);
  };

  const confirmarEliminar = async () => {
    try {
      // Lógica para eliminar la pasantía utilizando la API
      await axios.delete(`https://localhost:7018/api/Pasantias/${pasantiaAEliminar.idPasantia}`);
      setPasantias(pasantias.filter(p => p.idPasantia !== pasantiaAEliminar.idPasantia));
      setModalVisible(false);
    } catch (error) {
      console.error('Error al eliminar la pasantía:', error);
      // Aquí puedes añadir lógica para mostrar un mensaje de error al usuario si lo deseas
    }
  };

  const cancelarEliminar = () => {
    setModalVisible(false);
  };

  const irACrearPasantia = () => {
    navigate('/crear-pasantia');
  };

  const irAEditarPasantia = (idPasantia) => {
    navigate(`/editar-pasantia/${idPasantia}`);
  };

  const irAPasantes = (idPasantia) => {
    navigate('/pasantes', { state: { pasantiaId: idPasantia } });
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
          {pasantias.map((pasantia) => (
            <div key={pasantia.idPasantia} className={styles['internship-card']}>
              <div className={styles['internship-card-header']}>
                <h3 className={styles['internship-title']}>{pasantia.titulo}</h3>
              </div>
              <div className={styles['internship-card-body']}>
                <p className={styles['internship-card-location']}>{pasantia.ubicacion}</p>
                <p className={styles['internship-card-remuneration']}>
                  {pasantia.esRemuneracion ? 'Remunerada' : 'No Remunerada'}
                </p>
              </div>
              <div className={styles['internship-card-actions']}>
                <button className={`${styles['action-button']} ${styles['edit-button']}`} onClick={() => irAEditarPasantia(pasantia.idPasantia)}>
                  Editar
                </button>
                <button className={`${styles['action-button']} ${styles['delete-button']}`} onClick={() => handleEliminarClick(pasantia)}>
                  Eliminar
                </button>
                <button className={styles['action-button']} onClick={() => irAPasantes(pasantia.idPasantia)}>
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
