// React
import React from 'react'

//Styles
import '../../styles/index.css' //General
import styles from './body.module.css' //Module

//json 
import data from '../../data/data.json'

import Card from './Card'

const Body = () => {

  return (
    
    <main >
      <div className={styles.bodyCont}>
       
        { 
                data.map(type =>< Card key={type.id} type={type.type} name={type.name} start={type.Start} url={type.urlImagen} descripcion={type.description}/>)
               }
      </div>
      
    </main>
  )
}

export default Body