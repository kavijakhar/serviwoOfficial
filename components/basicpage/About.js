import React from 'react'
import styles from '../../styles/basicpage/About.module.css'
import Link from 'next/link'
export default function About() {
  return (
    <section id="about" className={styles.about}>

      <h1 className={`${styles.heading} heading`}>about us</h1>

      <div className={styles.row}>

        <div className={`md:max-w-[60%] ${styles.content}`}>
          <h3   style={{'lineHeight': 'inherit'}}>Empowering Your Digital Presence: Discover Serviwo&apos;s Unique Web Development Services</h3>
          <p>Elevate Your Brand, Elevate Your Success</p>
          <p>Serviwo is your dedicated partner in the world of web development, offering a distinctive blend of creativity and technology. We are your catalyst for digital transformation, turning ordinary websites into exceptional online experiences. Whether you&apos;re an entrepreneur, a startup, or an established business, Serviwo crafts websites that not only look remarkable but also function seamlessly. Our expertise spans a wide array of services, from designing engaging e-commerce platforms to user-friendly corporate websites. With Serviwo, you&apos;re not just getting a website – you&apos;sre gaining a strategic digital asset that propels your brand forward. Welcome to a new era of web development, welcome to Serviwo.</p>
          <Link href={"/aboutUs"}><button className={styles.btn}>Know More</button></Link>
        </div>

        <div className="image">
          <img src="aboutus.gif" alt="dddddddddd" width={510} />
        </div>

      </div>


    </section>
  )
}
