import { BlogBanner } from "./blogBanner";
import { useQuery } from "@apollo/client";
import { IPostsData } from "utils/types";
import { GET_POSTS_QUERY } from "utils/blogApi";
import { Loading } from "../ui/loading";
import { SearchPosts } from "./postsList/searchPosts";
import { useState } from "react";
import { AdvicePage } from "@components/advicePage";
import { faFrown, faSmileWink } from "@fortawesome/free-solid-svg-icons";

export const Blog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_POSTS_QUERY,
    {
      variables: {
        first: 10,
      },
    }
  );

  const fetchMorePosts = () => {
    if (loading || error) return;

    setIsLoading(true);
    const endCursor = data?.postsConnection.pageInfo.endCursor;

    fetchMore({
      variables: {
        after: endCursor,
        first: 10,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        setIsLoading(false);
        if (!fetchMoreResult) return previousResult;

        return {
          postsConnection: {
            ...previousResult.postsConnection,
            edges: [
              ...previousResult.postsConnection.edges,
              ...fetchMoreResult.postsConnection.edges,
            ],
          },
        };
      },
    });
  };

  return (
    <div>
      <BlogBanner />
      {loading ? (
        <Loading />
      ) : error ? (
        <AdvicePage
          title="Ops, página não encontrada"
          adviceMessage="Por algum motivo não foi possível encontrar os dados das publicações. Por favor, tente mais tarde ou retorne para a página inicial."
          icon={faFrown}
          polygonEmojiMessage="404"
          buttonText="Retornar"
          route="/"
        />
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <SearchPosts
            data={data}
            fetchMorePosts={fetchMorePosts}
            isLoading={isLoading}
          />
        </>
      ) : (
        <AdvicePage
          title="Em breve, novas publicações!"
          adviceMessage="Estamos trabalhando para desenvolver novos conteúdos essenciais sobre desenvolvimento web e programação para você! Enquanto isso, retorne à página inicial."
          route="/"
          icon={faSmileWink}
          buttonText="Retornar"
          polygonEmojiMessage="Em Breve!"
        />
      )}
    </div>
  );
};
