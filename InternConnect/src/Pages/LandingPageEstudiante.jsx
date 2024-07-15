import React from 'react';
import { useLocation } from 'react-router-dom';
import { PerfilEstudiante } from '../Pages/PerfilEstudiante';

export function LandingPageEstudiante() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div>
      {user ? (
        <PerfilEstudiante user={user} />
      ) : (
        <div>No se encontraron datos del estudiante</div>
      )}
    </div>
  );
}
