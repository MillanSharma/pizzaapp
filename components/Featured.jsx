import React, { useState } from 'react'
import Image from 'next/image';
import styles from '../styles/Featured.module.css'
import {AiOutlineArrowLeft} from 'react-icons/fa'
const Featured = () => {
    const images=[
        "https://res.cloudinary.com/badalmera/image/upload/v1650883633/uploads/feature_images/1_joo8ag.png",
        "https://res.cloudinary.com/badalmera/image/upload/v1650883634/uploads/feature_images/2_zvgj2g.png",
        "https://res.cloudinary.com/badalmera/image/upload/v1650883632/uploads/feature_images/3_oevaxk.png"
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
           <Image src='https://res.cloudinary.com/badalmera/image/upload/v1650883632/uploads/feature_images/arrowl_jxu5un.png' alt='' layout='fill' objectFit='contain'/>
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
        <Image src="https://res.cloudinary.com/badalmera/image/upload/v1650883631/uploads/feature_images/arrowr_v60gyh.png" alt="" layout='fill' objectFit='contain'/>
    
     </div>
    </div>
  )
}

export default Featured