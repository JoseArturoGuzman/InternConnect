import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/StylesPages/CrearPasantia.css'; // Asegúrate de crear este archivo CSS
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

export function EditarPasantia() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pasantia, setPasantia] = useState({
    idPasantia: 0,
    titulo: '',
    descripcion: '',
    fechaIngreso: '',
    fechaFin: '',
    esRemuneracion: false,
    dineroRemuneracion: 0,
    duracion: 0,
    idEmpresa: 0,
    modalidadPasa: '',
    requisitos: '',
    area: '',
    estado: '',
    idBeneficios: 0,
    rol: ''
  });
  const [beneficios, setBeneficios] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPasantia = async () => {
      try {
        const response = await axios.get(`https://localhost:7018/api/Pasantias/${id}`);
        setPasantia(response.data);
      } catch (error) {
        console.error("Error al cargar la pasantía:", error);
      }
    };

    fetchPasantia();
  }, [id]);

  useEffect(() => {
    const fetchBeneficios = async () => {
      try {
        const response = await axios.get('https://localhost:7018/api/Beneficios');
        setBeneficios(response.data);
      } catch (error) {
        setError('Error al cargar los beneficios. Por favor, intenta nuevamente más tarde.');
        console.error('Error al cargar los beneficios:', error);
      }
    };

    fetchBeneficios();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPasantia(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7018/api/Pasantias/${id}`, pasantia);
      alert("Pasantía actualizada con éxito");
      navigate('/pasantias-internas'); // Redirige a la lista de pasantías
    } catch (error) {
      console.error("Error al actualizar la pasantía:", error);
      alert("Error al actualizar la pasantía");
    }
  };

  return (
    <div>
      <Header />
      <div className="crear-pasantia-container">
        <h1>Actualizar Pasantía</h1>
        <form onSubmit={handleSubmit} className="crear-pasantia-form">
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              name="titulo"
              value={pasantia.titulo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={pasantia.descripcion}
              onChange={handleChange}
              required
              className="wide-textarea"
            />
          </div>

          <div className="form-group">
            <label>Fecha de Ingreso:</label>
            <input
              type="date"
              name="fechaIngreso"
              value={pasantia.fechaIngreso.split('T')[0]}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Fecha de Fin:</label>
            <input
              type="date"
              name="fechaFin"
              value={pasantia.fechaFin.split('T')[0]}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>¿Es remunerada?</label>
            <input
              type="checkbox"
              name="esRemuneracion"
              checked={pasantia.esRemuneracion}
              onChange={handleChange}
            />
          </div>

          {pasantia.esRemuneracion && (
            <div className="form-group">
              <label>Remuneración:</label>
              <input
                type="number"
                name="dineroRemuneracion"
                value={pasantia.dineroRemuneracion}
                onChange={handleChange}
                min="0"
              />
            </div>
          )}

          <div className="form-group">
            <label>Duración (en meses):</label>
            <input
              type="number"
              name="duracion"
              value={pasantia.duracion}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label>Modalidad:</label>
            <input
              type="text"
              name="modalidadPasa"
              value={pasantia.modalidadPasa}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Requisitos:</label>
            <textarea
              name="requisitos"
              value={pasantia.requisitos}
              onChange={handleChange}
              required
              className="wide-textarea"
            />
          </div>

          <div className="form-group">
            <label>Área:</label>
            <input
              type="text"
              name="area"
              value={pasantia.area}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Estado:</label>
            <input
              type="text"
              name="estado"
              value={pasantia.estado}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Beneficios:</label>
            <select
              name="idBeneficios"
              value={pasantia.idBeneficios}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un beneficio</option>
              {beneficios.map(beneficio => (
                <option key={beneficio.idBeneficios} value={beneficio.idBeneficios}>
                  {beneficio.tipoBeneficios}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Rol:</label>
            <input
              type="text"
              name="rol"
              value={pasantia.rol}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="green-button">Actualizar Pasantía</button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
      <Footer />
    </div>
  );
}
