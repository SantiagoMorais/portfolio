import { ISkillDetailsProps } from "@/core/interfaces/skill-details-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultIcon, iconMapping } from "@/utils/iconMapping";

export const SkillDetails = ({ category, icon, list }: ISkillDetailsProps) => (
  <div className="bg-secondaryPanel flex max-w-[40rem] min-w-[20rem] flex-1 flex-col items-center rounded-xl px-4 py-8">
    <div className="relative mb-4 flex items-center gap-4">
      <FontAwesomeIcon
        className="border-primary text-primary mb-4 size-[2.5rem] rounded-full border-2 p-4"
        icon={iconMapping[icon] || defaultIcon}
      />
      <h3 className="text-textColor text-center text-base leading-tight font-bold">
        {category}
      </h3>
    </div>
    <ul className="text-small flex flex-col gap-1 text-center">
      {list.map((item, index) => (
        <li
          className="from-panel via-primary to-panel text-textColor relative mb-1 pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r last-of-type:after:hidden"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
