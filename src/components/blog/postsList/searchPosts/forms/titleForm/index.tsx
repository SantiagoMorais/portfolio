import { useFilterPosts } from "@contexts/filterPostsContext";
import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { searchPostForm, TSearchPost } from "@core/types/search-posts";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const TitleForm = () => {
  const { setPostTitle } = useSearchPostByTitle();
  const { setFilter } = useFilterPosts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSearchPost>({
    resolver: zodResolver(searchPostForm),
  });

  const handleSearchPost = (data: TSearchPost) => {
    const { postTitle } = data;
    setPostTitle(postTitle);
    setFilter("");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearchPost)}
      className="flex flex-1 flex-col"
    >
      <div className="flex w-full flex-row">
        <label htmlFor="" className="flex h-16 min-w-0 flex-1 md:w-full">
          <input
            type="text"
            id="postTitle"
            placeholder="Procure um Post"
            {...register("postTitle")}
            className="h-full min-w-0 flex-1 rounded-md rounded-r-none border border-primary bg-secondaryPanel px-4 py-2 text-textColor"
          />
        </label>
        <button
          type="submit"
          className="h-16 w-16 rounded-sm rounded-l-none border border-l-0 border-primary bg-secondary text-textColor duration-300 hover:shadow-allAround hover:shadow-secondary"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <p
        className={`flex h-0 items-center gap-2 text-small text-red-500 opacity-0 duration-300 ${errors.postTitle && "h-14 opacity-100"}`}
      >
        {errors.postTitle && `! ${errors.postTitle.message}`}
      </p>
    </form>
  );
};
