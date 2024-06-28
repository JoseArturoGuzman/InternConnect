import React from "react";
import { Header } from "../Components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";

const CompanyCard = ({ name, description, industry, id, image }) => {
  return (
    <Link to={`/empresa/${id}`}>
      <div className="company-card">
        <div className="company-card-header">
          <img src={image} alt={name} className="company-card-image" />
          <h3>{name}</h3>
        </div>
        <div className="company-card-body">
          <p className="company-card-description">{description}</p>
          <p className="company-card-industry">{industry}</p>
        </div>
      </div>
    </Link>
  );
};

const CompanyList = () => {
  const companies = [
    {
      id: 1,
      name: 'FullStack Labs',
      description: 'Desarrollo de software y servicios de tecnología',
      industry: 'Tecnología',
      image: 'https://via.placeholder.com/150x100',
    },
    {
      id: 2,
      name: 'Google',
      description: 'Servicios de búsqueda y publicidad en línea',
      industry: 'Tecnología',
      image: 'https://via.placeholder.com/150x100',
    },
    {
      id: 3,
      name: 'Microsoft',
      description: 'Desarrollo de software y servicios de tecnología',
      industry: 'Tecnología',
      image: 'https://via.placeholder.com/150x100',
    },
  ];

  return (
    <div className="company-list">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
  );
};

export function ConsultarEmpresas(){
    return(
    <div>
        <Header/>
        <CompanyList />
        <Footer/>
    </div>    
    )
}