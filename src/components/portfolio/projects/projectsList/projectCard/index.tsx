import { IGithubRepos } from "github-automated-repos";
import { Banner } from "./banner";
import { ProjectDetails } from "./projectDetails";

export const ProjectCard = ({ project }: { project: IGithubRepos }) => (
  <div
    key={project.id}
    className="flex w-full min-w-[25rem] max-w-[60rem] flex-1 flex-col gap-5 overflow-hidden rounded-lg bg-panel p-5 pb-6 duration-300 hover:shadow-allAround hover:shadow-secondary sm:min-w-[30rem]"
  >
    <Banner project={project} />
    <ProjectDetails project={project} />
  </div>
);
