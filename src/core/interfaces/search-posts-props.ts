import { IPostsData } from "@/core/interfaces/blog-query-interfaces";

export interface ISearchPostsProps {
  data: IPostsData;
  fetchMorePosts: () => void;
  isLoading: boolean;
}
