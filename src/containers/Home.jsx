// Components
import List from '../components/body/List';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Subnav from '../components/subnav/Subnav';

function Home() {
  return (
    <>
    <Navbar/>
    <Subnav/>
    <List />
    <Footer/>
    </>
  );
}

export default Home;
