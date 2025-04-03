export const ProjectTopics = ({ nodeTopics }: { nodeTopics: string[] }) => {
  const hiddenIcons: string[] = ["portfolio", "contextapi", "tests"];

  return (
    <div className="flex h-fit w-full flex-wrap justify-center gap-2">
      {nodeTopics
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
