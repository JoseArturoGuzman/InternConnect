import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import axios from "axios";
import CartaEmpresa from "../Components/CartaEmpresa";
import "../Styles/StylesPages/ConsultarEmpresas.css";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const empresasResponse = await axios.get("https://localhost:7018/api/Empresas");
        setCompanies(empresasResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCompanies = companies.filter(
    (company) =>
      company.nombre &&
      company.nombre.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredCompanies.map((company) => (
          <CartaEmpresa
            key={company.idEmpresa}
            id={company.idEmpresa}
            name={company.nombre}
            location={company.direccion}
            image={`https://localhost:7018/uploads/${company.logoEmpresa}`}
          />
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
