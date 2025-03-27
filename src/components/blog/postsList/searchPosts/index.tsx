import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { TitleForm } from "./forms/titleForm";
import { SearchPostsByTitle } from "./searchPostsByTitle";
import { PostsList } from "..";
import { IPostsData } from "@utils/types";
import { FilterForm } from "./forms/filterForm";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { SearchPostsByFilter } from "./searchPostByFilter";

interface ISearchPostsProps {
  data: IPostsData;
  fetchMorePosts: () => void;
  isLoading: boolean;
}

export const SearchPosts = ({
  data,
  fetchMorePosts,
  isLoading,
}: ISearchPostsProps) => {
  const { postTitle } = useSearchPostByTitle();
  const { filter } = useFilterPosts();

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-4 p-4 pt-10 md:flex-row md:px-10">
        <TitleForm />
        <FilterForm />
      </div>
      {postTitle ? (
        <SearchPostsByTitle />
      ) : filter ? (
        <SearchPostsByFilter />
      ) : (
        <PostsList
          data={data}
          fetchMorePosts={fetchMorePosts}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
