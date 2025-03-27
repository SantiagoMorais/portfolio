import { ICertificateEdge } from "@utils/types";
import { CertificateCard } from "./certificateCard";

interface ICertificatesContent {
  certificates: ICertificateEdge[];
}

export const CertificatesList = ({ certificates }: ICertificatesContent) => {
  const sortedCertificates = [...certificates].sort((a, b) => {
    const dateA = new Date(a.node.dateConclusion);
    const dateB = new Date(b.node.dateConclusion);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <ul className="grid w-full grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {sortedCertificates.map((certificate) => (
        <CertificateCard
          key={certificate.node.id}
          cardInfo={certificate.node}
        />
      ))}
    </ul>
  );
};
