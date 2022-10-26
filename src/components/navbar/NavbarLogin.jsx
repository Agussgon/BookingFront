//Assets
import img from '../../assets/img/logo.png';

//Styles
import '../../styles/index.css' //General
import styles from './navbar.module.css' //Module

import { Link } from 'react-router-dom';



const NavbarLogin = () => {
    
// traemos el usuario almacenado pide el nombre pero por ahora es el mail 
    const user= JSON.parse(localStorage.getItem('logged'));


    return (
      <>
        <header className={styles.header1} >
          <div className={styles.div1}>
            <Link to='/'><img src={img} alt='logo' /></Link>
            <Link to='/'> <p >Sentite como en tu hogar</p></Link>
          </div>
  
          <div className={styles.div2}>
         <p>Hola {user.mail}</p>
          <Link to='/'> <button type="submit" className="button1" onClick= {localStorage.clear()}>Cerrar Sesion</button></Link>
          </div>
        </header>
      </>
    )
  }
  //falta el avatar circular con las iniciales 
  
  export default NavbarLogin; 