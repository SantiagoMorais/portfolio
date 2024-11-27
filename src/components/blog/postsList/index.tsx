import { IPostsData } from "@utils/types";
import { LoadMoreButton } from "../../ui/loadMoreButton";
import { PostsCards } from "./postsCards";

type PostsListProps = {
  data: IPostsData | undefined;
  fetchMorePosts: () => void;
  isLoading: boolean;
};

export const PostsList: React.FC<PostsListProps> = ({
  data,
  fetchMorePosts,
  isLoading,
}) => (
  <div className="flex flex-col items-center pt-10 px-5 pb-16 gap-10 md:pb-20 md:px-10">
    <PostsCards data={data} />
    <LoadMoreButton
      fetchMorePosts={fetchMorePosts}
      hasMore={data?.postsConnection.pageInfo.hasNextPage}
      isLoading={isLoading}
    />
  </div>
);
