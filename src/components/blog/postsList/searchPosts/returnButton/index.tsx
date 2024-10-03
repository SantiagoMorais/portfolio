import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { button } from "@styles/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useFilterPosts } from "@contexts/filterPostsContext";

export const ReturnButton = ({message}: {message: string}) => {
  const { setPostTitle } = useSearchPostByTitle();
  const { setFilter } = useFilterPosts();

  const handleResetInput = () => {
    setPostTitle("");
    setFilter("");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={() => handleResetInput()}
        className={`flex items-center gap-5 text-medium text-textColor group ${button({ withBackground: "primaryColor" })}`}
      >
        <FontAwesomeIcon
          icon={faUndo}
          className="duration-300 group-hover:rotate-[-360deg] group-hover:scale-110"
        />{" "}
        <span className="first-letter:uppercase">{message}</span>
      </button>
    </div>
  );
};
