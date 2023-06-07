import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import mainContext from "../context/MainContext";
import Link from "next/link";
import { format, parseISO } from 'date-fns'



export default function Test() {
  const { posts, fetchMoreData, fetchListing } = useContext(mainContext);


  return (
    <>
      <section className=" dark:text-gray-900 pt-36">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[10px] lg:mb-20 max-w-[510px]">

              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-gray-600  ">
                Welcome To Our Blogs
              </h2>

            </div>
          </div>
        </div>
        <div className="container max-w-[120rem] py-6 mx-auto space-y-6 sm:space-y-12">
          <InfiniteScroll
            dataLength={posts?.length || 0} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={fetchListing?.data?.length > 4}
            scrollableTarget="scrollableDiv"
            loader={
              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-100 dark:text-gray-900"
                >
                  Loading more posts...
                </button>
              </div>
            }
            endMessage={
              <p className="text-center py-2">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <section className="pt-3 lg:pt-[12px] pb-10 sm:ml-40  lg:pb-20">
              <div className="container">

                <div className="flex flex-wrap mx-6  sm:mx-0">
                  {posts.length !== 0 &&
                    posts.map((list) => {

                      const date = parseISO(list.createdAt);
                      const formattedDate = format(date, 'do MMM, yyyy');
                      const maxdec = 20;
                      const slicedec = list.description.split(' ').slice(0, maxdec).join(' ');
                      const description = list.description.split(' ').length > slicedec ? slicedec + '...' : slicedec;

                      const maxtitle = 7;
                      const slicetit = list.title.split(' ').slice(0, maxtitle).join(' ');
                      const title = list.title.split(' ').length > slicetit ? slicetit + '...' : slicetit;


                      return (
                        <Link href={`/blog/${list.slug}`} className="w-full shadow-lg hover:scale-105  px-5 my-10 md:w-1/2 lg:w-1/4 mx-4  " key={list._id} style={{ 'borderRadius': '10px', 'width': '380px' }}>
                          <div className="max-w-[400px] mx-auto mb-10  ">
                            <div className="rounded overflow-hidden mb-8 max-h-60 items-center">
                              <img src={list.image} />
                            </div>
                            <div>
                              <span className="bg-primary rounded inline-block text-center py-1 px-4 text-2xl leading-loose font-semibold text-gray-700 mb-5">
                                {list.authorName}
                              </span>
                              <span className="bg-primary rounded inline-block text-center py-1 px-4 text-2xl leading-loose font-semibold text-gray-700 mb-5">
                                {formattedDate}
                              </span>
                              <h3>
                                <div className="font-semibold text-2xl sm:text-2xl lg:text-3xl xl:text-3xl mb-4 inline-block text-dark hover:text-primary">
                                  {title}..
                                </div>
                              </h3>
                              <p className=" text-2xl text-body-color" >
                                {description}...   
                                  {/* <Link href={`/blog/${list.slug}`} className='bg-gray-500 p-2  text-white rounded-3xl font-medium my-3'>Read More</Link> */}
                              </p>


                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </section>


          </InfiniteScroll>
        </div>

      </section>
    </>
  );
}
