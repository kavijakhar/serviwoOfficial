import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import mainContext from "../context/MainContext";
export default function Test() {

  const { posts, fetchMoreData, fetchListing } = useContext(mainContext);


  return (
    <>
      <section class=" dark:text-gray-900 pt-36">
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[10px] lg:mb-20 max-w-[510px]">

              <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-gray-600  ">
                Welcome To Our Blogs
              </h2>

            </div>
          </div>
        </div>
        <div class="container max-w-[120rem] py-6 mx-auto space-y-6 sm:space-y-12">
          {/* <a
            rel="noopener noreferrer"
            href="#"
            class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-100 overflow-hidden"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-5 dark:bg-gray-100 transform transition-transform duration-300 hover:scale-105"
            />
            <div class="p-6 space-y-2 lg:col-span-5">
              <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span class="text-xs dark:text-gray-900">February 19, 2021</span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a> */}
          <InfiniteScroll
            dataLength={posts?.length || 0} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={fetchListing?.data?.length > 4}
            scrollableTarget="scrollableDiv"
            loader={
              <div class="flex justify-center">
                <button
                  type="button"
                  class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-100 dark:text-gray-900"
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
            <section class="pt-3 lg:pt-[12px] pb-10 lg:pb-20">
              <div class="container">

                <div class="flex flex-wrap mx-6 sm:mx-0">
                  {posts.length !== 0 &&
                    posts.map((list) => {
                      return (
                        <di class="w-full shadow-lg hover:scale-105  px-5 my-10 md:w-1/2 lg:w-1/4 mx-4  " key={list._id} style={{ 'borderRadius': '10px', 'width': '380px' }}>
                          <div class="max-w-[370px] mx-auto mb-10   h-3/2">
                            <div class="rounded overflow-hidden mb-8 max-h-80 items-center">
                              <img src={list.image} />
                            </div>
                            <div>
                              <span class="bg-primary rounded inline-block text-center py-1 px-4 text-2xl leading-loose font-semibold text-gray-700 mb-5">
                                {list.date}
                              </span>
                              <h3>
                                <a href="javascript:void(0)" class="font-semibold text-2xl sm:text-2xl lg:text-3xl xl:text-3xl mb-4 inline-block text-dark hover:text-primary">
                                  {title}
                                </a>
                              </h3>
                              <p class=" text-2xl text-body-color">
                                {description}
                              </p>
                            </div>
                          </div>
                        </di>
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
