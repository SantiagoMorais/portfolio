import { ICertificateEdge, ICertificatesData } from "@utils/types";
import { CertificateCard } from "./certificatesList/certificateCard";
import { CertificatesList } from "./certificatesList";
import { Loading } from "@components/ui/loading";
import { LoadMoreButton } from "@components/ui/loadMoreButton";

interface ICertificatesContent {
  data: ICertificatesData;
  fetchMorePosts: () => void;
  isLoading: boolean;
}

export const CertificatesContent = ({
  data,
  fetchMorePosts,
  isLoading,
}: ICertificatesContent) => {
  return (
    <div className="flex flex-col items-center pt-10 px-5 pb-16 gap-10 md:pb-20 md:px-10">
      Content
      <div>course duration</div>
      {isLoading ? (
        <Loading />
      ) : (
        <CertificatesList certificates={data.certificatesConnection.edges} />
      )}
      <LoadMoreButton
        fetchMorePosts={fetchMorePosts}
        hasMore={data?.certificatesConnection.pageInfo.hasNextPage}
        isLoading={isLoading}
      />
    </div>
  );
};
