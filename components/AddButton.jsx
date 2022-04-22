import React from 'react'
import styles from "../styles/AddButton.module.css"
import {useState} from 'react'
const AddButton = ({setClose}) => {
  return (
    <button onClick={()=>setClose(false)} 
    className={styles.mainAddButton}>
Add New Pizza
    </button>
  )
}

export default AddButton