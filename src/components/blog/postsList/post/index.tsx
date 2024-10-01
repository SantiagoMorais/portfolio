import { useQuery } from "@apollo/client";
import { Loading } from "@components/blog/loading";
import { NotFound } from "@components/notFound";
import { GET_CURRENTLY_POST_QUERY } from "@utils/blogApi";
import { ICurrentlyPost } from "@utils/types";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "index.css";

export const Post = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<ICurrentlyPost>(
    GET_CURRENTLY_POST_QUERY,
    {
      variables: {
        id,
      },
    }
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound pageType="general" />
      ) : (
        <div className="w-full h-full pb-10 flex flex-col items-center gap-10">
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
        </div>
      )}
    </>
  );
};
