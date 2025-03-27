import { faAdd, faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICertificateNode } from "@utils/types";
import { useState } from "react";
import { CertificateInfo } from "./certificateInfo";

export interface ICertificateCard {
  cardInfo: ICertificateNode;
}

export const CertificateCard = ({ cardInfo }: ICertificateCard) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li className="group relative flex select-none flex-col items-center justify-between overflow-hidden rounded-xl border border-primary bg-secondaryPanel duration-300 hover:scale-105 hover:shadow-allAround hover:shadow-secondary">
      <div className="relative h-auto w-full">
        <a
          className="cursor:pointer absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-black bg-opacity-80 bg-none text-white opacity-0 shadow-allAround shadow-primary duration-300 hover:scale-125 hover:border-primary hover:bg-white hover:bg-opacity-100 hover:text-primary group-hover:opacity-100"
          target="_blank"
          href={cardInfo.certificateFile.url}
        >
          <FontAwesomeIcon icon={faEye} className="text-large" />
        </a>
        <img
          src={cardInfo.image.url}
          title={cardInfo.title}
          alt={`Certificado do curso: ${cardInfo.title}`}
          className="mb-2 h-auto min-w-full border-b border-primary object-cover object-center md:h-[30rem]"
        />
      </div>
      <h3 className="mb-2 px-4 text-center text-base font-medium text-textColor">
        {cardInfo.title}
      </h3>
      <button
        className="group z-20 mt-auto w-24 rounded-t-full bg-textColor pt-4 text-secondaryPanel duration-300 hover:bg-primary hover:text-white hover:shadow-allAround hover:shadow-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faAdd}
          className={`text-base transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <CertificateInfo cardInfo={cardInfo} isOpen={isOpen} />
    </li>
  );
};
