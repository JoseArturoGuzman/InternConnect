import React from "react";
import { Header } from "../Components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";

const PasantiaCard = ({ title, company, location, isRemunerated, id, image }) => {
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
  
  const InternshipList = () => {
    const internships = [
      {
        id: 1,
        title: 'Full Stack React/Java Developer',
        company: 'FullStack Labs',
        location: 'Santo Domingo, Distrito Nacional (Remoto)',
        isRemunerated: true,
        image: 'https://via.placeholder.com/150x100',
      },
      {
        id: 2,
        title: 'Full Stack React/Java Developer',
        company: 'FullStack Labs',
        location: 'Santo Domingo, Distrito Nacional (Remoto)',
        isRemunerated: true,
        image: 'https://via.placeholder.com/150x100',
      },
      {
        id: 3,
        title: 'Full Stack React/Java Developer',
        company: 'FullStack Labs',
        location: 'Santo Domingo, Distrito Nacional (Remoto)',
        isRemunerated: false,
        image: 'https://via.placeholder.com/150x100',
      },
    ];
  
    return (
      <div className="internship-list">
        {internships.map((internship, index) => (
          <PasantiaCard key={index} {...internship} />
        ))}
      </div>
    );
  };

export function ConsultarPasantias(){
    return(
    <div>
        <Header/>
        <InternshipList />
        <Footer/>
    </div>    
    )
}