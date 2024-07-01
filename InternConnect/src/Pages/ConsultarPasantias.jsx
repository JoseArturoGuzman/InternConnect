import React, { useState } from "react";
import { Header } from "../Components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/ConsultarPasantias.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const internships = [
    {
      id: 1,
      title: "Full Stack React/Java Developer",
      company: "FullStack Labs",
      location: "Santo Domingo, Distrito Nacional (Remoto)",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 2,
      title: "Full Stack React/Java Developer",
      company: "FullStack Labs",
      location: "Santo Domingo, Distrito Nacional (Remoto)",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 3,
      title: "Full Stack React/Java Developer",
      company: "FullStack Labs",
      location: "Santo Domingo, Distrito Nacional (Remoto)",
      isRemunerated: false,
      image: "https://via.placeholder.com/150x100",
    },
    // Agregar más pasantías aquí
    {
      id: 4,
      title: "Frontend Developer Intern",
      company: "Tech Startup X",
      location: "Remote",
      isRemunerated: false,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 5,
      title: "Marketing Intern",
      company: "Global Marketing Agency",
      location: "New York, NY",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 6,
      title: "Software Engineering Intern",
      company: "Big Tech Inc.",
      location: "San Francisco, CA (Remote)",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 7,
      title: "Graphic Design Intern",
      company: "Creative Studio Y",
      location: "Los Angeles, CA",
      isRemunerated: false,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 8,
      title: "Data Science Intern",
      company: "Data Analytics Solutions",
      location: "Chicago, IL",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 9,
      title: "UX/UI Design Intern",
      company: "Design Innovations Co.",
      location: "Seattle, WA",
      isRemunerated: false,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 10,
      title: "Business Development Intern",
      company: "Startup Ventures Ltd.",
      location: "London, UK",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 11,
      title: "Product Management Intern",
      company: "Product Innovation Inc.",
      location: "Toronto, ON",
      isRemunerated: false,
      image: "https://via.placeholder.com/150x100",
    },
    {
      id: 12,
      title: "Digital Marketing Intern",
      company: "Digital Marketing Solutions",
      location: "Miami, FL",
      isRemunerated: true,
      image: "https://via.placeholder.com/150x100",
    },
  ];

  const filteredInternships = internships.filter((internship) =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Pasantías disponibles</h1>
      <input
        type="text"
        placeholder="Buscar pasantía..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="internship-list">
        {filteredInternships.map((internship, index) => (
          <PasantiaCard key={index} {...internship} />
        ))}
      </div>
    </div>
  );
};

export function ConsultarPasantias() {
  return (
    <div>
      <Header />
      <InternshipList />
      <Footer />
    </div>
  );
}
