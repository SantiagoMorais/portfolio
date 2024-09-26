import { useState } from "react";
import { ArticlesList } from "./articlesList";
import { BlogBanner } from "./blogBanner";
import { useQuery } from "@apollo/client";
import { IPostsData } from "utils/types";
import { GET_POSTS_QUERY } from "utils/blogApi";

export const Blog = () => {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_POSTS_QUERY,
    {
      variables: {
        first: 10,
      },
    }
  );

  console.log(data);

  const loadMorePosts = () => {
    if (loading || !data) return;
    const endCursor: string = data.postsConnection.pageInfo.endCursor;

    setLoadingMore(true);

    fetchMore({
      variables: {
        after: endCursor,
        first: 5,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setLoadingMore(false);

        if (!fetchMoreResult) return prevResult;

        return {
          postsConnection: {
            ...fetchMoreResult.postsConnection,
            edges: [
              ...prevResult.postsConnection.edges,
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
      <ArticlesList />
    </div>
  );
};
