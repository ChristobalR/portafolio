import React from 'react';
import styles from './contact.module.css';

function Contact() {
   var array1 = ["mano","pie","salto","pan","mundo"]
   var materiales = "miepano"
    function manufacture(gifts, materials) {
        let fabricables = []
        let array = []
        array = array.concat([...materials]);
       for(let h = 0; h < gifts.length; h++){
        let variante = ""
        variante = gifts[h]
           for(let j = 0; j < variante.length; j++){
              if(!array.includes(variante[j])) {
                console.log("s")
                    break
              } else if (j == variante.length -1){
                fabricables.push(variante)
                
              }
              
           }
       }
       return fabricables
        
        
      }
 manufacture(array1,materiales)
      
    return(
        <div className={`container ${styles.container}`}>

            <div className={styles.contform}>
            <h1>Contactame</h1>
            <h4>Here you can ask your questions.</h4>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="message" name="message" rows="5" cols="30" required="" className={styles.test}></textarea>
           

            <button type="submit">Enviar</button>
        </form>
        </div>
    </div>
    )
}
export default Contact
