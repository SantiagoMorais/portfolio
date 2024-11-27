import { ProjectProps } from "@utils/types";
import { Banner } from "./banner";
import { ProjectDetails } from "./projectDetails";

export const ProjectCard = ({ project }: ProjectProps) => (
  <div
    key={project.id}
    className="flex flex-col w-full rounded-lg bg-panel overflow-hidden p-5 pb-6 min-w-[25rem] sm:min-w-[30rem] flex-1 max-w-[60rem] duration-300 hover:shadow-allAround hover:shadow-secondary gap-5"
  >
    <Banner project={project} />
    <ProjectDetails project={project} />
  </div>
);
