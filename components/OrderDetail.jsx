import React from 'react'
import { useState } from 'react';
import styles from '../styles/OrderDetail.module.css'
const OrderDetail = ({total,createOrder}) => {
    const [customer, setCustomer]=useState("");
    const [address, setAddress]=useState("")
    const handleClick=()=>{
createOrder({customer, address,total,method:0})
    }
  return (
    <div className={styles.container}>OrderDetail
 <div className={styles.wrapper}>
     <h1d className={styles.title} >You will pay ${} after delivery</h1d>
<div className={styles.item}>
    <label className={styles.label}>Name Surname</label>
    <input placeholder="Name" type="text" 
    className={styles.input}
    onChange={(e)=>setCustomer(e.target.value)}
    ></input>
    </div>
    <div className={styles.item}>
        <label className={styles.label}>Phone Number</label>
        <input type="text"
        placeholder='Phone number'
        className={styles.input}/>

    </div>
    <div className={styles.item}>
        <label className={styles.label}>Address</label>
        <input type="text"
        placeholder='Address'
        className={styles.textarea}
        onChange={(e)=>setAddress(e.target.value)}/>

    </div>
    <button className={styles.button} 
    onClick={handleClick}>
        Order
    </button>
    
</div>
 </div>
    )
}

export default OrderDetail