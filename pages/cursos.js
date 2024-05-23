import React from 'react';
import FichaCurso from '/home/patrik/Documentos/VSC/webappExamen/codemasters-webapp/src/components/FichaCurso.jsx'; // Add missing import statement

const Cursos = () => {
    // Aquí puedes definir tus cursos. Esto es solo un ejemplo.
    const cursos = [
        { nombre: 'Curso 1', curso: 'Curso de programación', descripcion: 'Este es un curso de programación.' },
        { nombre: 'Curso 2', curso: 'Curso de diseño web', descripcion: 'Este es un curso de diseño web.' },
        { nombre: 'Curso 3', curso: 'Curso de marketing', descripcion: 'Este es un curso de marketing.' },
        { nombre: 'Curso 4', curso: 'Curso de inglés', descripcion: 'Este es un curso de inglés.'}
    ];

    return (
        <div>
            <h1>Cursos</h1>
            {cursos.map((curso, index) => (
                <FichaCurso key={index} {...curso} />
            ))}
        </div>
    );
};

export default Cursos;