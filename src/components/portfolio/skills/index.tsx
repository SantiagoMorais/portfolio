import { skills } from "@/json/data.json";
import { subtitle } from "@/styles/index";
import { SkillDetails } from "./skillDetails";

export const Skills = () => (
  <section className="mb-5 w-full px-5 py-10 md:px-10 md:py-16">
    <div className="flex w-full flex-col">
      <h2
        className={`${subtitle({ afterContent: "primaryOnCleanBg", size: "large" })} text-textColor mb-12`}
      >
        Habilidades
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-5">
        {skills.map((skill) => (
          <SkillDetails
            key={skill.category}
            category={skill.category}
            icon={skill.icon}
            list={skill.list}
          />
        ))}
      </div>
    </div>
  </section>
);
