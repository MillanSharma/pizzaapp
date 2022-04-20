import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-pizza</title>
        <meta name="description" content="Pizza ordering website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
     </div>
  )
}
