import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalEliminar from '../Components/EliminarPasantia';
import '../Styles/StylesPages/PasantiasInterna.css';
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
    <div className="pasantias-internas">
      <Header />
      <div className="buscador">
        <input type="text" placeholder="Pasantía" className="search-input" />
        <button className="crear-pasantia" onClick={irACrearPasantia}>
          Crear Pasantía
        </button>
      </div>
      <h1>Pasantías en la Empresa</h1>
      <div className="internship-list">
        {pasantias
          .filter((p) => p.visible)
          .map((pasantia) => (
            <div key={pasantia.id} className="internship-card">
              <div className="internship-card-header">
                <h3>{pasantia.titulo}</h3>
              </div>
              <div className="internship-card-body">
                <p className="internship-card-location">{pasantia.ubicacion}</p>
                <p className="internship-card-remuneration">{pasantia.remuneracion}</p>
              </div>
              <div className="internship-card-actions">
                <button className="action-button edit-button" onClick={() => handleEditarClick(pasantia)}>
                  Editar
                </button>
                <button className="action-button delete-button" onClick={() => handleEliminarClick(pasantia)}>
                  Eliminar
                </button>
                <button className="action-button">Pasantes</button>
              </div>
            </div>
          ))}
      </div>
      {modalVisible && <ModalEliminar onConfirm={confirmarEliminar} onCancel={cancelarEliminar} />}
      <Footer className="footer" />
    </div>
  );
}
