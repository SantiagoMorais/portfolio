import { Banner } from "./banner";
import { IProjectsListProps } from "utils/types";
import { ProjectDetails } from "./projectDetails";

export const ProjectsList = ({ data }: IProjectsListProps) => {
  if (!data) return;

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {data.length > 0 &&
        data.map((project) => (
          <div
            key={project.id}
            className="flex flex-col w-full rounded-lg bg-panel overflow-hidden p-4 pb-6 min-w-[25rem] sm:min-w-[30rem] flex-1 max-w-[60rem] duration-300 hover:shadow-lg hover:shadow-secondary"
          >
            <Banner project={project} />

            <ProjectDetails project={project} />
          </div>
        ))}
    </div>
  );
};
