import { useQuery } from "@apollo/client";
import { Loading } from "@components/ui/loading";
import { faBug, faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_CERTIFICATES_DURATION_QUERY } from "@utils/blogApi";
import { ICertificatesDurationData } from "@utils/types";

export const DurationBar = () => {
  const { data, loading, error } = useQuery<ICertificatesDurationData>(
    GET_CERTIFICATES_DURATION_QUERY,
    {
      variables: {
        first: 50,
      },
    }
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-textColor font-medium text-small text-center">
            Ops, por algum motivo não conseguimos encontrar os dados de carga
            horária. Tente novamente depois.
          </h3>
          <div className="flex gap-8 items-center justify-center flex-wrap">
            <FontAwesomeIcon
              icon={faFaceFrownOpen}
              className="text-textColor text-extraLarge"
            />
            <FontAwesomeIcon icon={faBug} className="text-textColor text-extraLarge"/>
          </div>
        </div>
      ) : (
        data && <div>data</div>
      )}
    </div>
  );
};
