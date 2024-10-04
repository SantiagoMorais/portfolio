import { ProjectProps } from "utils/types";

export const ProjectTopics = ({ project }: ProjectProps) => {
  const hiddenIcons: string[] = ["portfolio", "contextapi", "tests"];

  return (
    <div className="w-full flex flex-wrap justify-center gap-2 h-full">
      {project.topics
        .filter((topic) => !hiddenIcons.includes(topic))
        .map((icon) => (
          <p
            className="cursor-default bg-primary h-fit px-4 py-2 rounded-xl capitalize flex-1 min-w-fit text-center text-textColor font-bold  max-w-80"
            key={icon}
          >
            {icon}
          </p>
        ))}
    </div>
  );
};
