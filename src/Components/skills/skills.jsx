import React from 'react';
import styles from './skills.module.css';

function Skills() {
    return(
        <div className={`container ${styles.container}`}>
            
            <h1>SKILLS VIEW</h1>
            
            <div className={styles.contfb}>
                <div><p>creo <span>aplicaciones web</span> que funcionen sin problemas. Me enfoco en hacer que las páginas se carguen <span>rápido</span> y se vean geniales para los <span>usuarios</span>.</p></div>
                <div><p>Me aseguro de que las aplicaciones sean <span>seguras</span>. Soluciono problemas <span>rápidamente</span> y sigo las  <span>mejores prácticas</span> para mantener la <span>información</span> de los usuarios <span>a salvo.</span></p></div>
            </div>
            <div className={styles.contskills}>
                 <div>
                    <img src="skills/js.png" alt="" />
                    <p>javascript</p>
                 </div>
                 <div>
                    <img src="skills/1.png" alt="" />
                    <p>Node JS</p>
                 </div>
                 <div>
                    <img src="skills/2.png" alt="" />
                    <p>Html</p>
                 </div>
                 <div>
                    <img src="skills/3.png" alt="" />
                    <p>Css</p>
                 </div>
                 <div>
                    <img src="skills/4.png" alt="" />
                    <p>Mongo DB</p>
                 </div>
                 <div>
                    <img src="skills/7.png" alt="" />
                    <p>React</p>
                 </div>
                 <div>
                    <img src="skills/88.png" alt="" />
                    <p>Express</p>
                 </div>
                 <div>
                    <img src="skills/git.png" alt="" />
                    <p>Git</p>
                 </div>
               
            </div>
            
              
        
           
        </div>
        
    )
}
export default Skills