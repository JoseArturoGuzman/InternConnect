import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import '../Styles/StylesPages/CrearPasantia.css';

export function CrearPasantia() {
  const navigate = useNavigate();
  const location = useLocation();
  const agregarPasantia = location.state && location.state.agregarPasantia;

  const [pasantia, setPasantia] = useState({
    title: '',
    empresa: '',
    location: '',
    remuneracion: 'Remunerada',
    montoRemuneracion: '',
    duracion: '',
    modalidad: 'Remoto',
    area: '',
    estado: 'Activa',
    descripcion: '',
    requisitos: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasantia({
      ...pasantia,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPasantia = { ...pasantia, id: Date.now(), visible: true };
    agregarPasantia(nuevaPasantia);
    navigate('/');
  };

  return (
    <div>
      <Header />
      <div className="crear-pasantia-container">
        <h1>Crear Nueva Pasantía</h1>
        <form onSubmit={handleSubmit} className="crear-pasantia-form">
          <div>
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={pasantia.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Empresa</label>
            <input
              type="text"
              name="empresa"
              value={pasantia.empresa}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Ubicación</label>
            <input
              type="text"
              name="location"
              value={pasantia.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Remuneración</label>
            <select
              name="remuneracion"
              value={pasantia.remuneracion}
              onChange={handleInputChange}
              required
            >
              <option value="Remunerada">Remunerada</option>
              <option value="No Remunerada">No Remunerada</option>
            </select>
          </div>
          {pasantia.remuneracion === 'Remunerada' && (
            <div>
              <label>Monto Remuneración</label>
              <input
                type="text"
                name="montoRemuneracion"
                value={pasantia.montoRemuneracion}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div>
            <label>Duración</label>
            <input
              type="text"
              name="duracion"
              value={pasantia.duracion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Modalidad</label>
            <select
              name="modalidad"
              value={pasantia.modalidad}
              onChange={handleInputChange}
              required
            >
              <option value="Remoto">Remoto</option>
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
            <label>Descripción</label>
            <textarea
              name="descripcion"
              value={pasantia.descripcion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Requisitos</label>
            <textarea
              name="requisitos"
              value={pasantia.requisitos}
              onChange={handleInputChange}
              required
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
          <button type="submit">Crear Pasantía</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
