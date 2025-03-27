import { IGithubRepos } from "github-automated-repos";
import { ProjectDescription } from "./projectDescription";
import { ProjectLinks } from "./projectLinks";
import { ProjectTopics } from "./projectTopics";

export const ProjectDetails = ({ project }: {project: IGithubRepos}) => (
  <div className="flex flex-col items-center h-fit gap-5">
    <ProjectDescription project={project} />
    <ProjectTopics project={project} />
    <ProjectLinks project={project} />
  </div>
);
