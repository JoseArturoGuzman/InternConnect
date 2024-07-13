    import React from 'react';
    import styles from "../Styles/StylesComponents/CuadroPasante.module.css";

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
        <div className={styles['cuadro-largo']}>
        <div className={styles['info-pasantia']}>
            <h3>Pasantía:</h3>
            <p>{pasantia.title}</p>
            <p>{pasantia.company}</p>
            <p>{pasantia.location}</p>
            <p>{pasantia.remunerated ? 'Remunerada' : 'No Remunerada'}</p>
        </div>
        <div className={styles['info-estudiante']}>
            <h3>Estudiante:</h3>
            <p>{estudiante.name}</p>
            <p>{estudiante.career}</p>
            <p>{estudiante.university}</p>
        </div>
        <div className={styles['imagen-estudiante']}>
            <img src={estudiante.profileImageUrl} alt="Foto de perfil" />
        </div>
        <div className={styles.botones}>
            <button className={styles['btn-perfil-completo']} onClick={handleProfileClick}>Perfil Completo</button>
            <button className={styles['btn-aceptar']} onClick={handleEditClick}>Aceptar</button>
            <button className={styles['btn-eliminar']} onClick={handleDeleteClick}>Rechazar</button>
        </div>
        </div>
    );
    };

    export default CuadroPasante;
