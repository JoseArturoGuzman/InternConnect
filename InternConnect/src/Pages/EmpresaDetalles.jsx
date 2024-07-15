import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import CartaPasantia from '../Components/CartaPasantia';
import "../Styles/StylesPages/EmpresaDetalles.css";

export function EmpresaDetalle() {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState(null);
  const [pasantiasRelacionadas, setPasantiasRelacionadas] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchEmpresaAndPasantias = async () => {
      try {
        const empresaResponse = await axios.get(`https://localhost:7018/api/Empresas/${id}`);
        setEmpresa(empresaResponse.data);

        const pasantiasResponse = await axios.get('https://localhost:7018/api/Pasantias');
        const pasantiasFiltradas = pasantiasResponse.data.filter(
          pasantia => pasantia.idEmpresa === parseInt(id)
        );
        setPasantiasRelacionadas(pasantiasFiltradas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEmpresaAndPasantias();
  }, [id]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  if (!empresa) {
    return <div>Cargando...</div>;
  }

  const logoUrl = empresa.logoEmpresa 
    ? `https://localhost:7018/uploads/${empresa.logoEmpresa}`
    : null;

  return (
    <div>
      <Header />
      <div className="empresa-detalle-container">
        <div className="empresa-detalle">
          <div className="empresa-info">
            <h1 className="empresa-name">{empresa.nombre}</h1>
            <h2 className="empresa-industry">{empresa.industria}</h2>
            <p><strong>Ubicación:</strong> {empresa.direccion}</p>
            <p><strong>Correo RRHH:</strong> {empresa.correoRRHH}</p>
            <p><strong>Contacto:</strong> {empresa.telefono}</p>
            <h3>Descripción</h3>
            <p className="empresa-description">{empresa.descripcion}</p>
          </div>
          <div className="empresa-imagen">
            {imageLoading && <div className="image-loading">Cargando imagen...</div>}
            {imageError ? (
              <div className="image-error">Error al cargar la imagen</div>
            ) : logoUrl ? (
              <img 
                src={logoUrl}
                alt={empresa.nombre} 
                className="empresa-logo"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{display: imageLoading ? 'none' : 'block'}}
              />
            ) : (
              <div className="image-error">No hay logo disponible</div>
            )}
          </div>
        </div>
        <div className="pasantias-relacionadas">
          <h3>Pasantías Relacionadas</h3>
          <div className="internship-list">
            {pasantiasRelacionadas.length > 0 ? (
              pasantiasRelacionadas.map((pasantia) => (
                <CartaPasantia
                  key={pasantia.idPasantia}
                  idPasantia={pasantia.idPasantia}
                  titulo={pasantia.titulo}
                  nombreEmpresa={empresa.nombre}
                  modalidadPasa={pasantia.modalidadPasa}
                  esRemuneracion={pasantia.esRemuneracion}
                />
              ))
            ) : (
              <p>No hay pasantías relacionadas.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 