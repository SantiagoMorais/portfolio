import { IPostsData } from "./query-interfaces";

export interface IPostsListProps {
  data: IPostsData | undefined;
  fetchMorePosts: () => void;
  isLoading: boolean;
}
