import React, {useState} from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
const Product = () => {
    const [size, setSize] = useState(0)
const pizza={
    id:1,
    img:"/img/pizza1.jfif",
    name:'champa kola',
    price :[33,45,66],
    desc:"lopaer lsare fijdfie  fidnfyefsf  dfdjfeif df"
}

  return (
    <div className={styles.container}>
        <div className={styles.left}>
<div className={styles.imgContainer}>
    <Image src={pizza.img} layout='fill' alt=""
    objectFit='contain'/>
</div>
        </div>
        <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
       <p className={styles.desc}>{pizza.desc}</p>
       <h2 className={styles.choose}>Choose the size</h2>
       <div className={styles.sizes}>
           <div className={styles.size} onClick={()=>setSize(0)}>
               <Image src="/img/size.png" layout='fill' alt=""/>
               <div className={styles.number} style={{top:-"5", right:"-23px"}}>Small</div>
           </div>
           <div className={styles.size} onClick={()=>setSize(1)}>
               <Image src="/img/size.png" layout='fill' alt=""/>
               <span className={styles.number} style={{top:-"5", right:"-30px"}}>Medium</span>
           </div>
           <div className={styles.size} onClick={()=>setSize(2)}>
               <Image src="/img/size.png" layout='fill' alt=""/>
               <span className={styles.number} style={{top:-"5", right:"-5px"}}>Large</span>
           </div>
          </div> 
          <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
            <div className={styles.option}>
                <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}/>
                <label htmlFor='double'>Double Ingredients</label>
                </div>                
                <div className={styles.option}>
                <input
                type="checkbox"
                id="cheese"
                name="cheese"
                className={styles.checkbox}/>
                <label htmlFor='cheese'>Extra Cheese</label>
                </div>
                <div className={styles.option}>
                <input
                type="checkbox"
                id="pinapple"
                name="pinapple"
                className={styles.checkbox}/>
                <label htmlFor='pinapple'>Extra Pineapple</label>
                </div>
                <div className={styles.option}>
                <input
                type="checkbox"
                id="chilli"
                name="chilli"
                className={styles.checkbox}/>
                <label htmlFor='chilli'>Double Chilli</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number"
                defaultValue={1}
                min={1}
                className={styles.quantity}/>
                <button className={styles.button} >Add to Cart</button>
            </div>
        </div>
        </div>
    
  )
}

export default Product