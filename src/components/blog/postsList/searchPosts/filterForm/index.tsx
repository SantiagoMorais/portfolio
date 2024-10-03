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
  const { setPostTitle, postTitle } = useSearchPostByTitle();

  console.log(filter, postTitle);
  

  const handleSelectFilter = (selectedFilter: string) => {
    if (!selectedFilter) return;
    setFilter(selectedFilter);
    setPostTitle("");
  };

  if (error || loading || !data) return null;

  return (
    <div className="flex flex-col flex-1 relative gap-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-1 md:w-full items-center min-w-0 cursor-pointer duration-300 hover:shadow-allAround hover:shadow-secondary bg-secondaryPanel border-primary border rounded-md"
      >
        <p
          className={`h-16 flex items-center px-4 flex-1 text-textColor min-w-0 ${!filter && "opacity-50"}`}
        >
          {!filter ? "Selecione um filtro" : filter}
        </p>
        <button
          className={`text-textColor rounded border-l border-primary bg-secondary rounded-l-none h-16 w-16 duration-300 ${filter && "hover:shadow-allAround hover:shadow-primary"}`}
          onClick={() => setFilter("")}
        >
          <FontAwesomeIcon
            icon={filter ? faTimes : faChevronDown}
            className={`duration-300 ${isOpen && !filter && "rotate-180"}`}
          />
        </button>
      </div>
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
    </div>
  );
};
