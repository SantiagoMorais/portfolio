import { useQuery } from "@apollo/client";
import { Loading } from "@components/ui/loading";
import { GET_CURRENTLY_POST_QUERY } from "@utils/blogApi";
import { ICurrentlyPost } from "@utils/types";
import { Link, useParams } from "react-router-dom";
import "index.css";
import { PostAuthor } from "./postAuthor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faUndo } from "@fortawesome/free-solid-svg-icons";
import { button } from "@styles/index";
import { PostContent } from "./postContent";
import { AdvicePage } from "@components/advicePage";

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
        <div className="w-full h-full pb-10 flex flex-col items-center gap-10">
          <PostContent data={data} />
          <Link
            to={"/blog"}
            className={`flex items-center gap-5 text-medium text-textColor group ${button({ withBackground: "primaryColor" })}`}
          >
            <FontAwesomeIcon
              icon={faUndo}
              className="duration-300 group-hover:rotate-[-360deg] group-hover:scale-110"
            />{" "}
            Retornar
          </Link>
          <PostAuthor data={data?.post.author} />
        </div>
      )}
    </>
  );
};
