export interface ILoadMoreButtonProps {
  fetchMorePosts: () => void;
  hasMore: boolean | undefined;
  isLoading: boolean;
}
