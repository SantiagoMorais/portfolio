import { IGithubRepos } from "github-automated-repos";

export const ProjectTopics = ({ project }: { project: IGithubRepos }) => {
  const hiddenIcons: string[] = ["portfolio", "contextapi", "tests"];

  return (
    <div className="flex h-full w-full flex-wrap justify-center gap-2">
      {project.topics
        .filter((topic) => !hiddenIcons.includes(topic))
        .map((icon) => (
          <p
            className="bg-primary text-textColor h-fit max-w-80 min-w-fit flex-1 cursor-default rounded-xl px-4 py-2 text-center font-bold capitalize"
            key={icon}
          >
            {icon}
          </p>
        ))}
    </div>
  );
};
