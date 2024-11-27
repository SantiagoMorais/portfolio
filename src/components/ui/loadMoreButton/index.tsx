import {
  faAdd,
  faSmileWink,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LoadMoreButtonProps = {
  fetchMorePosts: () => void;
  hasMore: boolean | undefined;
  isLoading: boolean;
};

export const LoadMoreButton = ({
  fetchMorePosts,
  hasMore,
  isLoading,
}: LoadMoreButtonProps) => (
  <button
    disabled={!hasMore}
    onClick={() => fetchMorePosts()}
    className={`cursor-pointer text-textColor font-medium bg-primary duration-300 py-6 px-10 text-medium rounded-2xl flex gap-4 items-center ${hasMore ? "hover:text-primary hover:bg-textColor hover:shadow-allAround hover:shadow-secondary" : "opacity-60 cursor-auto"}`}
  >
    {isLoading ? (
      <FontAwesomeIcon icon={faSpinner} spin />
    ) : (
      <>
        {hasMore ? (
          <>
            Carregar mais <FontAwesomeIcon icon={faAdd} />
          </>
        ) : (
          <>
            Fim da lista <FontAwesomeIcon icon={faSmileWink} />
          </>
        )}
      </>
    )}
  </button>
);
