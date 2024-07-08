import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Simula una base de datos de usuarios
  const [users, setUsers] = useState([
    { email: 'estudiante@ejemplo.com', password: 'password123', tipoUsuario: 'estudiante' },
    { email: 'empresa@ejemplo.com', password: 'password456', tipoUsuario: 'empresa' }
  ]);

  function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  }

  function registerUser(userData) {
    setUsers([...users, userData]);
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return userData;
  }

  function logoutUser() {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const value = {
    currentUser,
    loginUser,
    registerUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}