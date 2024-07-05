import React, { useState } from 'react';
import Logo from "../Images/NewLogo.png";
import LoginImg from "../Images/LoginImg.jpg";
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/StylesPages/Login.css";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del correo electrónico
    if (!username.includes('@')) {
      setErrorUsername('El correo electrónico no es válido');
      return;
    } else {
      setErrorUsername(null);
    }

    // Validación de la contraseña
    if (password.length < 8) {
      setErrorPassword('La contraseña debe tener al menos 8 caracteres');
      return;
    } else {
      setErrorPassword(null);
    }

    // Redirigir a la página de consulta de pasantías
    navigate('/ConsultarPasantias');
  };

  return (
    <section className='Login-Sect'>
      <div className="image-container">
        <img src={LoginImg} alt="Imagen Ejemplo" />
      </div>
      <div className="login-container">
        <div className="logo">
          <img src={Logo} alt="Logo de la Universidad" />
          
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Correo:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errorUsername && <div className="error-message">{errorUsername}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorPassword && <div className="error-message">{errorPassword}</div>}
          </div>
          <button type="submit" className="login-button">Log In</button>
          <div className="forgot-password">
            <a href="#">¿Haz olvidado tu Contraseña?</a>
          </div>
          <span className="register-text">¿Eres Nuevo?</span> <Link to="/Registro" className="register-link">Regístrate</Link>
        </form>
      </div>
    </section>
  );
}
