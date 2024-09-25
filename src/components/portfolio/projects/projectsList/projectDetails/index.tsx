import { ProjectProps } from "utils/types";
import { ProjectDescription } from "./projectDescription";
import { ProjectTopics } from "./projectTopics";
import { ProjectLinks } from "./projectLinks";

export const ProjectDetails = ({ project }: ProjectProps) => {
  return (
    <div className="flex flex-col items-center h-fit">
      <ProjectDescription project={project} />
      <ProjectTopics project={project} />
      <ProjectLinks project={project} />
    </div>
  );
};
