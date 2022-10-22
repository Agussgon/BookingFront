// React
import React from "react";

//Styles
import "../../styles/index.css"; //General
import styles from "./footer.module.css"; //Module

//iconos
import face from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/instagram.png";
import link from "../../assets/icons/linked.png";
import twitter from "../../assets/icons/twitter.png";


const Footer = () => {
  return (
    <>
      <footer className={styles.footer1}>
        <div className={styles.conteiner_footer} >
          <div>©2022 Digital Booking</div>
          <div className={styles.conteiner_icons}>
            <img src={face} alt="facebook" className={styles.icons_footer}/>
            <img src={insta} alt="instagram" className={styles.icons_footer} />
            <img src={link} alt="linked" className={styles.icons_footer}/>
            <img src={twitter} alt="twitter" className={styles.icons_footer}/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
