import { IGithubRepos } from "github-automated-repos";
import { Banner } from "./banner";
import { ProjectDetails } from "./projectDetails";

export const ProjectCard = ({ project }: { project: IGithubRepos }) => (
  <div
    key={project.id}
    className="bg-panel hover:shadow-allAround hover:shadow-secondary flex w-full max-w-[60rem] min-w-[25rem] flex-1 flex-col gap-5 overflow-hidden rounded-lg p-5 pb-6 duration-300 sm:min-w-[30rem]"
  >
    <Banner project={project} />
    <ProjectDetails project={project} />
  </div>
);
