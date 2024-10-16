import { ICurrentlyPost } from "@utils/types";
import parse from "html-react-parser";

export const PostContent = ({ data }: { data: ICurrentlyPost }) => {
  const updatedDate =
    data && data.post.date.split("-").reverse().join("/");

  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <h2 className="text-large mx-5 first-letter:capitalize text-textColor font-bold bg-secondaryPanel px-8 text-center md:text-extraLarge md:my-5">
        {data?.post.title}
      </h2>
      <div className="px-5 pb-10 w-full md:px-20 md:pb-20" id="postContent">
        <img
          src={data?.post.image.url}
          alt={`Imagem do post ${data?.post.title}`}
          id="postBanner"
        />

        {data?.post.subtitle && <h3>{data.post.subtitle}</h3>}

        {data?.post.text.html && parse(data?.post.text.html)}
      </div>
      <p className="text-center text-textColor font-medium text-medium bg-secondaryPanel px-4 py-2 rounded-md">
        Post criado/atualizado em:{" "}
        <span className="text-primary">{updatedDate}</span>
      </p>
    </div>
  );
};
