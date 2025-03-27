import { ICertificatesData } from "@utils/types";
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
}: ICertificatesContent) => (
  <div className="flex flex-col items-center gap-10 px-5 pb-16 pt-10 md:px-10 md:pb-20">
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
