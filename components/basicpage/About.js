import React from 'react'
import styles from '../../styles/basicpage/About.module.css'
export default function About() {
  return (
    <section id="about" className={styles.about}>

      <h1 className={`${styles.heading} heading`}>about us</h1>

      <div className={styles.row}>

        <div className={styles.content}>
          <h3>We build Logo Design that build your busines</h3>
          <p>LOGO HI LOGO is spreading faster than fire  now past 3443 business logo designed! WE provide Professional, Premium  & LUXURY 2D/3D logo</p>
          <p>Our team of dedicated designers combines their creativity and expertise to craft visually captivating logos that leave a lasting impression. We understand the power of a well-designed logo in establishing a brands identity and setting it apart from the competition.</p>
          <a href="/abouts"><button className={styles.btn}>read more</button></a>
        </div>

        <div className="image">
          <img src="aboutus.gif" alt="dddddddddd" width={510} />
        </div>

      </div>


    </section>
  )
}
