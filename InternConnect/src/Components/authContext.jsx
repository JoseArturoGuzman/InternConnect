  import React, { createContext, useContext, useState } from 'react';
  import axios from 'axios';

  export const AuthContext = createContext();

  export function useAuth() {
    return useContext(AuthContext);
  }

  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const loginUser = async (email, password) => {
      try {
        const response = await axios.post('https://localhost:7018/api/Estudiantes/Login', {
          correo: email,
          contraseña: password
        });
        const userData = { ...response.data, tipo: 'estudiante' };
        setUser(userData);
        return userData;
      } catch (error) {
        console.error('Error en el login de estudiantes:', error);
        throw error;
      }
    };

    const loginEmpresa = async (email, password) => {
      try {
        const response = await axios.post('https://localhost:7018/api/Empresas/Login', {
          Correo: email,
          ContraseñaHash: password
        });
        console.log('Respuesta del servidor (empresa):', response.data);
        const userData = { ...response.data, tipo: 'empresa' };
        setUser(userData);
        return userData;
      } catch (error) {
        console.error('Error en el login de empresas:', error.response?.data || error.message);
        throw error;
      }
    };

    const logout = () => {
      setUser(null);
    };

    const value = {
      user,
      loginUser,
      loginEmpresa,
      logout
    };

    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }