import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICertificateNode } from "@utils/types";
import { useState } from "react";

interface ICertificateCard {
  cardInfo: ICertificateNode;
}

export const CertificateCard = ({ cardInfo }: ICertificateCard) => {
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  return (
    <li className="bg-secondaryPanel border border-primary rounded-xl overflow-hidden duration-300 flex flex-col items-center gap-2 select-none hover:shadow-allAround hover:shadow-secondary hover:scale-105 relative">
      <img
        src={cardInfo.image.url}
        title={cardInfo.title}
        alt={`Certificado do curso: ${cardInfo.title}`}
        className="min-w-full h-[25rem] md:h-[30rem] object-cover object-center border-b border-primary"
      />
      <h3 className="text-textColor font-medium text-base text-center px-4 h-full">
        {cardInfo.title}
      </h3>
      <button
        className="duration-300 group bg-textColor rounded-t-full hover:bg-primary hover:shadow-allAround hover:shadow-secondary"
        onMouseEnter={() => setOpenInfo(true)}
        onMouseOut={() => setOpenInfo(false)}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="px-8 pt-4 duration-300 text-secondaryPanel group-hover:text-white"
        />
      </button>
      <div className="absolute bottom-0 left-0 w-full h-0"></div>
    </li>
  );
};
