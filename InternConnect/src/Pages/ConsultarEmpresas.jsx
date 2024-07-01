import React, { useState } from "react";
import { Header } from "../Components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/ConsultarEmpresas.css";

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
  const [searchTerm, setSearchTerm] = useState("");

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
    // Añade más empresas aquí...
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar empresa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="company-list">
        {filteredCompanies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export function ConsultarEmpresas() {
  return (
    <div>
      <Header />
      <div className="companies-container">
        <h1>Empresas asociadas</h1>
        <CompanyList />
      </div>
      <Footer />
    </div>
  );
}