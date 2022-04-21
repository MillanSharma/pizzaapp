import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Order.module.css'
const Order = () => {
    const status=0;
    const statusClass =(index)=>{
            if(index-status < 1)
                return styles.done;
            if(index - status===1)
                return styles.inProgress;
            if(index-status > 1)
                return styles.undone;
    }
  return (
    <div className={styles.container}>
<div className={styles.left}>
    <div className={styles.row}>
    <table className={styles.table}>
            <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
            </tr>
            <tr className={styles.tr}>
                <td>
                    <span className={styles.id}>3433</span>
                </td>
                <td>
                    <span className={styles.name}>
                        John Deo 
                   </span>
                </td>
                <td>
                   <span className={styles.address}>Jabalpur</span> 
                </td>
                <td>
                     <span className={styles.total}>$34.3</span>
                </td>
            </tr>
        </table>
    </div>
    <div className={styles.row}>
        <div className={statusClass(0)}>
        <Image src="/img/payment.jpg" alt="" height={30} width={30}/>
        <span>Payment </span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedButton} src="/img/checked.png" alt="" width={20} height={20}/>
        </div>
        </div>

        <div className={statusClass(1)}>
        <Image src="/img/preparing.png" alt="" height={30} width={30}/>
        <span>Preparing </span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedButton} src="/img/checked.png" alt="" width={20} height={20}/>
        </div>
        </div>

        <div className={statusClass(2)}>
        <Image src="/img/delivery.png" alt="" height={30} width={30}/>
        <span>On the Way </span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedButton} src="/img/checked.png" alt="" width={20} height={20}/>
        </div>
        </div>

        <div className={statusClass(3)}>
        <Image src="/img/delivered.jfif" alt="" height={30} width={30}/>
        <span>Delivered </span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedButton} src="/img/checked.png" alt="" width={20} height={20} />
        </div>
        </div>

    </div>

</div>
<div className={styles.right}>
<div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$78.09
        </div>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.09
        </div>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$78.00
        </div>
        <button disabled className={styles.button}>PAID</button>

    </div>
   </div>
</div>
  )
}

export default Order