import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { button } from "@styles/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useFilterPosts } from "@contexts/filterPostsContext";

export const ButtonResetTitleAndFilter = ({ message }: { message: string }) => {
  const { setPostTitle } = useSearchPostByTitle();
  const { setFilter } = useFilterPosts();

  const handleResetInput = () => {
    setPostTitle("");
    setFilter("");
  };

  return (
    <div className="flex justify-center px-5 leading-tight md:px-10">
      <button
        onClick={() => handleResetInput()}
        className={`group flex items-center gap-x-5 text-center text-base text-textColor md:text-medium ${button({ withBackground: "primaryColor" })}`}
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
