import React from 'react';
import "../Styles/StylesComponents/Footer.css";
import Logo from "../Images/LogoInternConnect.png";

export function Footer() {
  return (
    <footer className='rectangle'>
      <div className='footer-content'>
        <img src={Logo} alt="InternConnect Logo" className="logo" />
        <div className='footer-text'>
          <a href='/Preguntas' className='preguntas-frecuentes'>Preguntas Frecuentes</a>
          <a href='mailto:pasantias@gmail.com' className='text-9'>Contactanos: Pasantías@gmail.com</a>
          <span className='text-a'>
            Copyright © 2024 Pasantías.com. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
