import React from "react";
import styles from "./main.module.css";

function Main1() {
  return (
    <div className={`container ${styles.container}`}>
     <div className={`${styles.container1}`}>
     <h3>Full Stack Developer</h3>
      <div className={styles.h2d}>
        <h2>
          Disfruto <span>Construyendo</span> y <span>Diseñando</span> para la
          web.
        </h2>
      </div>
      <div className={styles.contactcont}>
        <button className={styles.contact}>Contacto</button>
        <button className={styles.proyects}>Proyectos</button>
      </div>
      <div className={styles.linkcont}>
        
          <img src="./main/github.png" alt="" />
          <img src="./main/linkedin.png" alt="" />
          <img src="./main/github.png" alt="" />
          <img src="./main/github.png" alt="" />
         
        
      </div>
      </div>
      <div  className={styles.div2}></div>
     

</div>

  );
}
export default Main1;
