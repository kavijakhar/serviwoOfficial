import React, { useContext, useEffect, useState } from 'react'
import Blogitem from '../cards/Blogitem'
import styles from '../../styles/basicpage/Blogs.module.css'
import mainContext from '../../context/MainContext';

export default function Blogs(props) {
  const { posts } = useContext(mainContext)


  return (
    <section className={styles.blogs} id="blogs">
      <h1 className={`${styles.heading} heading`}>our blogs</h1>

      <div className={styles.boxContainer}>
        {
          posts.length != 0 && posts.map((blogitem) => {
            return (

              <Blogitem key={blogitem._id} blogdata={blogitem} />
            )
          })
        }
      </div>
    </section>
  )
}
export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/blogs/blog", {
    method: "GET",

  })
  let allBlogs = await res.json()
  return {
    props: { allBlogs: JSON.parse(JSON.stringify(allBlogs)) }, // will be passed to the page component as props
  };
}
