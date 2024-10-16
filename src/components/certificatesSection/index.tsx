import { useQuery } from "@apollo/client";
import { AdvicePage } from "@components/advicePage";
import { Banner } from "@components/blog/banner";
import { Loading } from "@components/ui/loading";
import { faFrown, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { GET_CERTIFICATES_QUERY } from "@utils/blogApi";
import { CertificatesCarouselSlides } from "@utils/lists";
import { ICertificatesData } from "@utils/types";
import { CertificatesList } from "./certificatesList";

export const CertificatesSection = () => {
  const { data, error, loading } = useQuery<ICertificatesData>(
    GET_CERTIFICATES_QUERY,
    {
      variables: {
        first: 10,
      },
    }
  );

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
        <CertificatesList certificates={data.certificatesConnection.edges}/>
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
