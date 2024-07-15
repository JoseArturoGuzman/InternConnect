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
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser, loginEmpresa } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email.includes('@')) {
      setError('El correo electrónico no es válido');
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      setIsLoading(false);
      return;
    }

    try {
      // Intenta iniciar sesión como estudiante
      let user = await loginUser(email, password).catch(() => null);

      if (!user) {
        // Si falla el login de estudiante, intenta como empresa
        user = await loginEmpresa(email, password).catch(() => null);
      }

      if (user) {
        // Si se inicia sesión correctamente, navega según el tipo de usuario
        if (user.tipo === 'estudiante') {
          navigate('/LandingPageEstudiante', { state: { user } }); // Pasar los datos del estudiante
        } else if (user.tipo === 'empresa') {
          navigate('/LandingPageEmpresa');
        } else {
          navigate('/LandingPage');
        }
      } else {
        setError('Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error de login:', error);
      setError('Error al iniciar sesión. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
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
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Iniciando sesión...' : 'Log In'}
          </button>
          <div className="forgot-password">
            <Link to="/recuperar-contrasena">¿Has olvidado tu Contraseña?</Link>
          </div>
          <span className="register-text">¿Eres Nuevo?</span> <Link to="/Registro" className="register-link">Regístrate</Link>
        </form>
      </div>
    </section>
  );
}
