import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../Components/authContext";
import Logo from "../Images/NewLogo.png";
import LoginImg from "../Images/LoginImg.jpg";
import "../Styles/StylesPages/Login.css";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Validación del correo electrónico
    if (!email.includes('@')) {
      setError('El correo electrónico no es válido');
      return;
    }

    // Validación de la contraseña
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    const user = await loginUser(email, password);
    if (user) {
      if (user.tipoUsuario === 'estudiante') {
        navigate('/PerfilEstudiante');
      } else if (user.tipoUsuario === 'empresa') {
        navigate('/PerfilEmpresa');
      }
    } else {
      setError('Correo o contraseña incorrectos');
    }
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
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <div className="error-message">{error}</div>}
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