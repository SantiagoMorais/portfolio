import { ICurrentlyPost } from "@utils/types";
import parse from "html-react-parser";

export const PostContent = ({ data }: { data: ICurrentlyPost }) => {
  const updatedData =
    data && new Date(data.post.date).toLocaleDateString("pt-BR");
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <h2 className="text-large mx-5 first-letter:capitalize text-textColor font-bold bg-secondaryPanel px-8 rounded-xl text-center md:text-extraLarge md:my-5">
        {data?.post.title}
      </h2>
      <div className="px-5 pb-10 w-full md:px-20 md:pb-20" id="postContent">
        <img
          src={data?.post.image.url}
          alt={`Imagem do post ${data?.post.title}`}
          className="w-full h-[30rem] object-cover object-center  border-primary border shadow-allAround shadow-secondary md:float-left md:w-1/2 md:max-h-[40rem] md:h-full mr-10 mb-10"
        />

        {data?.post.subtitle && <h3>{data.post.subtitle}</h3>}

        {data?.post.text.html && parse(data?.post.text.html)}
      </div>
      <p className="text-center text-textColor font-medium text-medium bg-secondaryPanel px-4 py-2 rounded-md">
        Post criado/atualizado em:{" "}
        <span className="text-primary">{updatedData}</span>
      </p>
    </div>
  );
};
