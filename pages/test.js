import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import mainContext from "../context/MainContext";
export default function Test() {
  const { posts, fetchMoreData, fetchListing } = useContext(mainContext);
  return (
    <>
      <section class="dark:bg-gray-200 dark:text-gray-900 pt-36">
        <div class="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-100 overflow-hidden"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-100 transform transition-transform duration-300 hover:scale-105"
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
          </a>
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
            <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.length != 0 &&
                posts.map((list) => {
                  return (
                    <a
                      key={list._id}
                      rel="noopener noreferrer"
                      href="#"
                      class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-100 overflow-hidden"
                    >
                      <img
                        role="presentation"
                        class="object-cover w-full rounded h-44 dark:bg-gray-100 transform transition-transform duration-300 hover:scale-110"
                        src={list.image}
                      />
                      <div class="p-6 space-y-2">
                        <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                          {list.title}
                        </h3>
                        <span class="text-xs dark:text-gray-900">
                          January 21, 2021
                        </span>
                        <p>
                          Mei ex aliquid eleifend forensibus, quo ad dicta
                          apeirian neglegentur, ex has tantas percipit perfecto.
                          At per tempor albucius perfecto, ei probatus consulatu
                          patrioque mea, ei vocent delicata indoctum pri.
                        </p>
                      </div>
                    </a>
                  );
                })}
            </div>
          </InfiniteScroll>
     
        </div>
      </section>
    </>
  );
}
