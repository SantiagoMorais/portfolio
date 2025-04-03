import { ISkillDetailsProps } from "@core/interfaces/skill-details-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultIcon, iconMapping } from "utils/iconMapping";

export const SkillDetails = ({ category, icon, list }: ISkillDetailsProps) => (
  <div className="flex min-w-[20rem] max-w-[40rem] flex-1 flex-col items-center rounded-xl bg-secondaryPanel px-4 py-8">
    <div className="relative mb-4 flex items-center gap-4">
      <FontAwesomeIcon
        className="mb-4 size-[2.5rem] rounded-full border-2 border-primary p-4 text-primary"
        icon={iconMapping[icon] || defaultIcon}
      />
      <h3 className="text-center text-base font-bold leading-tight text-textColor">
        {category}
      </h3>
    </div>
    <ul className="flex flex-col gap-1 text-center text-small">
      {list.map((item, idx) => (
        <li
          className="relative mb-1 from-panel via-primary to-panel pb-1 text-textColor after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r last-of-type:after:hidden"
          key={idx}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
