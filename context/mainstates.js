import React, { useEffect, useState } from "react";
import MainContext from "./MainContext.js";
import { useQuery, useQueryClient } from "react-query";

const MainStates = (props) => {
  const [posts, setPosts] = useState([]);
  const [lastNewsId, setLastNewsId] = useState("");
  const [searchParams, setSearchParams] = useState({ selectValue: "", searchValue: "" });
  const queryClient = useQueryClient();
  const [appliedFilter, setAppliedFilter] = useState(false)

  const getAllPosts = async () => {
    const { selectValue, searchValue } = searchParams;
    let query = new URLSearchParams();

    if (!searchValue && !selectValue && lastNewsId) {
      query.append("last_news_id", lastNewsId);
    }
    if (selectValue && searchValue) {
      query.append(selectValue, searchValue);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_KEY}/blogs/blog?${query.toString()}`);
    const data = await res.json();
    return data;
  };

  const fetchListing = useQuery(["listData", searchParams, lastNewsId], getAllPosts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { isLoading, error, data, refetch, isFetching } = fetchListing;

  const fetchMoreData = () => {
    if (data.length > 0) {
      setLastNewsId(data[data.length - 1]._id);
    }
  };

  useEffect(() => {
    if (data) {
      if (posts.length === 0 || lastNewsId === "") {
        if (!isLoading && !error) {
          setPosts(data);
        }
      } else {
        setPosts((prevPosts) => prevPosts.concat(data));
      }
    }
  }, [data]);

  useEffect(() => {
    if (lastNewsId && !searchParams.searchValue && !searchParams.selectValue) {
      setTimeout(() => {
        refetch();
      }, 1000);
    }
  }, [lastNewsId]);

  const handleSearch = (selectValue, searchValue) => {
    setSearchParams({ selectValue, searchValue });
    setLastNewsId(""); // Reset the lastNewsId for new search
    setPosts([]); // Clear current posts
    setAppliedFilter(true)
    queryClient.invalidateQueries("listData");
  };
  const clearFilter = () => {
    setSearchParams({ selectValue: "", searchValue: "" });
    setLastNewsId("");
    setPosts([]);
    setAppliedFilter(false)
    queryClient.invalidateQueries("listData");
  };
  return (
    <MainContext.Provider
      value={{
        posts,
        fetchListing,
        fetchMoreData,
        handleSearch,
        clearFilter,
        appliedFilter
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainStates;
