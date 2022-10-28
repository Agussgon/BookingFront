//Assets
import img from '../../assets/img/logo.png';

//Styles
import '../../styles/index.css' //General
import styles from './navbar.module.css' //Module

import { Link, useNavigate } from 'react-router-dom';



const NavbarLogin = ({user,setUser}) => {
    
// traemos el usuario almacenado pide el nombre pero por ahora es el mail 
    //const user= JSON.parse(localStorage.getItem('logged'));
 const navigate=useNavigate();

    return (
      <>
        <header className={`bgpink vw100 f-row f-space-between .f-alignIt-end  ${styles.header}`}>
          <div className={`f-row f-center f-alignItCont-center  ${styles.header_section}`}>
            <Link to='/'><img src={img} alt='logo' /></Link>
            <Link to='/'> <p >Sentite como en tu hogar</p></Link>
          </div>
  
          <div className={`f-row f-center f-alignItCont-center  ${styles.header_section} ${styles.header_section_button}`} >
            <p>Hola {user.email}</p>
             {/*<Link to='/'> <button type="submit" className="button1" onClick= {localStorage.clear()}>Cerrar Sesion</button></Link>*/}
              <button type="submit" className="button1" onClick= {()=>{setUser({}) ;navigate('/')} }>Cerrar Sesión</button>
          </div>
        </header>
      </>
    )
  }
  //falta el avatar circular con las iniciales 
  //<p>Hola {user.mail}</p> es porque esta vacio es nulo
  export default NavbarLogin; 