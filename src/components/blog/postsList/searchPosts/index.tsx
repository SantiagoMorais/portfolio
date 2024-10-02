import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { PostForm } from "./postForm";
import { SearchPostsByTitle } from "./searchPostsByTitle";
import { PostsList } from "..";
import { IPostsData } from "@utils/types";

export const SearchPosts = ({ data }: { data: IPostsData }) => {
  const { postTitle } = useSearchPostByTitle();

  return (
    <div className="flex flex-col w-full">
      <PostForm />
      {postTitle ? <SearchPostsByTitle /> : <PostsList data={data} />}
    </div>
  );
};
