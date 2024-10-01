import { createContext, ReactNode, useContext, useState } from "react";

interface ISearchPostByTitle {
  postTitle: string;
  setPostTitle: (title: string) => void;
}

const SearchPostByTitleContext = createContext<ISearchPostByTitle>({
  postTitle: "",
  setPostTitle: () => {},
});

export const useSearchPostByTitle = () => useContext(SearchPostByTitleContext);

export const SearchPostByTitleProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [postTitle, setPostTitle] = useState<string>("");

  return (
    <SearchPostByTitleContext.Provider value={{ postTitle, setPostTitle }}>
      {children}
    </SearchPostByTitleContext.Provider>
  );
};
