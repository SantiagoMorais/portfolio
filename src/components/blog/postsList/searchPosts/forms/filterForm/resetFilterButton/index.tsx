import { useFilterPosts } from "@contexts/filterPostsContext";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ResetFilterButton = ({ isOpen }: { isOpen: boolean }) => {
  const { filter, setFilter } = useFilterPosts();

  return (
    <button
      className={`h-16 w-16 rounded rounded-l-none border-l border-primary bg-secondary text-textColor duration-300 ${filter && "hover:shadow-allAround hover:shadow-primary"}`}
      onClick={() => setFilter("")}
    >
      <FontAwesomeIcon
        icon={filter ? faTimes : faChevronDown}
        className={`duration-300 ${isOpen && !filter && "rotate-180"}`}
      />
    </button>
  );
};
