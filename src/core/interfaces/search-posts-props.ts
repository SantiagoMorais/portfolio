import { IPostsData } from "@core/interfaces/query-interfaces";

export interface ISearchPostsProps {
  data: IPostsData;
  fetchMorePosts: () => void;
  isLoading: boolean;
}
