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
    className={`flex cursor-pointer items-center gap-4 rounded-2xl bg-primary px-10 py-6 text-medium font-medium text-textColor duration-300 ${hasMore ? "hover:bg-textColor hover:text-primary hover:shadow-allAround hover:shadow-secondary" : "cursor-auto opacity-60"}`}
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
