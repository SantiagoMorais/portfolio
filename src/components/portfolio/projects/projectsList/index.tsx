import { IPortfolioEdges } from "@/core/interfaces/portfolio-query-interfaces";
import { ProjectCard } from "./projectCard";

export const ProjectsList = ({ edges }: { edges: IPortfolioEdges[] }) => (
  <>
    {edges && (
      <div className="flex w-full flex-wrap justify-center gap-8">
        {edges.length > 0 &&
          edges.map(({ node }) => <ProjectCard key={node.id} node={node} />)}
      </div>
    )}
  </>
);
