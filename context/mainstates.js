import React, { useEffect, useState } from "react";
import MainContext from "./MainContext.js";
import { useQuery } from "react-query";
const MainStates = (props) => {

  // listing status //
  // save post
  const [posts, setPosts] = useState([]);
  const [lastNewsId, setLastNewsId] = useState("");

  // get posts functions
  const getAllPosts = async () => {
    const res = await fetch(
      `http://localhost:3000/api/blogs/blog?last_news_id=${lastNewsId ? lastNewsId : ""}`
    );

    const data = await res.json();
    return data;
  };
  const fetchListing = useQuery("listData", getAllPosts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // enabled:false
  });

  const { isLoading, error, data, refetch, isFetching } = fetchListing;

  const fetchMoreData = async () => {
    setLastNewsId(data[data.length - 1]._id);
  };
  useEffect(() => {
    if (data) {
      if (posts?.length === 0 || lastNewsId === null) {
        if (!isLoading && !error) {
          setPosts(data);

        }
      } else {
        setPosts(posts.concat(data));
      }
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      refetch();

    }, 1000);
  }, [lastNewsId]);


  return (
    <MainContext.Provider
      value={{
        //header
        posts,
        fetchListing,
        fetchMoreData,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainStates;
