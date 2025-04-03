import { IPortfolioNode } from "@/core/interfaces/portfolio-query-interfaces";

export const ProjectDescription = ({
  node,
}: {
  node: Pick<IPortfolioNode, "name" | "description">;
}) => (
  <div className="flex w-full flex-col items-center p-2">
    <h3 className="text-textColor cursor-default text-center text-base font-bold capitalize">
      {node.name.replace(/-/g, " ")}
    </h3>
    <p className="text-primary line-clamp-2 w-full cursor-default text-center font-normal first-letter:uppercase">
      {node.description}
    </p>
  </div>
);
