import React from 'react';
import styles from './navbar.module.css';

function Nabvar() {
    return(
        <div className={`containerglobal ${styles.selector}`}>
        <div className={`container ${styles.container}`}>

<a href="">Home</a>
<a href="">Proyects</a>
<a href="">Conctact</a>
<a href="">about me</a>

        </div>
        </div>
    )
}
export default Nabvar
