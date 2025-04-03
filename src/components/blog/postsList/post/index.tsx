import { useQuery } from "@apollo/client";
import { Loading } from "@components/ui/loading";
import { GET_CURRENTLY_POST_QUERY } from "@utils/blogApi";
import { ICurrentlyPost } from "@core/interfaces/query-interfaces";
import { useParams } from "react-router-dom";
import "index.css";
import { PostAuthor } from "./postAuthor";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { PostContent } from "./postContent";
import { AdvicePage } from "@components/advicePage";
import { ReturnButton } from "@components/ui/returnButton";

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

  const pageNotFound = (
    <AdvicePage
      title="Ops, página não encontrada"
      icon={faFrown}
      adviceMessage="Não encontramos a página que você procura. Por favor, tente novamente ou retorne para a página inicial."
      route="/"
      buttonText="Retornar"
      polygonEmojiMessage="404"
    />
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        pageNotFound
      ) : !data?.post ? (
        pageNotFound
      ) : (
        <div className="flex h-full w-full flex-col items-center gap-10 pb-10">
          <PostContent data={data} />
          <ReturnButton buttonText="Retornar" route="/blog" />
          <PostAuthor data={data?.post.author} />
        </div>
      )}
    </>
  );
};
