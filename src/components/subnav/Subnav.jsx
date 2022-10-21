// React
import React, { useState } from "react";
import DatePicker from "react-datepicker";

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
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  function handleCalend() {
    setShowDatePicker(!showDatePicker)
    console.log("entre")
  }

  return (
    <div className={styles.subnav_container}>
      <div className={styles.subnav_container_box}>
        <h1 className={styles.title}>Busca ofertas en hoteles, casas y mucho más</h1>
      </div>
      <div className={styles.subnav_container_box}>
        <form action="" className={styles.form_search}>
          <div className={styles.search}>
            <div className={styles.container_icon}>
              <img src={position} alt="Icon Position" className={styles.icon_subnav} />
            </div>
            <input type='text'  placeholder='¿A dónde vamos?' 
            className={styles.input_search}  />

          </div>
          <div className={styles.search}>
            <div className={styles.container_icon}>
              <img src={calend} alt="Icon Calendary" />
            </div>
            <input type='text' onClick={() => handleCalend()} placeholder='Check in - Check out' className={styles.input_search} readOnly/>

          </div>
          <button className='button2'>Buscar</button>
        </form>
      </div>
      <div className={styles.container_calend}>
        {showDatePicker &&
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            monthsShown={2}
            inline
          />}
      </div>
    </div>
  )
}

export default Subnav

//https://www.npmjs.com/package/react-datepicker
//https://reactdatepicker.com/