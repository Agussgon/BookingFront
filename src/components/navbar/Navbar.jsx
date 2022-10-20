import img from '../../assets/img/logo.png';
import styles from './navbar.module.css'


const Navbar= ({children})=>{
    return (
    <>
    <header className= {styles.header1} >
        <div>
            <img src={img} alt='logo' />
            <p>Sentite como en tu hogar</p>
        </div>

        <div>
        <button >Crear Cuenta</button>
        <button >Iniciar Sesion</button>
        </div>
    </header>
    {children}
    
    </>)

}


export default Navbar