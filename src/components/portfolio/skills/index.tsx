import {
  faBook,
  faCode,
  faKey,
  faLaptopCode,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { skills } from "@json/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { subtitle } from "@styles/index";

const iconMapping: Record<string, IconDefinition> = {
  code: faCode,
  tools: faTools,
  book: faBook,
  key: faKey,
  backend: faServer,
};

const defaultIcon = faLaptopCode;

export const Skills = () => {
  return (
    <section className="w-full px-10 py-16 mb-5">
      <div className="flex flex-col w-full">
        <h2 className={`${subtitle({ afterContent: "primaryOnCleanBg", size: "large" })} text-textColor mb-12`}>Habilidades</h2>
        <div className="flex flex-wrap gap-5 justify-center w-full">
          {skills.map((skill, index) => (
            <div className="max-w-[40rem] flex-1 p-4 rounded-md border-2 border-secondary flex flex-col items-center min-w-[20rem]" key={index}>
              <div className="flex items-center gap-4 mb-4 relative">
                <FontAwesomeIcon
                  className="text-primary border-2 border-primary mb-4 p-4 size-[2.5rem] rounded-full"
                  icon={iconMapping[skill.icon] || defaultIcon}
                />
                <h3 className="text-center text-textColor text-base font-bold leading-tight">{skill.category}</h3>
              </div>
              <ul className="flex flex-col gap-1 text-small text-center">
                {skill.list.map((item, idx) => (
                  <li className="text-textColor mb-1 pb-1 last-of-type:border-none relative after:absolute after:h-px after:w-full after:bottom-0 after:left-0 after:bg-gradient-to-r from-panel via-primary to-panel" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
