// React
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

//Styles
import '../../styles/index.css' //General
import styles from './subnav.module.css' //Module
import "react-datepicker/dist/react-datepicker.css"; //react-datepicker
import "./s.css"

//Assets
import calend from '../../assets/icons/calend.png'
import position from '../../assets/icons/position.png'

// lista de ciudades de prueba
import listCity from '../../data/city.json'
import Dropdown from "./Dropdown";
import { formatDate } from "../../helpers/DateUtils";


/*● Crear un bloque que incluya un heading <h1 /> como título y un parágrafo <p />.
● Crear un formulario que incluya:
○ Lista desplegable (Select): Ciudad.
○ Fecha de inicio y fin: Calendario doble. !!!!
○ Botón para buscar.
Por el momento la lista de ciudades debe ser obtenida de un JSON estático. */

const Subnav = () => {
  const [model, setModel] = useState({
    destiny: '',
    dateDeparture: ''
  })
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setFullFormatDate();
  };
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [city, setCity] = useState();

  function setFullFormatDate() {
    const start = startDate ? formatDate(startDate) : 'Sin fecha';
    const end = endDate ? formatDate(endDate) : 'Sin fecha';
    model.dateDeparture = `${start} - ${end}`;
  }

  function handleCity(e) {
    setCity(e.target.value);
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

            <select onChange={handleCity} placeholder='¿A dónde vamos?'
              className={styles.input_search} >

              {
                listCity.map(city =>
                  // <optgroup label={city.city.name} key={city.id} 
                  // style={{display: city.property}} >
                  <option key={city.id} style={{ display: city.property }}>

                    {city.city.name}
                    {city.city.subname}

                    {/* {city.city.lister} */}

                  </option>
                  // </optgroup>
                )
              }
            </select>

          </div>
          <div className={styles.search}>
            <div className={styles.container_icon}>
              <img src={calend} alt="Icon Calendary" />
            </div>
            <div className={styles.input_search}>
              <input type='text' placeholder='Check in' readOnly value={model.dateDeparture} className={styles.input_inter_search} onClick={()=>setShowDatePicker(true)} />
              {/* <input type='text' placeholder='Check out' className={styles.input_inter_search} readOnly value={endDate} /> */}
            </div>

          </div>
          <button className='button2'>Buscar</button>
        </form>
      </div>
      <div className={styles.container_calend}>
        {showDatePicker &&
          <DatePicker
          selected={setFullFormatDate()}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}          
          selectsRange
          monthsShown={2}
          onClickOutside={()=>setShowDatePicker(false)}
          inline
        />}

        


      </div>

      {/* <Dropdown title="Select movie" items={listCity} multiSelect /> */}
    </div>
  )
}

export default Subnav
// https://www.youtube.com/watch?v=t8JK5bVoVBw  custom select

//https://www.npmjs.com/package/react-datepicker
//https://reactdatepicker.com/