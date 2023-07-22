import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Header() {
  return (
    <section id="home" className={styles.home}>

    <h1 className={styles.banner}>Logo design & development services</h1>
    <h3 className={styles.slogan}>you have a vision. we have a team to get you there</h3>
    <Link href="https://wa.link/7lautn" target='_blank'><button>get started</button></Link>
    
    
    <div className={`${styles.wave} ${styles.wave1}`}></div>
    <div className={`${styles.wave} ${styles.wave2}`}></div>
    <div className={`${styles.wave} ${styles.wave3}`}></div>
    
    <div className={`fas ${styles.faCog} fa-cog ${styles.nut1}`}></div>
    <div className={`fas ${styles.faCog} fa-cog ${styles.nut2}`}></div>
    
    
    </section>
  )
}
