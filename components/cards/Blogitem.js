import React from 'react'
import styles from '../../styles/basicpage/Blogs.module.css'
import { format, parseISO } from 'date-fns'
import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import mainContext from "../../context/MainContext";
import Link from 'next/link';

export default function Blogitem({ blogdata }) {
    const { posts, fetchMoreData, fetchListing } = useContext(mainContext);
    const date = parseISO(blogdata.createdAt);
    const formattedDate = format(date, 'do MMM, yyyy');
    var deslegnth = 80; 
    var titlegnth = 30; 
    var description = blogdata.description.slice(0, deslegnth);
    var title = blogdata.title.slice(0, titlegnth);



    return (
        <div className="container max-w-[120rem] py-6 mx-auto space-y-6 sm:space-y-12">

                <div className="flex flex-wrap ">

                    <div className="w-full  h-3/2 shadow-lg hover:scale-105  px-5 my-10 md:w-1/2 lg:w-1/3 mx-4  " style={{ 'borderRadius': '10px', 'width': '450px' }}>
                        <div className="max-w-[400px] mx-auto mb-10  ">
                            <div className="rounded overflow-hidden mb-8 max-h-60 items-center">
                                <img src={blogdata.image} />
                            </div>
                            <div>
                                <span className="bg-primary rounded inline-block text-center py-1 px-4 text-2xl leading-loose font-semibold text-gray-700 mb-5">
                                    {blogdata.authorName}
                                </span>
                                <span className="bg-primary rounded inline-block text-center py-1 px-4 text-2xl leading-loose font-semibold text-gray-700 mb-5">
                                    {formattedDate}
                                </span>
                                <h3>
                                    <Link href={'#'} className="font-semibold text-2xl sm:text-2xl lg:text-3xl xl:text-3xl mb-4 inline-block text-dark hover:text-primary">
                                        {title}
                                    </Link>
                                </h3>
                                <p className=" text-2xl text-body-color" >
                                    {description} ....    <Link type='button' href={`/blog/${blogdata.slug}`}   className='bg-gray-500 p-2  text-white rounded-3xl font-medium my-3'>Read More</Link>
                                </p>
                                
                            
                            </div>
                        </div>
                    </div>
                </div>
  
        </div>






    )
}
