import React, { useState } from 'react';
import Logo from "../Images/LogoInternConnect.png";
import LoginImg from "../Images/LoginImg.jpg";
import { Link } from 'react-router-dom';
import "../Styles/StylesPages/Login.css";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

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

    // Aquí puedes enviar los datos del formulario al backend
    console.log('Username:', username);
    console.log('Password:', password);

    // Ejemplo de cómo podrías enviar los datos a una API usando fetch
    /*
    fetch('url_del_backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del servidor
    })
    .catch(error => {
      console.error('Error:', error);
    });
    */
  };

  return (
    <section className='Login-Sect'>
      <div className="image-container">
        <img src={LoginImg} alt="Imagen Ejemplo" />
      </div>
      <div className="login-container">
        <div className="logo">
          <img src={Logo} alt="Logo de la Universidad" />
          <p>InternConnect</p>
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
          <span>¿Eres Nuevo?</span> <Link to="/Registro">Resgístrate</Link>
        </form>
      </div>
    </section>
  );
}
