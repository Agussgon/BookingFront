// React
import React, { useState } from "react";
// import DatePicker from "react-datepicker";


//Styles
import '../../styles/index.css' //General
import styles from './subnav.module.css' //Module
import "react-datepicker/dist/react-datepicker.css"; //react-datepicker

//Assets
import calend from '../../assets/icons/calend.png'
import position from '../../assets/icons/position.png'


/*● Crear un bloque que incluya un heading <h1 /> como título y un parágrafo <p />.
● Crear un formulario que incluya:
○ Lista desplegable (Select): Ciudad.
○ Fecha de inicio y fin: Calendario doble. !!!!
○ Botón para buscar.
Por el momento la lista de ciudades debe ser obtenida de un JSON estático. */

const Subnav = () => {
  // const [startDate, setStartDate] = useState(new Date());

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
        
            <button  className='button2'>Buscar</button>
          </div>
        </form>
      </div>

      {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
      inline
      /> */}

    </div>
  )
}

export default Subnav