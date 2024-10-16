import { ICertificateEdge } from "@utils/types";
import { CertificateCard } from "./certificateCard";

interface ICertificatesList {
  certificates: ICertificateEdge[];
}

export const CertificatesList = ({ certificates }: ICertificatesList) => {
  return (
    <div className="flex flex-col items-center pt-10 px-5 pb-16 gap-10 md:pb-20 md:px-10">
      list
      <div>course duration</div>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.node.id}
            cardInfo={certificate.node}
          />
        ))}
      </ul>
    </div>
  );
};
