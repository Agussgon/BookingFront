// React
import React from 'react'

//Styles
import '../../styles/index.css' //General
import styles from './footer.module.css' //Module

//iconos
import face from '../../assets/icons/facebook.png';
import insta from '../../assets/icons/instagram.png';
import link from '../../assets/icons/linked.png';
import twitter from '../../assets/icons/twitter.png';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer1}>©2022 Digital Booking</footer>
      <img src={face} alt='facebook' />
      <img src={insta} alt='instagram' />
      <img src={link} alt='linked' />
      <img src={twitter} alt='twitter' />
    </>
  )
}

export default Footer