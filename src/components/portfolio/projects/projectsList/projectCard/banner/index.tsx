import imageNotFound from "@assets/imgs/image-not-found.jpg";
import { IGithubRepos } from "github-automated-repos";
import { ProjectProps } from "utils/types";

export const Banner = ({ project }: { project: IGithubRepos }) => (
  <div className="max-h-[30rem] sm:max-h-[35rem] h-full rounded-lg overflow-hidden">
    <img
      src={project.banner ? project.banner[0] : imageNotFound}
      alt={project.name}
      className="h-full sm:h-[35rem] w-full object-left-top object-cover"
    />
  </div>
);
