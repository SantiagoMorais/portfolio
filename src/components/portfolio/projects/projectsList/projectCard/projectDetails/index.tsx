import { IPortfolioNode } from "@/core/interfaces/portfolio-query-interfaces";
import { ProjectDescription } from "./projectDescription";
import { ProjectLinks } from "./projectLinks";
import { ProjectTopics } from "./projectTopics";

export const ProjectDetails = ({ node }: { node: IPortfolioNode }) => (
  <div className="flex h-full flex-col items-center gap-5">
    <ProjectDescription node={node} />
    <ProjectTopics nodeTopics={node.topics} />
    <ProjectLinks node={node} />
  </div>
);
