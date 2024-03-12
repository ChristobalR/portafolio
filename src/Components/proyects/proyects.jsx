import React from 'react';
import styles from './proyects.module.css';

function Proyects() {
    return(
        <div className={`container ${styles.container}`}>
            <h1>PROYECTOS</h1>
            <div className={`${styles.contenedor}`}>
            <div className={styles.elemento}>
                <img src="./fondo.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ad.</p>
            </div>
            <div className={styles.elemento}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ad.</p>
            </div>
            <div className={styles.elemento}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ad.</p>
            </div>
        </div>
            </div>
           
    )
}
export default Proyects
