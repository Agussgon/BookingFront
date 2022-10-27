// Components
import List from '../components/body/List';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import NavbarLogin from '../components/navbar/NavbarLogin';
import Subnav from '../components/subnav/Subnav';



function Home() {
  
  //const local = JSON.parse(localStorage.getItem('logged'))
  // ver si funciona 
    const user= JSON.parse(localStorage.getItem('logged'));
    //const user = local;
    console.log(user);
  // cuando redirecciona desde el login no esta guardando la sesión por eso no funciona...
    return (
      <>
     
      { user === true  ? <NavbarLogin/>:<Navbar/>}
      <Subnav/>
      <List/>
      <Footer/>
      </>
    );
  }
  
  export default Home;