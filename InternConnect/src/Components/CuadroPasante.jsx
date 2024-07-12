import React from 'react';
import "../Styles/StylesComponents/CuadroPasante.css"
const CuadroPasante = () => {
  // Ejemplo de datos simulados
  const pasantia = {
    id: 1,
    title: 'Desarrollador Full Stack',
    company: 'Tech Solutions',
    location: 'Ciudad de Ejemplo',
    remunerated: true,
  };

  const estudiante = {
    id: 1,
    name: 'Juan Pérez',
    career: 'Ingeniería en Informática',
    university: 'Universidad de Ejemplo',
    profileImageUrl: 'https://via.placeholder.com/150',
  };

  // Función de ejemplo para manejar clics en los botones
  const handleProfileClick = () => {
    // Lógica para redirigir al perfil completo del estudiante
    console.log('Ver perfil completo');
  };

  const handleEditClick = () => {
    // Lógica para editar el cuadro largo
    console.log('Editar');
  };

  const handleDeleteClick = () => {
    // Lógica para eliminar el cuadro largo
    console.log('Eliminar');
  };

  return (
    <div className="cuadro-largo">
      <div className="pasantia-info">
        <h3>Pasantía:</h3>
        <p>{pasantia.title}</p>
        <p>{pasantia.company}</p>
        <p>{pasantia.location}</p>
        <p>{pasantia.remunerated ? 'Remunerada' : 'No Remunerada'}</p>
      </div>
      <div className="estudiante-info">
        <h3>Estudiante:</h3>
        <p>{estudiante.name}</p>
        <p>{estudiante.career}</p>
        <p>{estudiante.university}</p>
      </div>
      <div className="estudiante-image">
        <img src={estudiante.profileImageUrl} alt="Foto de perfil" />
      </div>
      <div className="botones">
        <button onClick={handleProfileClick}>Perfil Completo</button>
        <button onClick={handleEditClick}>Editar</button>
        <button onClick={handleDeleteClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default CuadroPasante;
