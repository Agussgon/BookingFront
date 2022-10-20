//Assets
import img from '../../assets/img/logo.png';

//Styles
import '../../styles/index.css' //General
import styles from './navbar.module.css' //Module


const Navbar = () => {
  return (
    <>
      <header className={styles.header1} >
        <div>
          <img src={img} alt='logo' />
          <p>Sentite como en tu hogar</p>
        </div>

        <div>
          <button className="button1">Crear Cuenta</button>
          <button className="button1">Iniciar Sesion</button>
        </div>
      </header>
    </>
  )
}


export default Navbar