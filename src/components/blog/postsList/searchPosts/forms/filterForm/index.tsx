import { useQuery } from "@apollo/client";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { GET_FILTERS_QUERY } from "@utils/blogApi";
import { IPostsFilters } from "@utils/types";
import { useState } from "react";
import { ResetFilterButton } from "./resetFilterButton";
import { AccordionContent } from "./accordionContent";

export const FilterForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, loading, error } = useQuery<IPostsFilters>(GET_FILTERS_QUERY);
  const { filter } = useFilterPosts();

  if (error || loading || !data) return null;

  return (
    <div
      className="flex flex-col flex-1 relative gap-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex flex-1 md:w-full items-center min-w-0 cursor-pointer duration-300 hover:shadow-allAround hover:shadow-secondary bg-secondaryPanel border-primary border rounded-md">
        <p
          className={`h-16 flex items-center px-4 flex-1 text-textColor min-w-0 ${!filter && "opacity-50"}`}
        >
          {!filter ? "Selecione um filtro" : filter}
        </p>
        <ResetFilterButton isOpen={isOpen} />
      </div>
      <AccordionContent data={data} isOpen={isOpen} />
    </div>
  );
};
