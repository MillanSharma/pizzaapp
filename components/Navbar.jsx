import styles from '../styles/Navbar.module.css'
import Image from 'next/Image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
const Navbar =()=>{
    const quantity = useSelector(state=>state.cart.quantity)
    return(
        <div className={styles.container}>
            <div className={styles.item}> 
            <div className={styles.callButton}>
                <Image src='/img/telephone.png' 
        width="90px" height="90px" alt=""/>
                </div>
                <div className={styles.texts}>
                <div className={styles.text}>ORDER NOW!</div>
                <div className={styles.text}>9038949388</div>
                </div>
                </div> 
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                    <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/e-pizza.png" alt='' width="59px" height="59px"
                    />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blogs</li>
                    <li className={styles.listItem}>Contacts</li>

                </ul>
            
            
            </div> 
                <Link href="/cart" passHref>
            <div className={styles.item}> 
            <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="59px" height='59px'/>
                <div className={styles.counter}>{quantity}</div>
            </div>
            </div>
                </Link>
        </div>
    )
}
export default Navbar;