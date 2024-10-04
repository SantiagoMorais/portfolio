import imageNotFound from "@assets/image-not-found.jpg";
import { ProjectProps } from "utils/types";

export const Banner = ({ project }: ProjectProps) => {
  return (
    <div className="max-h-[30rem] sm:max-h-[35rem] h-full rounded-lg overflow-hidden">
      <img
        src={project.banner ? project.banner : imageNotFound}
        alt={project.name}
        className="h-full sm:h-[35rem] w-full object-left-top object-cover"
      />
    </div>
  );
};
