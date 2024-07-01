import React from 'react';
import "../Styles/StylesComponents/Header.css"
import Logo from "../Images/LogoInternConnect.png"
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
          <p className="logo-text">InternConnect</p>
        </div>
        <ul className="nav-links">
          <Link to="/SobreNosotros">
            <li><a href="#">Sobre nosotros</a></li>
          </Link>
          <li className="dropdown">
            <a href="#">Pasantías</a>
            <ul className="dropdown-menu">
              <li><Link to="/ConsultarPasantias"> Consultar</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Empresas</a>
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
