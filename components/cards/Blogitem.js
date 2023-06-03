import React from 'react'
import styles from '../../styles/basicpage/Blogs.module.css'
export default function Blogitem() {
  return (

        <div class={styles.box}>
            <div class={styles.image}>
                <img src="blog01.jpg" alt=""/>
            </div>
            <div class={styles.content}>
                <a href="#" class={styles.title}>tasty and refreshing coffee</a>
                <span>by admin / 21st may, 2021</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
      
  )
}
