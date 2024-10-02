// import { useState } from "react";
import { BlogBanner } from "./blogBanner";
import { useQuery } from "@apollo/client";
import { IPostsData } from "utils/types";
import { GET_POSTS_QUERY } from "utils/blogApi";
import { EmptyBlog } from "./emptyBlog";
import { Loading } from "./loading";
import { NotFound } from "@components/notFound";
import { SearchPosts } from "./postsList/searchPosts";

export const Blog = () => {
  const { loading, error, data } = useQuery<IPostsData>(GET_POSTS_QUERY, {
    variables: {
      first: 10,
    },
  });

  return (
    <div>
      <BlogBanner />
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="postsList" />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <SearchPosts data={data}/>
        </>
      ) : (
        <EmptyBlog />
      )}
    </div>
  );
};
