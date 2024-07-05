import React from "react";
import { Link } from "react-router-dom";
import "../Styles/StylesPages/ConsultarPasantias.css";

const PasantiaCard = ({ id, title, company, location, isRemunerated, image }) => {
  return (
    <Link to={`/pasantia/${id}`}>
      <div className="internship-card">
        <div className="internship-card-header">
          <img src={image} alt={title} className="internship-card-image" />
          <h3>{title}</h3>
          <span className="internship-card-company">{company}</span>
        </div>
        <div className="internship-card-body">
          <p className="internship-card-location">{location}</p>
          <p className="internship-card-remuneration">{isRemunerated ? 'Remunerada' : 'No remunerada'}</p>
        </div>
      </div>
    </Link>
  );
};

export default PasantiaCard;
