import { ProjectHeader } from "./projectsHeader";
import { ProjectsCategories } from "./projectsCategories";

export const Projects = () => (
  <section className="flex w-full flex-col gap-5 bg-secondaryPanel px-5 py-10 sm:px-10 md:py-16">
    <ProjectHeader />
    <ProjectsCategories />
  </section>
);
