// React
import React from 'react'

//Styles
import '../../styles/index.css' //General
import styles from './body.module.css' //Module


const Body = () => {
  return (
    <main >
      <div className={styles.bodyCont}>
        <h1>Body</h1>
      </div>
      
    </main>
  )
}

export default Body