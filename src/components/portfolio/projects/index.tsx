import { ProjectHeader } from "./projectsHeader";
import { ProjectsCategories } from "./projectsCategories";

export const Projects = () => {
  return (
    <section className="flex flex-col w-full px-5 py-10 sm:px-10 md:py-16 mb-5 bg-secondaryPanel gap-5">
      <ProjectHeader />
      <ProjectsCategories />
    </section>
  );
};
