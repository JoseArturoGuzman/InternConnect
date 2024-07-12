import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/StylesPages/CartaEmpresa.css"; // Verifica esta ruta

const CartaEmpresa = ({ id, name, location, image }) => {
  return (
    <Link to={`/empresa/${id}`} className="empresa-card">
      <img src={image} alt={name} className="empresa-card-image" />
      <div className="empresa-card-content">
        <h3>{name}</h3>
        <p className="empresa-card-location">{location}</p>
      </div>
    </Link>
  );
};

export default CartaEmpresa;
