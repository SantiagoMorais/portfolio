import { IGithubRepos } from "github-automated-repos";
import { ProjectCard } from "./projectCard";

export const ProjectsList = ({ data }: { data: IGithubRepos[] }) => (
  <>
    {data && (
      <div className="flex w-full flex-wrap justify-center gap-8">
        {data.length > 0 &&
          data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    )}
  </>
);
