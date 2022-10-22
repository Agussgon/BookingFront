// React
import React from 'react'

//Styles
import '../../styles/index.css' //General
import styles from './body.module.css' //Module

//json 
import data from '../../data/data.json'


const Body = () => {



  const card =()=>{};

  return (
    
    <main >
      <div className={styles.bodyCont}>
        <h1>Body</h1>
        { 
                data.map(type =><> <p>{type.name}</p> </> )
               }
      </div>
      
    </main>
  )
}

export default Body