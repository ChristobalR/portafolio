import React from 'react';
import styles from './sobremi.module.css';

function Sobremi() {
    return(
        <div className={`container ${styles.container}`}>
            
           <div className={`${styles.sobremi}`}>
            <h2>Sobre Mi</h2>
            <p>¡Hola! Soy [Nombre del Programador], un apasionado desarrollador web con experiencia en tecnologías como Node.js, Express, React, JavaScript, HTML y CSS. Mi enfoque se centra en crear aplicaciones web eficientes y atractivas, priorizando el diseño limpio y la usabilidad. He trabajado en diversos proyectos, desde aplicaciones completas hasta pequeñas herramientas, siempre buscando mejorar mis habilidades y mantenerme al día con las últimas tendencias tecnológicas. Estoy abierto a nuevas oportunidades y desafíos. ¡Conversemos sobre tecnología y desarrollo!</p>
           </div>
           
        </div>
    )
}
export default Sobremi