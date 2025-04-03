import { PostsList } from "../..";
import { GET_FILTERED_POSTS_QUERY } from "@/db/get-filtered-posts-query";
import { useQuery } from "@apollo/client";
import { Loading } from "@/components/ui/loading";
import { PostsNotFound } from "../postsNotFound";
import { useFilterPosts } from "@/contexts/filterPostsContext";
import { useState } from "react";
import { IPostsData } from "@/core/interfaces/query-interfaces";
import { AdvicePage } from "@/components/advicePage";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { ButtonResetTitleAndFilter } from "@/components/ui/buttonResetTitleAndFilter";

export const SearchPostsByFilter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { filter } = useFilterPosts();
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_FILTERED_POSTS_QUERY,
    {
      variables: {
        filter,
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
            ...fetchMoreResult.postsConnection,
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
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <ButtonResetTitleAndFilter message="Retornar às publicações" />
          <AdvicePage
            title="Ops, página não encontrada"
            adviceMessage="Por algum motivo não foi possível encontrar os dados das publicações. Por favor, tente mais tarde ou retorne para a página inicial."
            icon={faFrown}
            polygonEmojiMessage="404"
            buttonText="Retornar"
            route="/"
          />
        </>
      ) : data && data?.postsConnection.edges.length > 0 ? (
        <>
          <ButtonResetTitleAndFilter message="Remover filtro" />
          <PostsList
            fetchMorePosts={fetchMorePosts}
            isLoading={isLoading}
            data={data}
          />
        </>
      ) : (
        <>
          <ButtonResetTitleAndFilter message="Retornar às publicações" />
          <PostsNotFound searchType="searchingByFilter" />
        </>
      )}
    </div>
  );
};
