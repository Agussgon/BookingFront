import './Layout.css'
import img from '../assets/logo.png';

const Layout= ({children})=>{
    return (
    <>
    <header className="header-layout">
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
    <footer className="footer-layout">©202 Digital Booking</footer>
    </>)

}


export default Layout