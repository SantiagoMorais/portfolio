import { ILoadMoreButtonProps } from "@core/interfaces/load-more-button-props";
import {
  faAdd,
  faSmileWink,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoadMoreButton = ({
  fetchMorePosts,
  hasMore,
  isLoading,
}: ILoadMoreButtonProps) => (
  <button
    disabled={!hasMore}
    onClick={() => fetchMorePosts()}
    className={`bg-primary text-medium text-textColor flex cursor-pointer items-center gap-4 rounded-2xl px-10 py-6 font-medium duration-300 ${hasMore ? "hover:bg-textColor hover:text-primary hover:shadow-allAround hover:shadow-secondary" : "cursor-auto opacity-60"}`}
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
