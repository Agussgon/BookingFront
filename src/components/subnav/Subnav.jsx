// React
import React from 'react'

//Styles
import '../../styles/index.css' //General
import styles from './subnav.module.css' //Module

//Assets
import calend from '../../assets/icons/calend.png'
import position from '../../assets/icons/position.png'

const Subnav = () => {
  return (
    <div className={styles.subnav_container}>
      <div className={styles.subnav_container_box}>
        <h2>Busca ofertas en hoteles, casas y mucho más</h2>
      </div>
      <div className={styles.subnav_container_box}>
        <form action="" className={styles.form_search}>
          <div className={styles.search}>
            <img src={position} alt="Icon Position" className={styles.icon_subnav} />

            <input type='text' placeholder='¿A dónde vamos?' />

          </div>
          <div className={styles.search}>
            <img src={calend} alt="Icon Calendary" />
            <input type='text' placeholder='Check in - Check out' />
          </div>
          <div>
            {/* Como tenemos dos tipos de botones en todas las pantallas el estilo del button2
            se dejo en index.css para poder usarlo en otras pantallas al igual el button1 que fue el que crearon al principio */}
            <button  className='button2'>Buscar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subnav