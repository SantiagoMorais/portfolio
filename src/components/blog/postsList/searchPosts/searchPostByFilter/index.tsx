import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { PostsList } from "../..";
import {
  GET_FILTERED_POSTS_QUERY,
  GET_POSTS_BY_TITLE_QUERY,
} from "@utils/blogApi";
import { useQuery } from "@apollo/client";
import { Loading } from "@components/blog/loading";
import { NotFound } from "@components/notFound";
import { ReturnButton } from "../returnButton";
import { PostsNotFound } from "../postsNotFound";
import { useFilterPosts } from "@contexts/filterPostsContext";

export const SearchPostsByFilter = () => {
  const { filter } = useFilterPosts();
  const { loading, error, data } = useQuery(GET_FILTERED_POSTS_QUERY, {
    variables: {
      filter,
    },
  });

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="postsList" />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <ReturnButton />
          <PostsList data={data} />
        </>
      ) : (
        <>
          <ReturnButton />
          <PostsNotFound searchType="searchingByFilter" />
        </>
      )}
    </div>
  );
};
