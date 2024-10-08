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
      <div className="flex flex-col bg-secondaryPanel py-2 px-2 rounded-md border border-primary">
        {data.filters.map((filter) => (
          <button
            onClick={() => handleSelectFilter(filter.title)}
            key={filter.id}
            className="text-small relative text-textColor w-full flex px-4 py-2 rounded-md duration-300 mb-1 last-of-type:mb-0 hover:bg-secondary after:border-b after:border-secondary after:w-full after:absolute after:bottom-0 after:left-0 after:last-of-type:border-b-0 after:duration-300 hover:after:opacity-0"
          >
            {filter.title}
          </button>
        ))}
      </div>
    </Collapse>
  );
};
