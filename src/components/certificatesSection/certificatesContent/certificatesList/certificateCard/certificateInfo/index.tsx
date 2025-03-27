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
      className={`absolute left-0 top-0 h-full w-full space-y-2 bg-black bg-opacity-80 p-4 duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <h3
        className={`line-clamp-1 text-center text-base font-bold text-primary`}
      >
        {cardInfo.title}
      </h3>
      <p className="h-1/2 overflow-y-scroll rounded-lg border border-primary bg-black p-2 text-small text-white">
        {cardInfo.description}
      </p>
      <p
        className={subtitle({
          afterContent: "secondary",
          className: "pb-px text-center text-white",
        })}
      >
        {cardInfo.courseDuration}{" "}
        {Number(cardInfo.courseDuration) > 1 ? "Horas" : "Hora"} de duração
      </p>
      <p className="text-center text-white">
        Data de conclusão: <span className="text-primary">{formattedDate}</span>
      </p>
      <a
        href={cardInfo.certificateFile.url}
        target="_blank"
        className="mx-auto block w-fit rounded-lg border-2 border-primary bg-panel px-4 text-center text-white duration-300 hover:scale-105 hover:border-white hover:bg-primary hover:shadow-allAround hover:shadow-primary focus:ring-2 focus:ring-secondary"
      >
        <FontAwesomeIcon icon={faEye} />
        Visualizar Certificado
      </a>
    </div>
  );
};
