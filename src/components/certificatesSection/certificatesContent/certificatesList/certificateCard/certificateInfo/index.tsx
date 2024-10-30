import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { subtitle } from "@styles/index";
import { ICertificateNode } from "@utils/types";

export interface ICertificateInfo {
  cardInfo: ICertificateNode;
  isOpen: boolean;
}

export const CertificateInfo = ({ cardInfo, isOpen }: ICertificateInfo) => {
  const formattedDate = cardInfo.dateConclusion.split("-").reverse().join("/");

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 duration-300 p-4 space-y-2 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <h3
        className={`text-primary text-center font-bold text-base line-clamp-1`}
      >
        {cardInfo.title}
      </h3>
      <p className="text-white rounded-lg border border-primary p-2 bg-black h-1/2 overflow-y-scroll text-small">
        {cardInfo.description}
      </p>
      <p
        className={subtitle({
          afterContent: "secondary",
          className: "text-white text-center pb-px",
        })}
      >
        {cardInfo.courseDuration}{" "}
        {Number(cardInfo.courseDuration) > 1 ? "Horas" : "Hora"} de duração
      </p>
      <p className="text-white text-center">
        Data de conclusão: <span className="text-primary">{formattedDate}</span>
      </p>
      <a
        href={cardInfo.certificateFile.url}
        target="_blank"
        className="text-white text-center mx-auto w-fit px-4 block rounded-lg border-2 focus:ring-2 focus:ring-secondary border-primary duration-300 bg-panel hover:scale-105 hover:shadow-primary hover:shadow-allAround hover:border-white hover:bg-primary"
      >
        <FontAwesomeIcon icon={faEye} />
        Visualizar Certificado
      </a>
    </div>
  );
};
