import { IPostsListProps } from "@core/interfaces/posts-list-props";
import { LoadMoreButton } from "../../ui/loadMoreButton";
import { PostsCards } from "./postsCards";

export const PostsList = ({
  data,
  fetchMorePosts,
  isLoading,
}: IPostsListProps) => (
  <div className="flex flex-col items-center gap-10 px-5 pb-16 pt-10 md:px-10 md:pb-20">
    <PostsCards data={data} />
    <LoadMoreButton
      fetchMorePosts={fetchMorePosts}
      hasMore={data?.postsConnection.pageInfo.hasNextPage}
      isLoading={isLoading}
    />
  </div>
);
