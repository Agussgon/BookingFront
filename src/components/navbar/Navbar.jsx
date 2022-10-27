//Assets
import img from '../../assets/img/logo.png';
import img2 from '../../assets/img/logo2.png';

//Styles
import '../../styles/index.css' //General
import styles from './navbar.module.css' //Module




/* Dentro del header armar un bloque alineado a la
izquierda que incluya el logotipo y el lema de la
empresa. Ambos deben ser clickeables por las
personas usuarias y dirigir a la home del sitio. */
import { Link, NavLink } from 'react-router-dom';

/*Dentro del header armar un bloque alineado a la
derecha que contenga (según el caso) un botón de
inicio de sesión y/o un botón de registro en el caso de
que el usuario no esté logueado. En caso contrario,
mostrar el nombre de usuario, un avatar de letras con
las iniciales del nombre de usuario y un link de cierre
de sesión. */

const Navbar = () => {



  return (
    <>
      <header className={`bgpink vw100 f-row f-space-between .f-alignIt-end ${styles.header}`} >
        <div className={`f-row f-center f-alignItCont-center  ${styles.header_section}`}>
          <Link to='/'><img src={img2} alt='logo' /></Link>
          <Link to='/'><p>Sentite como en tu hogar</p></Link>
        </div>

        <div className={`f-row f-center f-alignItCont-center  ${styles.header_section}`}>
          <NavLink className="button1" to='/signin'>Crear Cuenta</NavLink>
          <NavLink className="button1" to='/login'>Iniciar Sesion</NavLink>
        </div>
      </header>
    </>
  )
}


export default Navbar