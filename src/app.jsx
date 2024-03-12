import React, { useState, useEffect,useRef} from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';



////////////////////////// IMPORTS COMPONENTS ///////////////////////
import Navbar from './Components/navbar/navbar.jsx';
import Main1 from './Components/main/main.jsx';
import Proyects from "./Components/proyects/proyects.jsx";
import Skills from "./Components/skills/skills.jsx";
import Sobremi from "./Components/sobremi/sobremi.jsx";
import Contact from "./Components/contact/contact.jsx";
import Footer from "./Components/footer/footer.jsx";
////////////////////////// IMPORTS COMPONENTS ///////////////////////



function App() {

  
  return(
    <>
      
        <Navbar/>
      
        <Main1/>
      
        <Proyects/>
      
        <Skills/>

       

        <Contact/>

        <Footer/>
     
      </>
    
  )
  }
  
export default App