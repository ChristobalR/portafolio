import React from 'react';
import styles from './skills.module.css';

function Skills() {
    return(
        <div className={`container ${styles.container}`}>
            
            <h1>SKILLS VIEW</h1>
            
            <div className={styles.contfb}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.contskills}>
                 <div>
                    <img src="./public/skills/js.png" alt="" />
                    <p>javascript</p>
                 </div>
                 <div>
                    <img src="./public/skills/1.png" alt="" />
                    <p>Node JS</p>
                 </div>
                 <div>
                    <img src="./public/skills/2.png" alt="" />
                    <p>Html</p>
                 </div>
                 <div>
                    <img src="./public/skills/3.png" alt="" />
                    <p>Css</p>
                 </div>
                 <div>
                    <img src="./public/skills/4.png" alt="" />
                    <p>Mongo DB</p>
                 </div>
                 <div>
                    <img src="./public/skills/7.png" alt="" />
                    <p>React</p>
                 </div>
                 <div>
                    <img src="./public/skills/88.png" alt="" />
                    <p>Express</p>
                 </div>
                 <div>
                    <img src="./public/skills/git.png" alt="" />
                    <p>Git</p>
                 </div>
               
            </div>
            
              
        
           
        </div>
        
    )
}
export default Skills