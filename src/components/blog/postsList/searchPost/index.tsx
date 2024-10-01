import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { PostForm } from "./postForm";
import { PostsList } from "..";
import { GET_POSTS_BY_TITLE_QUERY } from "@utils/blogApi";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Loading } from "@components/blog/loading";
import { NotFound } from "@components/notFound";
import { EmptyBlog } from "@components/blog/emptyBlog";

export const SearchPost = () => {
  const { postTitle } = useSearchPostByTitle();
  const {loading, error, data} = useQuery(
    GET_POSTS_BY_TITLE_QUERY,
    {
      variables: {
        title: postTitle,
      },
    }
  );

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="postsList" />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <PostsList data={data} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
