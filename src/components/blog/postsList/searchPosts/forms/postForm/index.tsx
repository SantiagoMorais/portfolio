import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";
import { useFilterPosts } from "@contexts/filterPostsContext";

const searchPostForm = z.object({
  postTitle: z.string().max(100, "Não exceder 100 caracteres"),
});

type SearchPostType = z.infer<typeof searchPostForm>;

export const PostForm = () => {
  const { setPostTitle } = useSearchPostByTitle();
  const { setFilter } = useFilterPosts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchPostType>({
    resolver: zodResolver(searchPostForm),
  });

  const handleSearchPost = (data: SearchPostType) => {
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
      <div className="flex flex-row w-full">
        <label htmlFor="" className="flex flex-1 h-16 md:w-full min-w-0">
          <input
            type="text"
            id="postTitle"
            placeholder="Procure um Post"
            {...register("postTitle")}
            className="py-2 px-4 h-full bg-secondaryPanel border-primary border rounded-md flex-1 rounded-r-none text-textColor min-w-0"
          />
        </label>
        <button
          type="submit"
          className="text-textColor w-16 rounded border border-l-0 border-primary bg-secondary rounded-l-none h-16 duration-300 hover:shadow-allAround hover:shadow-secondary"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <p
        className={`text-red-500 text-small flex items-center gap-2 h-0 duration-300 opacity-0 ${errors.postTitle && "h-14 opacity-100"}`}
      >
        {errors.postTitle && `! ${errors.postTitle.message}`}
      </p>
    </form>
  );
};
