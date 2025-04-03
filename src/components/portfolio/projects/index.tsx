import { ProjectHeader } from "./projectsHeader";
import { ProjectsCategories } from "./projectsCategories";

export const Projects = () => (
  <section className="bg-secondaryPanel flex w-full flex-col gap-5 px-5 py-10 sm:px-10 md:py-16">
    <ProjectHeader />
    <ProjectsCategories />
  </section>
);
