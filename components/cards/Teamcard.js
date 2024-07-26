import React from 'react'
import styles from '../../styles/basicpage/Team.module.css'
import Link from 'next/link'
export default function Teamcard() {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="aartijakhar.jpeg" alt=""/>
      </div>
      <div className={styles.info}>
        <h3>Aarti Jakhar</h3>
        <span>MERN Stack Developer</span>
        <div className={styles.icons}>
          <Link href={'https://www.facebook.com/profile.php?id=100090706227077'} target='_blank' className="fab fa-facebook-f"></Link>
          <Link href={'https://www.linkedin.com/in/aarti-jakhar-developer/'} target='_blank' className="fab fa-linkedin"></Link>
          {/* <Link href={'/'} className="fab fa-instagram"></Link> */}
        </div>
      </div>
    </div> 
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="kavitajakhar.png" alt=""   />
      </div>
      <div className={styles.info}>
        <h3>Kavita Jakhar</h3>
        <span>MERN Stack Developer</span>
        <div className={styles.icons}>
          <Link href={'https://www.facebook.com/profile.php?id=100089346775643'} target='_blank' className="fab fa-facebook-f"></Link>
          <Link href={'https://www.linkedin.com/in/kavita-jakhar-webdeveloper/'} target='_blank' className="fab fa-linkedin"></Link>
          {/* <Link href={'/'} className="fab fa-instagram"></Link> */}
        </div>
      </div>
    </div> 
 </>
  )
}
