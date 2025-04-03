import { useSearchPostByTitle } from "@/contexts/searchPostByTitleContext";
import { PostsList } from "../..";
import { useQuery } from "@apollo/client";
import { Loading } from "@/components/ui/loading";
import { PostsNotFound } from "../postsNotFound";
import { useState } from "react";
import { IPostsData } from "@/core/interfaces/blog-query-interfaces";
import { AdvicePage } from "@/components/advicePage";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { ButtonResetTitleAndFilter } from "@/components/ui/buttonResetTitleAndFilter";
import { GET_POSTS_BY_TITLE_QUERY } from "@/db/get-posts-by-title-query";

export const SearchPostsByTitle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { postTitle } = useSearchPostByTitle();
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_POSTS_BY_TITLE_QUERY,
    {
      variables: {
        title: postTitle,
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
          <ButtonResetTitleAndFilter message="retornar" />
          <PostsList
            fetchMorePosts={fetchMorePosts}
            isLoading={isLoading}
            data={data}
          />
        </>
      ) : (
        <>
          <ButtonResetTitleAndFilter message="Retornar às publicações" />
          <PostsNotFound searchType="searchingByTitle" />
        </>
      )}
    </div>
  );
};
