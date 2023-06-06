import React, { useContext, useEffect, useState } from 'react'
import Blogitem from '../cards/Blogitem'
import styles from '../../styles/basicpage/Blogs.module.css'
import mainContext from '../../context/MainContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import style from '../../styles/basicpage/About.module.css'
import { FaHandPointDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Blogs(props) {
  const { posts, fetchMoreData, fetchListing } = useContext(mainContext)


  return (
    <InfiniteScroll
      dataLength={posts?.length || 0} //This is important field to render the next data
      next={fetchMoreData}
      hasMore={fetchListing?.data?.length > 4}
      scrollableTarget="scrollableDiv"
    // loader={
    //   <div class="flex justify-center">
    //     <button
    //       type="button"
    //       class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-100 dark:text-gray-900"
    //     >
    //       Loading more posts...
    //     </button>
    //   </div>
    // }
    // endMessage={
    //   <p className="text-center py-2">
    //     <b>Yay! You have seen it all</b>
    //   </p>
    // }
    >
      <section className={styles.blogs} id="blogs">
        <h1 className={`${styles.heading} heading`}>our blogs</h1>

        <div className={styles.boxContainer}>



          {
            posts.length !== 0 &&
            posts.map((blogitem, index) => {
              if (index < 6) {
                console.log(posts);
                return <Blogitem key={blogitem._id} blogdata={blogitem} />;
              }
              return null; // Skip rendering for posts beyond the first six
            })
          }




        </div>
        <div className='text-center text-4xl text-gray-500'><h1>For show all Blogs<FaHandPointDown className='text-center m-auto mt-2' /><Link className={`${style.btn} rounded-md`}  type='button' href={'/allblogs'} >Click here</Link></h1> </div>
      </section>
    </InfiniteScroll>
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
