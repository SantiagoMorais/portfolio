import { IGithubRepos } from "github-automated-repos";

export const ProjectDescription = ({ project }: { project: IGithubRepos }) => (
  <div className="flex w-full flex-col items-center p-2">
    <h3 className="text-textColor cursor-default text-center text-base font-bold capitalize">
      {project.name.replace(/-/g, " ")}
    </h3>
    <p className="text-primary cursor-default text-center font-normal first-letter:uppercase">
      {project.description}
    </p>
  </div>
);
