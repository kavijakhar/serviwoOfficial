import React from 'react'
import styles from '../../styles/basicpage/Blogs.module.css'
import { format, parseISO} from 'date-fns'
export default function Blogitem({blogdata}) {
    const date = parseISO(blogdata.createdAt);
    const formattedDate = format(date, 'do MMM, yyyy');
    
    
  return (
      <div class={styles.box}>
            <div class={styles.image}>
                <img src={blogdata.image} alt=""/>
            </div>
            <div class={styles.content}>
                <a href="#" class={styles.title}>{blogdata.category}</a>
                <span>by {blogdata.authorName} / {formattedDate}</span>
                <p>{blogdata.title}</p>
                <a href="#" class="btn">read more</a>
            </div>
      
        </div>
  )
}
