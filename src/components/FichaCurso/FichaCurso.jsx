// FichaCurso.jsx
import React from 'react';
import styles from './FichaCurso.module.css'; // Asegúrate de que el estilo corresponda y exista este archivo.

const FichaCurso = ({ nombre, curso, descripcion }) => {
  return (
    <div className={styles.ficha}>
      <h2>{nombre}</h2>
      <h3>{curso}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default FichaCurso;
