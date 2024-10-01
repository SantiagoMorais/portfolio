// import { useState } from "react";
import { PostsList } from "./postsList";
import { BlogBanner } from "./blogBanner";
import { useQuery } from "@apollo/client";
import { IPostsData } from "utils/types";
import { GET_POSTS_QUERY } from "utils/blogApi";
import { EmptyBlog } from "./emptyBlog";
import { Loading } from "./loading";
import { NotFound } from "@components/notFound";
import { SearchPost } from "./postsList/searchPost";
import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { PostForm } from "./postsList/searchPost/postForm";

export const Blog = () => {
  const { postTitle, setPostTitle } = useSearchPostByTitle();
  // const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { loading, error, data } = useQuery<IPostsData>(GET_POSTS_QUERY, {
    variables: {
      first: 10,
    },
  });

  // const loadMorePosts = () => {
  //   if (loading || !data) return;
  //   const endCursor: string = data.postsConnection.pageInfo.endCursor;

  //   setLoadingMore(true);

  //   fetchMore({
  //     variables: {
  //       after: endCursor,
  //       first: 5,
  //     },
  //     updateQuery: (prevResult, { fetchMoreResult }) => {
  //       setLoadingMore(false);

  //       if (!fetchMoreResult) return prevResult;

  //       return {
  //         postsConnection: {
  //           ...fetchMoreResult.postsConnection,
  //           edges: [
  //             ...prevResult.postsConnection.edges,
  //             ...fetchMoreResult.postsConnection.edges,
  //           ],
  //         },
  //       };
  //     },
  //   });
  // };

  return (
    <div>
      <BlogBanner />
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="postsList" />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <PostForm />
          {postTitle ? <SearchPost /> : <PostsList data={data} />}
        </>
      ) : (
        <EmptyBlog />
      )}
    </div>
  );
};
