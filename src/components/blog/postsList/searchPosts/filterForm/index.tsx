import { useQuery } from "@apollo/client";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { GET_FILTERS_QUERY } from "@utils/blogApi";
import { IPostsFilters } from "@utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";
import { useState } from "react";

export const FilterForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, loading, error } = useQuery<IPostsFilters>(GET_FILTERS_QUERY);
  const { setFilter, filter } = useFilterPosts();
  const { setPostTitle } = useSearchPostByTitle();

  const handleSelectFilter = (selectedFilter: string) => {
    if (!selectedFilter) return;
    setFilter(selectedFilter);
    setPostTitle("");
  };

  if (error || loading || !data) return null;

  return (
    <div className="flex flex-col w-full relative gap-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-1 md:w-full items-center min-w-0 cursor-pointer duration-300 hover:shadow-allAround hover:shadow-secondary"
      >
        <p className="h-16 flex items-center px-4 bg-secondaryPanel border-primary border rounded-md flex-1 rounded-r-none text-textColor min-w-0">
          {!filter ? "Selecione um filtro" : filter}
        </p>
        <button className="text-textColor rounded border border-l-0 border-primary bg-secondary rounded-l-none h-16">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faChevronDown}
            className={`duration-300 w-16 ${isOpen && "rotate-90"}`}
          />
        </button>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="flex flex-col bg-secondaryPanel py-2 px-2 rounded-md border border-primary">
          {data.filters.map((filter) => (
            <button onClick={() => handleSelectFilter(filter.title)} key={filter.id} className="text-small relative text-textColor w-full flex px-4 py-2 rounded-md duration-300 mb-1 last-of-type:mb-0 hover:bg-secondary after:border-b after:border-secondary after:w-full after:absolute after:bottom-0 after:left-0 after:last-of-type:border-b-0 after:duration-300 hover:after:opacity-0">
              {filter.title}
            </button>
          ))}
        </div>
      </Collapse>
    </div>
  );
};