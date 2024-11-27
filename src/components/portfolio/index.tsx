import { AboutMe } from "./aboutMe";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Portfolio = () => (
    <div className="flex-1 flex flex-col items-center">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
