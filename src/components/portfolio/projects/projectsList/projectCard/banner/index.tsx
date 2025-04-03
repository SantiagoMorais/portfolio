import imageNotFound from "@/assets/imgs/image-not-found.jpg";
import { IPortfolioNode } from "@/core/interfaces/portfolio-query-interfaces";

export const Banner = ({
  node,
}: {
  node: Pick<IPortfolioNode, "banner" | "name">;
}) => (
  <div className="h-full max-h-[30rem] overflow-hidden rounded-lg sm:max-h-[35rem]">
    <img
      src={node.banner ? node.banner.url : imageNotFound}
      alt={node.name}
      className="h-full w-full object-cover object-left-top sm:h-[35rem]"
    />
  </div>
);
