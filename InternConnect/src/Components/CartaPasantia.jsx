import React from "react";
import { Link } from "react-router-dom";
import "../Styles/StylesPages/CartaPasantias.css"; // Verifica esta ruta

const CartaPasantia = ({ id, title, company, location, remunerated, image }) => {
  return (
    <Link to={`/pasantia/${id}`} className="internship-card">
      <img src={image} alt={company} className="internship-card-image" />
      <div className="internship-card-content">
        <h3>{title}</h3>
        <p className="internship-card-company">{company}</p>
        <p className="internship-card-location">{location}</p>
        <p className="internship-card-remuneration">{remunerated ? 'Remunerada' : 'No remunerada'}</p>
      </div>
    </Link>
  );
};

export default CartaPasantia;
