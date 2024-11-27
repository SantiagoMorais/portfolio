import { skills } from "@json/data.json";
import { subtitle } from "@styles/index";
import { SkillDetails } from "./skillDetails";

export const Skills = () => (
  <section className="w-full px-5 py-10 mb-5 md:px-10 md:py-16">
    <div className="flex flex-col w-full">
      <h2
        className={`${subtitle({ afterContent: "primaryOnCleanBg", size: "large" })} text-textColor mb-12`}
      >
        Habilidades
      </h2>
      <div className="flex flex-wrap gap-5 justify-center w-full">
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
