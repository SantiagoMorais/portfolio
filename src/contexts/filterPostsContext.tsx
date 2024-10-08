import { createContext, ReactNode, useContext, useState } from "react";

interface IFilterPostsContext {
  filter: string;
  setFilter: (title: string) => void;
}

const FilterPostsContext = createContext<IFilterPostsContext>({
  filter: "",
  setFilter: () => {},
});

export const useFilterPosts = () => useContext(FilterPostsContext);

export const FilterPostsProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <FilterPostsContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterPostsContext.Provider>
  );
};
