import { AboutMe } from "./aboutMe";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Portfolio = () => (
  <div className="flex flex-1 flex-col w-full items-center">
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
  </div>
);
