import { ICurrentlyPost } from "@core/interfaces/query-interfaces";
import parse from "html-react-parser";

export const PostContent = ({ data }: { data: ICurrentlyPost }) => {
  const updatedDate = data && data.post.date.split("-").reverse().join("/");

  return (
    <div className="flex h-full w-full flex-col items-center gap-10">
      <h2 className="mx-5 bg-secondaryPanel px-8 text-center text-large font-bold text-textColor first-letter:capitalize md:my-5 md:text-extraLarge">
        {data?.post.title}
      </h2>
      <div className="w-full px-5 pb-10 md:px-20 md:pb-20" id="postContent">
        <img
          src={data?.post.image.url}
          alt={`Imagem do post ${data?.post.title}`}
          id="postBanner"
        />
        {data?.post.subtitle && <h3>{data.post.subtitle}</h3>}
        {data?.post.text.html && parse(data?.post.text.html)}
      </div>
      <p className="rounded-md bg-secondaryPanel px-4 py-2 text-center text-medium font-medium text-textColor">
        Post criado/atualizado em:{" "}
        <span className="text-primary">{updatedDate}</span>
      </p>
    </div>
  );
};
