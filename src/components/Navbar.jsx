import { useState } from 'react'
import  styles from './Navbar.module.css';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Logosite = styled.div`
    width: 20%;
    display: flex;
    align-items: center; /* vertical */
   justify-content: center;
    background-color: #00cd33;
    @media only screen and (max-width:760px){
    width:50%;
    flex-direction:column;
    align-items: center; /* vertical */
    justify-content: center;}

`
const Logo = styled.img`
height: 100px;
  width:100px;
  background-color: #00cd67;
  border-radius: 50%;
  @media only screen and (max-width:760px) {
  height:50px;
  width:50px;
  };

`
function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <Logosite>
            <Logo src="/icono.jpg"></Logo>
        </Logosite>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/areaunodos' className={`${styles.navLink}`}>Area Niño 1+2</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/areatrescuatro' className={`${styles.navLink}`}>Area Niño 3+4</Link>
            </li>
      
            <li onClick={removeActive}>
              <Link to={'https://wa.me/+51929076660'} target="_blank" className={`${styles.navLink}`}>Contacto</Link>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Futuras Secciones</a>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default Navbar;
