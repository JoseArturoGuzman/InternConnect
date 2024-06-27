import React from 'react';
import "../Styles/StylesComponents/Footer.css"
export function Footer() {
  return (
    <footer className='rectangle'>
      <div className='regroup'>
        <a href='#' className='preguntas-frecuentes'>Preguntas Frecuentes</a>
        <a href='#' className='sobre-nosotros'>Sobre nosotros</a>
        <a href='mailto:pasantias@gmail.com' className='text-9'>Contactanos: Pasantías@gmail.com</a>
      </div>
      <span className='text-a'>
        Copyright © 2024 Pasantías.com. All Rights Reserved.
      </span>
    </footer>
  );
}
