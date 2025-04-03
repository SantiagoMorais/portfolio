import { useQuery } from "@apollo/client";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { GET_FILTERS_QUERY } from "@utils/blogApi";
import { IPostsFilters } from "@core/interfaces/query-interfaces";
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
      className="relative flex flex-1 flex-col gap-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex min-w-0 flex-1 cursor-pointer items-center rounded-md border border-primary bg-secondaryPanel duration-300 hover:shadow-allAround hover:shadow-secondary md:w-full">
        <p
          className={`flex h-16 min-w-0 flex-1 items-center px-4 text-textColor ${!filter && "opacity-50"}`}
        >
          {!filter ? "Selecione um filtro" : filter}
        </p>
        <ResetFilterButton isOpen={isOpen} />
      </div>
      <AccordionContent data={data} isOpen={isOpen} />
    </div>
  );
};
