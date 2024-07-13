import React from "react";
import { Link } from "react-router-dom";
import "../Styles/StylesPages/CartaPasantias.css";

const CartaPasantia = ({ idPasantia, titulo, nombreEmpresa, modalidadPasa, esRemuneracion }) => {
  return (
    <Link to={`/pasantia/${idPasantia}`} className="internship-card">
      <div className="internship-card-content">
        <h3>{titulo}</h3>
        <p className="internship-card-company">{nombreEmpresa}</p>
        <p className="internship-card-location">{modalidadPasa}</p>
        <p className="internship-card-remuneration">
          {esRemuneracion ? 'Remunerada' : 'No remunerada'}
        </p>
      </div>
    </Link>
  );
};

export default CartaPasantia;