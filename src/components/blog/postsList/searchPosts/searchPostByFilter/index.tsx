import { PostsList } from "../..";
import { GET_FILTERED_POSTS_QUERY } from "@utils/blogApi";
import { useQuery } from "@apollo/client";
import { Loading } from "@components/blog/loading";
import { NotFound } from "@components/notFound";
import { ReturnButton } from "../returnButton";
import { PostsNotFound } from "../postsNotFound";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { useState } from "react";
import { IPostsData } from "@utils/types";

export const SearchPostsByFilter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { filter } = useFilterPosts();
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_FILTERED_POSTS_QUERY,
    {
      variables: {
        filter,
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
            ...fetchMoreResult.postsConnection,
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
    <div className="">
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <ReturnButton message="Retornar às publicações" />
          <NotFound pageType="postsList" />
        </>
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <ReturnButton message="Retornar às publicações" />
          <PostsList
            fetchMorePosts={fetchMorePosts}
            isLoading={isLoading}
            data={data}
          />
        </>
      ) : (
        <>
          <ReturnButton message="Retornar às publicações" />
          <PostsNotFound searchType="searchingByFilter" />
        </>
      )}
    </div>
  );
};
