import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
<p className={styles.desc}>
    lorem ipsum sit amet, constere adipdifdufl fdihdfen  di3eklasf
    lorem ipsum sit amet, constere adipdifdufl fdihdfen  di3eklasflorem
     ipsum sit amet, constere adipdifdufl fdihdfen  di3eklas
    florem ipsum sit amet, constere adipdifdufl fdihdfen  di3eklasf
</p>
<div className={styles.wrapper}>
{pizzaList.map((pizza)=>(
<PizzaCard key={pizza._id} pizza={pizza}/>)
)}
</div>


    </div>
  )
}

export default PizzaList