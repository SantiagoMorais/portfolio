import { IGithubRepos } from "github-automated-repos";

export const ProjectDescription = ({ project }: {project: IGithubRepos}) => (
  <div className="flex flex-col items-center w-full p-2">
    <h3 className="cursor-default text-center text-textColor font-bold text-base capitalize">
      {project.name.replace(/-/g, " ")}
    </h3>
    <p className="cursor-default font-normal text-primary text-center first-letter:uppercase">
      {project.description}
    </p>
  </div>
);
