import { ProjectHeader } from "./projectsHeader";
import { ProjectsCategories } from "./projectsCategories";

export const Projects = () => (
  <section className="flex flex-col w-full px-5 py-10 sm:px-10 md:py-16 bg-secondaryPanel gap-5">
    <ProjectHeader />
    <ProjectsCategories />
  </section>
);
