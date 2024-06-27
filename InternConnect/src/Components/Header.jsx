import React from 'react';
import "../Styles/StylesComponents/Header.css"
import Logo from "../Images/LogoInternConnect.png"
import Profile from "../Images/user.png";

export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="InternConnect Logo" className="logo" />
          <p className="logo-text">InternConnect</p>
        </div>
        <ul className="nav-links">
          <li><a href="#">Sobre nosotros</a></li>
          <li className="dropdown">
            <a href="#">Pasantías</a>
            <ul className="dropdown-menu">
              <li><a href="#"> Consultar pasantías</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Empresas</a>
            <ul className="dropdown-menu">
              <li><a href="#">Consultar Empresas</a></li>
            </ul>
          </li>
        </ul>
        <img src={Profile} alt="Profile Icon" className="profile-icon" />
      </nav>
    </header>
  );
}
