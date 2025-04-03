import { ICurrentlyPost } from "@core/interfaces/query-interfaces";
import parse from "html-react-parser";

export const PostContent = ({ data }: { data: ICurrentlyPost }) => {
  const updatedDate = data && data.post.date.split("-").reverse().join("/");

  return (
    <div className="flex h-full w-full flex-col items-center gap-10">
      <h2 className="bg-secondaryPanel text-large text-textColor md:text-extraLarge mx-5 px-8 text-center font-bold first-letter:capitalize md:my-5">
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
      <p className="bg-secondaryPanel text-medium text-textColor rounded-md px-4 py-2 text-center font-medium">
        Post criado/atualizado em:{" "}
        <span className="text-primary">{updatedDate}</span>
      </p>
    </div>
  );
};
