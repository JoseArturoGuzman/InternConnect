import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/PasantiaDetalles.css"

export function PasantiaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pasantia, setPasantia] = useState(null);
  const [empresa, setEmpresa] = useState(null);
  const [beneficio, setBeneficio] = useState(null);

  useEffect(() => {
    const fetchPasantiaAndCompanyAndBenefit = async () => {
      try {
        const pasantiaResponse = await axios.get(`https://localhost:7018/api/Pasantias/${id}`);
        setPasantia(pasantiaResponse.data);

        const empresaResponse = await axios.get(`https://localhost:7018/api/Empresas/${pasantiaResponse.data.idEmpresa}`);
        setEmpresa(empresaResponse.data);

        const beneficioResponse = await axios.get(`https://localhost:7018/api/Beneficios/${pasantiaResponse.data.idBeneficios}`);
        setBeneficio(beneficioResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPasantiaAndCompanyAndBenefit();
  }, [id]);

  if (!pasantia || !empresa || !beneficio) {
    return <div>Cargando...</div>;
  }

  const handleAplicar = () => {
    navigate('/login');
  };

  const handleEmpresaClick = () => {
    navigate(`/empresa/${pasantia.idEmpresa}`);
  };

  return (
    <div>
      <Header />
      <div className="pasantia-detalle-container">
        <div className="pasantia-detalle">
          <div className="pasantia-info">
            <h1 className="pasantia-title">{pasantia.titulo}</h1>
            <h2 className="pasantia-company" onClick={handleEmpresaClick} style={{ cursor: 'pointer', color: 'blue' }}>{empresa.nombre}</h2>
            <p><strong>Modalidad:</strong> {pasantia.modalidadPasa}</p>
            <p><strong>Remuneración:</strong> {pasantia.esRemuneracion ? 'Remunerada' : 'No remunerada'}</p>
            {pasantia.esRemuneracion && <p><strong>Monto Remuneración:</strong> {pasantia.dineroRemuneracion}</p>}
            <p><strong>Duración:</strong> {pasantia.duracion} meses</p>
            <p><strong>Área:</strong> {pasantia.area}</p>
            <p><strong>Estado:</strong> {pasantia.estado}</p>
            <p><strong>Rol:</strong> {pasantia.rol}</p>
            <h3>Descripción</h3>
            <p className="pasantia-description">{pasantia.descripcion}</p>
            <h3>Requisitos</h3>
            <p>{pasantia.requisitos}</p>
            <h3>Beneficio</h3>
            <p> {beneficio.tipoBeneficios}</p>
            <p><strong>Descripción del beneficio:</strong> {beneficio.descripcion}</p>
          </div>
          <div className="pasantia-imagen-boton">
            <button onClick={handleAplicar} className="aplicar-button">Aplicar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
