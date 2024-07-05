import React from 'react';
import "../Styles/StylesComponents/Header.css"
import Logo from "../Images/NewLogo.png"
import Profile from "../Images/user.png";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="InternConnect Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <Link to="/SobreNosotros">
            <li><a href="#">Nosotros</a></li>
          </Link>
          <li className="dropdown">
            <a href="#">Pasantías <span className="dropdown-arrow">▾</span></a>
            <ul className="dropdown-menu">
              <li><Link to="/ConsultarPasantias"> Consultar</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Empresas <span className="dropdown-arrow">▾</span></a>
            <ul className="dropdown-menu">
              <li><Link to="/ConsultarEmpresas">Consultar </Link></li>
            </ul>
          </li>
        </ul>
        <Link to="/login">
          <img src={Profile} alt="Profile Icon" className="profile-icon" />
        </Link>
      </nav>
    </header>
  );
}