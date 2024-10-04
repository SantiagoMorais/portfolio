import { IProjectsListProps } from "utils/types";
import { ProjectCard } from "./projectCard";

export const ProjectsList = ({ data }: IProjectsListProps) => {
  if (!data) return;

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {data.length > 0 &&
        data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
};
