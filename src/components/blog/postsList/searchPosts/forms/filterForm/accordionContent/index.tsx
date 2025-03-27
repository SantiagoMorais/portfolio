import { useFilterPosts } from "@contexts/filterPostsContext";
import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { IPostsFilters } from "@utils/types";
import { Collapse } from "react-collapse";

export const AccordionContent = ({
  data,
  isOpen,
}: {
  data: IPostsFilters;
  isOpen: boolean;
}) => {
  const { setFilter } = useFilterPosts();
  const { setPostTitle } = useSearchPostByTitle();

  const handleSelectFilter = (selectedFilter: string) => {
    if (!selectedFilter) return;
    setFilter(selectedFilter);
    setPostTitle("");
  };

  return (
    <Collapse isOpened={isOpen}>
      <div className="flex flex-col rounded-md border border-primary bg-secondaryPanel px-2 py-2">
        {data.filters.map((filter) => (
          <button
            onClick={() => handleSelectFilter(filter.title)}
            key={filter.id}
            className="relative mb-1 flex w-full rounded-md px-4 py-2 text-small text-textColor duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-secondary after:duration-300 last-of-type:mb-0 after:last-of-type:border-b-0 hover:bg-secondary hover:after:opacity-0"
          >
            {filter.title}
          </button>
        ))}
      </div>
    </Collapse>
  );
};
