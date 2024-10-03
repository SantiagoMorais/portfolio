import { BlogBanner } from "./blogBanner";
import { useQuery } from "@apollo/client";
import { IPostsData } from "utils/types";
import { GET_POSTS_QUERY } from "utils/blogApi";
import { EmptyBlog } from "./emptyBlog";
import { Loading } from "./loading";
import { NotFound } from "@components/notFound";
import { SearchPosts } from "./postsList/searchPosts";
import { useState } from "react";

export const Blog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_POSTS_QUERY,
    {
      variables: {
        first: 10,
      },
    }
  );

  const fetchMorePosts = () => {
    if (loading || error) return;

    setIsLoading(true);
    const endCursor = data?.postsConnection.pageInfo.endCursor;

    fetchMore({
      variables: {
        after: endCursor,
        first: 10,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        setIsLoading(false);
        if (!fetchMoreResult) return previousResult;

        return {
          postsConnection: {
            ...previousResult.postsConnection,
            edges: [
              ...previousResult.postsConnection.edges,
              ...fetchMoreResult.postsConnection.edges,
            ],
          },
        };
      },
    });
  };

  return (
    <div>
      <BlogBanner />
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="postsList" />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <SearchPosts data={data} fetchMorePosts={fetchMorePosts} isLoading={isLoading} />
        </>
      ) : (
        <EmptyBlog />
      )}
    </div>
  );
};
