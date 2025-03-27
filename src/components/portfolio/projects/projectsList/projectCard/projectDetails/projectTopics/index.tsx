import { IGithubRepos } from "github-automated-repos";

export const ProjectTopics = ({ project }: { project: IGithubRepos }) => {
  const hiddenIcons: string[] = ["portfolio", "contextapi", "tests"];

  return (
    <div className="flex h-full w-full flex-wrap justify-center gap-2">
      {project.topics
        .filter((topic) => !hiddenIcons.includes(topic))
        .map((icon) => (
          <p
            className="h-fit min-w-fit max-w-80 flex-1 cursor-default rounded-xl bg-primary px-4 py-2 text-center font-bold capitalize text-textColor"
            key={icon}
          >
            {icon}
          </p>
        ))}
    </div>
  );
};
