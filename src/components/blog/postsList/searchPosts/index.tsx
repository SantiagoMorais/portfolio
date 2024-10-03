import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { PostForm } from "./postForm";
import { SearchPostsByTitle } from "./searchPostsByTitle";
import { PostsList } from "..";
import { IPostsData } from "@utils/types";
import { FilterForm } from "./filterForm";
import { useFilterPosts } from "@contexts/filterPostsContext";
import { SearchPostsByFilter } from "./searchPostByFilter";

export const SearchPosts = ({ data }: { data: IPostsData }) => {
  const { postTitle } = useSearchPostByTitle();
  const { filter } = useFilterPosts();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-4 p-4 pt-10 md:flex-row">
        <PostForm />
        <FilterForm />
      </div>
      {postTitle ? (
        <SearchPostsByTitle />
      ) : filter ? (
        <SearchPostsByFilter />
      ) : (
        <PostsList data={data} />
      )}
    </div>
  );
};
