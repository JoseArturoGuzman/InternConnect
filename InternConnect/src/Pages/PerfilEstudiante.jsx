import React from 'react';
import '../Styles/StylesPages/PerfilEstudiante.css';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import userImage from "../Images/user.png";; // Ajusta la ruta a la imagen de usuario


export function PerfilEstudiantes() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="header-container">
          <img src={userImage} alt="Usuario" className="user-image" />
          <div className="header">JOSÉ ANGEL FLORENTINO PESQUERA</div>
        </div>
        <main className="content">
          <p>
            <span className="content-bold">Correo </span>
            <span className="content-regular">josengelflorentino@gmail.com</span>
          </p>
          <p>
            <span className="content-bold">INSTITUCIÓN </span>
            <span className="content-regular">INTEC</span>
          </p>
          <p>
            <span className="content-bold">ÁREA<br /></span>
            <span className="content-regular">Ingeniería<br /><br /></span>
          </p>
          <p>
            <span className="content-bold">CARRERA ACTUAL<br /></span>
            <span className="content-regular">Ingeniería de Software</span>
          </p>
          <p>
            <span className="content-bold">Pasantías Pasadas </span>
            <span className="content-regular">Aun no se han cursados pasantías<br /></span>
          </p>
          <p>
            <span className="content-bold">Pasantías Actuales<br /></span>
            <span className="content-regular">Aun no se han cursados pasantías</span>
          </p>
        </main>
        <div className="switch">
          <div className="switch-background"></div>
          <div className="switch-toggle"></div>
        </div>
        <div className="edit-mode">Modo de Edición</div>
      </div>
      <Footer />
    </>
  );
}
