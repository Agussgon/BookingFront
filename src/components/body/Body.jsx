// React
import React from 'react'

//Styles
import '../../styles/index.css' //General
import styles from './body.module.css' //Module

//json 
import data from '../../data/data.json'
// importando componente hijo
import List from './List'

const Body = () => {

  return (
    
    <main >
      <div className={styles.bodyCont}>
       <List data={data}/>
      </div>
      
    </main>
  )
}

export default Body