import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { PostsList } from "../..";
import { GET_POSTS_BY_TITLE_QUERY } from "@utils/blogApi";
import { useQuery } from "@apollo/client";
import { Loading } from "@components/blog/loading";
import { NotFound } from "@components/notFound";
import { ReturnButton } from "../returnButton";
import { PostsNotFound } from "../postsNotFound";
import { useState } from "react";
import { IPostsData } from "@utils/types";

export const SearchPostsByTitle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { postTitle } = useSearchPostByTitle();
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_POSTS_BY_TITLE_QUERY,
    {
      variables: {
        title: postTitle,
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
    <div className="">
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="postsList" />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <ReturnButton message="retornar" />
          <PostsList
            fetchMorePosts={fetchMorePosts}
            isLoading={isLoading}
            data={data}
          />
        </>
      ) : (
        <>
          <ReturnButton message="Retornar às publicações" />
          <PostsNotFound searchType="searchingByTitle" />
        </>
      )}
    </div>
  );
};
