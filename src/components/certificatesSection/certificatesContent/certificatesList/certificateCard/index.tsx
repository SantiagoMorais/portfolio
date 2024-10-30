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
  console.log(isOpen);

  return (
    <li className="relative group overflow-hidden bg-secondaryPanel border border-primary rounded-xl duration-300 flex flex-col justify-between items-center select-none hover:shadow-allAround hover:shadow-secondary hover:scale-105">
      <div className="relative w-full h-auto">
        <a
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-none opacity-0 group-hover:opacity-100 flex flex-col items-center size-28 justify-center border-2 border-primary duration-300 rounded-full text-white bg-black bg-opacity-80 shadow-allAround shadow-primary cursor:pointer hover:bg-white hover:border-primary hover:scale-125 hover:text-primary hover:bg-opacity-100"
          target="_blank"
          href={cardInfo.certificateFile.url}
        >
          <FontAwesomeIcon icon={faEye} className="text-large" />
        </a>
        <img
          src={cardInfo.image.url}
          title={cardInfo.title}
          alt={`Certificado do curso: ${cardInfo.title}`}
          className="min-w-full h-auto md:h-[30rem] object-cover object-center border-b border-primary mb-2"
        />
      </div>
      <h3 className="text-textColor font-medium text-base text-center px-4 mb-2">
        {cardInfo.title}
      </h3>
      <button
        className="duration-300 group bg-textColor rounded-t-full hover:bg-primary hover:shadow-allAround hover:shadow-secondary mt-auto z-20 w-24 pt-4 group text-secondaryPanel hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faAdd}
          className={`transition-transform duration-300 text-base ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <CertificateInfo cardInfo={cardInfo} isOpen={isOpen} />
    </li>
  );
};
