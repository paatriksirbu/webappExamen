// FichaCurso.jsx
import React from 'react';

const FichaCurso = ({ nombre, curso, descripcion }) => {
  return (
    <div className="my-class">
      <h2>{nombre}</h2>
      <h3>{curso}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default FichaCurso;
