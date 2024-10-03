import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchPostByTitle } from "@contexts/searchPostByTitleContext";

const searchPostForm = z.object({
  postTitle: z.string().max(100, "Não exceder 100 caracteres"),
});

type SearchPostType = z.infer<typeof searchPostForm>;

export const PostForm = () => {
    const { setPostTitle } = useSearchPostByTitle();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<SearchPostType>({
      resolver: zodResolver(searchPostForm),
    });
  
    const handleSearchPost = (data: SearchPostType) => {
      const { postTitle } = data;
      setPostTitle(postTitle);
      reset();
    };
  
    return (
        <div className=" pt-10 px-5 md:p-10">
        <form onSubmit={handleSubmit(handleSearchPost)} className="flex flex-1 pb-10 flex-col md:pb-0">
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
              className="text-textColor px-5 rounded border border-l-0 border-primary bg-secondary rounded-l-none h-16"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <p className={`text-red-500 text-small flex items-center gap-2 h-0 duration-300 opacity-0 ${errors.postTitle && "h-14 opacity-100"}`}>
            {errors.postTitle && `! ${errors.postTitle.message}`}
          </p>
        </form>
      </div>
    )
}