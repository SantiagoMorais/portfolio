import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const searchPostForm = z.object({
  postTitle: z.string().min(1, "Digite ao menos uma palavra"),
});

type SearchPostType = z.infer<typeof searchPostForm>;

export const SearchPost = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchPostType>({
    resolver: zodResolver(searchPostForm),
  });

  const handleSearchPost = (data: SearchPostType) => {
    const { postTitle } = data;
  };

  return (
    <div className=" py-10 px-5 md:p-10">
      <form
        onSubmit={handleSubmit(handleSearchPost)}
        className="flex flex-1"
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
            className="text-textColor px-5 rounded border border-l-0 border-primary bg-secondary rounded-l-none h-16"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <p className="text-red-500 text-small h-16 flex items-center gap-2">
          {errors.postTitle && `! ${errors.postTitle.message}`}
        </p>
      </form>
    </div>
  );
};
