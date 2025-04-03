import imageNotFound from "@/assets/imgs/image-not-found.jpg";
import { IGithubRepos } from "github-automated-repos";

export const Banner = ({ project }: { project: IGithubRepos }) => (
  <div className="h-full max-h-[30rem] overflow-hidden rounded-lg sm:max-h-[35rem]">
    <img
      src={project.banner ? project.banner[0] : imageNotFound}
      alt={project.name}
      className="h-full w-full object-cover object-left-top sm:h-[35rem]"
    />
  </div>
);
