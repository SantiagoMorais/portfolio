import { IPostsData } from "./blog-query-interfaces";

export interface IPostsListProps {
  data: IPostsData | undefined;
  fetchMorePosts: () => void;
  isLoading: boolean;
}
