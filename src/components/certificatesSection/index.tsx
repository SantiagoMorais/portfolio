import { useQuery } from "@apollo/client";
import { AdvicePage } from "@components/advicePage";
import { Banner } from "@components/blog/banner";
import { Loading } from "@components/ui/loading";
import { faFrown, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { GET_CERTIFICATES_QUERY } from "@utils/blogApi";
import { CertificatesCarouselSlides } from "@utils/lists";
import { ICertificatesData } from "@utils/types";
import { CertificatesContent } from "./certificatesContent";
import { useState } from "react";

export const CertificatesSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data, error, loading, fetchMore } = useQuery<ICertificatesData>(
    GET_CERTIFICATES_QUERY,
    {
      variables: {
        first: 10,
      },
    }
  );

  const fetchMorePosts = () => {
    if (error || loading) return;

    setIsLoading(true);
    const endCursor = data?.certificatesConnection.pageInfo.endCursor;

    fetchMore({
      variables: {
        after: endCursor,
        first: 10,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        setIsLoading(false);
        if (!fetchMorePosts) return previousResult;

        return {
          certificatesConnection: {
            ...previousResult.certificatesConnection,
            edges: [
              ...previousResult.certificatesConnection.edges,
              ...fetchMoreResult.certificatesConnection.edges,
            ],
          },
        };
      },
    });
  };

  return (
    <div>
      <Banner
        imagesList={CertificatesCarouselSlides}
        title="Certificados"
        subtitle="Verifique minha jornada na programação, cursos concluídos e certificados emitidos!"
      />

      {loading ? (
        <Loading />
      ) : error ? (
        <AdvicePage
          title="Ops, página não encontrada"
          adviceMessage="Por algum motivo não foi possível encontrar os dados dos certificados. Por favor, tente mais tarde ou retorne para a página inicial."
          icon={faFrown}
          polygonEmojiMessage="404"
          buttonText="Retornar"
          route="/"
        />
      ) : data && data.certificatesConnection.edges.length > 0 ? (
        <CertificatesContent
          data={data}
          fetchMorePosts={fetchMorePosts}
          isLoading={isLoading}
        />
      ) : (
        <AdvicePage
          title="Em breve, os certificados estão registrados!"
          adviceMessage="Estamos trabalhando para adicionar todos os certificados de cursos e eventos aqui em breve! Enquanto isso, retorne à página inicial."
          route="/"
          icon={faSmileWink}
          buttonText="Retornar"
          polygonEmojiMessage="Em Breve!"
        />
      )}
    </div>
  );
};
