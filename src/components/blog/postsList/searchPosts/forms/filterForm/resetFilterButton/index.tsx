import { useFilterPosts } from "@contexts/filterPostsContext";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ResetFilterButton = ({ isOpen }: { isOpen: boolean }) => {
  const { filter, setFilter } = useFilterPosts();

  return (
    <button
      className={`text-textColor rounded border-l border-primary bg-secondary rounded-l-none h-16 w-16 duration-300 ${filter && "hover:shadow-allAround hover:shadow-primary"}`}
      onClick={() => setFilter("")}
    >
      <FontAwesomeIcon
        icon={filter ? faTimes : faChevronDown}
        className={`duration-300 ${isOpen && !filter && "rotate-180"}`}
      />
    </button>
  );
};
