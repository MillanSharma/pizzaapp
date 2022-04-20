import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/pizza1.jfif' alt='' width="500px" height="500px"/>
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$45.55</span>
        <p className={styles.desc}>
            lorem ipsum dolor sit amet consectueur adispscing edit
        </p>
        </div>
  )
}

export default PizzaCard