import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../Styles/StylesPages/CrearPasantia.css';

export function CrearPasantia() {
  const navigate = useNavigate();
  const location = useLocation();
  const agregarPasantia = location.state && location.state.agregarPasantia;

  const [pasantia, setPasantia] = useState({
    titulo: '',
    descripcion: '',
    fechaIngreso: new Date().toISOString(),
    fechaFin: new Date().toISOString(),
    esRemuneracion: true,
    dineroRemuneracion: '',
    duracion: '',
    idEmpresa: 1,
    modalidadPasa: 'Virtual',
    requisitos: '',
    area: '',
    estado: 'Activa',
    idBeneficios: 1,
    rol: 'Desarrollador',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasantia({
      ...pasantia,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7018/api/Pasantias', pasantia, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate('/pasantias-internas');
        }, 2000);
      } else {
        console.error('Error al crear la pasantía');
        setErrorMessage('Error al crear la pasantía. Por favor, intenta nuevamente más tarde.');
      }
    } catch (error) {
      console.error('Error al conectar con la API', error);
      setErrorMessage('Error al conectar con la API. Por favor, intenta nuevamente más tarde.');
    }
  };

  useEffect(() => {
    let timeout;
    if (showSuccessMessage) {
      timeout = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showSuccessMessage]);

  return (
    <div>
      <Header />
      <div className="crear-pasantia-container">
        <h1>Crear Nueva Pasantía</h1>
        {showSuccessMessage && <div className="success-message">Pasantía creada correctamente.</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="crear-pasantia-form">
          <div>
            <label>Título</label>
            <input
              type="text"
              name="titulo"
              value={pasantia.titulo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={pasantia.descripcion}
              onChange={handleInputChange}
              required
              className="wide-textarea"
            />
          </div>
          <div>
            <label>Fecha de Ingreso</label>
            <input
              type="date"
              name="fechaIngreso"
              value={pasantia.fechaIngreso.split('T')[0]}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Fecha de Fin</label>
            <input
              type="date"
              name="fechaFin"
              value={pasantia.fechaFin.split('T')[0]}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Remuneración</label>
            <select
              name="esRemuneracion"
              value={pasantia.esRemuneracion}
              onChange={handleInputChange}
              required
            >
              <option value={true}>Remunerada</option>
              <option value={false}>No Remunerada</option>
            </select>
          </div>
          {pasantia.esRemuneracion && (
            <div>
              <label>Monto Remuneración</label>
              <input
                type="text"
                name="dineroRemuneracion"
                value={pasantia.dineroRemuneracion}
                onChange={handleInputChange}
                required={pasantia.esRemuneracion}
              />
            </div>
          )}
          <div>
            <label>Duración (meses)</label>
            <input
              type="number"
              name="duracion"
              value={pasantia.duracion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Modalidad</label>
            <select
              name="modalidadPasa"
              value={pasantia.modalidadPasa}
              onChange={handleInputChange}
              required
            >
              <option value="Virtual">Remoto</option>
              <option value="Presencial">Presencial</option>
            </select>
          </div>
          <div>
            <label>Área</label>
            <input
              type="text"
              name="area"
              value={pasantia.area}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Estado</label>
            <select
              name="estado"
              value={pasantia.estado}
              onChange={handleInputChange}
              required
            >
              <option value="Activa">Activa</option>
              <option value="Inactiva">Inactiva</option>
            </select>
          </div>
          <div>
            <label>Requisitos</label>
            <textarea
              name="requisitos"
              value={pasantia.requisitos}
              onChange={handleInputChange}
              required
              className="wide-textarea"
            />
          </div>
          <div>
            <label>Imagen (URL)</label>
            <input
              type="text"
              name="image"
              value={pasantia.image}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="green-button">Crear Pasantía</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
