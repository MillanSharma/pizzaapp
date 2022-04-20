import React, { useState } from 'react'
import Image from 'next/Image';
import styles from '../styles/Featured.module.css'
import {AiOutlineArrowLeft} from 'react-icons/fa'
const Featured = () => {
    const images=[
        "/img/1.png",
        "/img/2.png",
        "/img/3.png"
    ];
    const [index, setIndex]=useState(0)
    const handleArrow=(direction)=>{
        if(direction==='l'){
                setIndex(index!==0?index-1:2)
            }
        else{
            setIndex(index!==2?index+1:0)
        }

    }
  return (
    <div className={styles.container}>
       <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
           {/* <AiOutlineArrowLeft /> */}
           <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain'/>
       </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img, index)=>(
        <div className={styles.imgContainer} key={index}>
            <Image  src={img} alt=""
            layout='fill' objectFit='contain'/>
            </div>
            ))}
        </div>
     <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" alt="" layout='fill' objectFit='contain'/>
    
     </div>
    </div>
  )
}

export default Featured