import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/ConsultarPasantias.css";
import PasantiaCard from "../Components/CartaPasantia";

const InternshipList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get("https://localhost:7018/api/Pasantias");
        setInternships(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  const filteredInternships = internships.filter((internship) =>
    internship.titulo.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredInternships.map((internship) => (
          <PasantiaCard key={internship.idPasantia} title={internship.titulo} company={internship.empresa} location={internship.location} isRemunerated={internship.esRemuneracion} />
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
