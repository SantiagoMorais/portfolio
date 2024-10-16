import { ICertificateEdge } from "@utils/types";
import { CertificateCard } from "./certificateCard";

interface ICertificatesContent {
    certificates: ICertificateEdge[];
  }

export const CertificatesList = ({ certificates }: ICertificatesContent) => {
    return (
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.node.id}
                cardInfo={certificate.node}
              />
            ))}
          </ul>
      );
}