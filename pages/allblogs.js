import InfiniteScroll from "react-infinite-scroll-component";
import { useContext, useState } from "react";
import mainContext from "../context/MainContext";
import Link from "next/link";
import { format, parseISO } from 'date-fns'
import BlogsSkeleton from "../components/skeletons/BlogsSkeleton";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

import { FaSearch } from "react-icons/fa";

export default function Test() {
  const { posts, fetchMoreData, fetchListing, handleSearch, clearFilter, appliedFilter } = useContext(mainContext);
  const [selectValue, setSelectValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const onSearchClick = () => {
    handleSearch(selectValue, searchValue);
  };

  const onClearFilterClick = () => {
    setSelectValue('');
    setSearchValue('');
    clearFilter();
  };
  return (
    <>
      <div className=" dark:text-gray-900 pt-36 flex items-center justify-center">
        <div className="">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[7px] lg:mb-20 max-w-[510px]">
                <h2 className="font-bold text-4xl  sm:text-4xl text-gray-600  " style={{ 'lineHeight': '1' }}>
                  Are you a passionate reader? Read Our Latest Blogs
                </h2>

              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex sm:px-2 mx-44 sm:mx-auto items-center p-6 w-fit space-x-14 bg-white rounded-xl shadow-lg hover:shadow-xl transform sm:hover:scale-x-105 transition duration-500">
              <div className="flex py-3 px-5 text-xl rounded-lg text-gray-500 font-medium cursor-pointer">
                <select
                  id="underline_select"
                  className="block py-2.5 w-full pr-5 pl-1 text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  value={selectValue}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Select</option>
                  <option value="title">Title</option>
                  <option value="authorName">Author Name</option>
                  <option value="categories">Category</option>
                  <option value="date">Date</option>
                </select>
                <IoIosArrowDown className="h-7 w-7 mt-2 opacity-30" />
              </div>
              <div className="flex bg-gray-100 p-4 space-x-5 rounded-lg">
                <FaSearch className="h-6 w-6 opacity-30" />
                <input
                  className="bg-gray-100 outline-none pr-32 text-xl"
                  type={selectValue == 'date' ? 'date' : 'text'}
                  placeholder="Enter Search Value here . . ."
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                {appliedFilter && <div
                  className="bg-gray-400 py-3 px-3 text-white text-xl font-medium rounded-full hover:shadow-lg transition duration-3000 cursor-pointer"
                  onClick={onClearFilterClick}
                >
                  <span><RxCross1 /></span>
                </div>}
              </div>
              <button className="bg-blue-400 py-3 px-5 text-white text-xl font-medium rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" disabled={searchValue == ""} onClick={onSearchClick}>
                <span>Search</span>
              </button>
            </div>
          </div>
          {posts.length === 0 && <img
            src='/empty.gif'
            className='h-auto'
          />}
          {<InfiniteScroll
            dataLength={posts?.length || 0} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={fetchListing?.data?.length > 4}
            scrollableTarget="scrollableDiv"
            loader={
              <div className="flex justify-center">

              </div>
            }
            endMessage={
              <p className="text-center py-2">
                {posts.length !== 0 && <b>Yay! You have seen it all</b>}
              </p>
            }
          >
            <section className="pt-3 lg:pt-[12px] pb-10  lg:pb-20">
              <div className="container m-auto">

                <div className="flex flex-wrap mx-6 justify-center sm:mx-0">
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

                  {
                    fetchListing.isLoading || fetchListing.isFetching &&
                    <>
                      <BlogsSkeleton />
                    </>
                  }
                </div>
              </div>
            </section>


          </InfiniteScroll>}
        </div>

      </div>
    </>
  );
}
