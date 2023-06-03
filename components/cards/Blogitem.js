import React from 'react'
import styles from '../../styles/basicpage/Blogs.module.css'
export default function Blogitem({blogdata}) {
  return (
      <div class={styles.box}>
            <div class={styles.image}>
                <img src="blog01.jpg" alt=""/>
            </div>
            <div class={styles.content}>
                <a href="#" class={styles.title}>{blogdata.category}</a>
                <span>by admin / 21st may, 2021</span>
                <p>{blogdata.title}</p>
                <a href="#" class="btn">read more</a>
            </div>
      
        </div>
  )
}
