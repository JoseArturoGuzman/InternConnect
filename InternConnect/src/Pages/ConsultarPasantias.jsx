import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Styles/StylesPages/ConsultarPasantias.css";
import PasantiaCard from "../Components/CartaPasantia";

const InternshipList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [internships, setInternships] = useState([]);
  const [companies, setCompanies] = useState({});

  useEffect(() => {
    const fetchInternshipsAndCompanies = async () => {
      try {
        const [internshipsResponse, companiesResponse] = await Promise.all([
          axios.get("https://localhost:7018/api/Pasantias"),
          axios.get("https://localhost:7018/api/Empresas")
        ]);

        const companiesMap = {};
        companiesResponse.data.forEach(company => {
          companiesMap[company.idEmpresa] = company.nombre;
        });

        setCompanies(companiesMap);
        setInternships(internshipsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInternshipsAndCompanies();
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
          <PasantiaCard
            key={internship.idPasantia}
            idPasantia={internship.idPasantia}
            titulo={internship.titulo}
            nombreEmpresa={companies[internship.idEmpresa] || 'Empresa desconocida'}
            modalidadPasa={internship.modalidadPasa}
            esRemuneracion={internship.esRemuneracion}
          />
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