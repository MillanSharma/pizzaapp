import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from "next/link"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
<Image src='https://res.cloudinary.com/badalmera/image/upload/v1650883633/uploads/feature_images/footer_cg1tvw.jpg' layout='fill' alt=""/>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>THIS IS THE MOTTO OF E-PIZZA</h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
         <p className={styles.text}>
           1233 R. Don Road #394.<br /> New Delhi, 343323<br/>49 392333
         </p>
         <p className={styles.text}>
           1233 R. Don Road #394.<br /> New Delhi, 343323<br/>49 392333
         </p>
         <p className={styles.text}>
           1233 R. Don Road #394.<br /> New Delhi, 343323<br/>49 392333
         </p>
         <p className={styles.text}>
           1233 R. Don Road #394.<br /> New Delhi, 343323<br/>49 392333
         </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY UNTIL FRIDAY 
<br />9:30 - 22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY 
<br />12:30 - 24:00
            </p>
          </div>
          <div>
          <Link href="/admin" passHref>
            <button className={styles.adminButton}>Admin Login</button>
                    </Link>
          </div>
      </div>
      </div>
  )
}

export default Footer