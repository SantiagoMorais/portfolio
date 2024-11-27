import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultIcon, iconMapping } from "utils/iconMapping";

type SkillDetailsProps = {
  category: string;
  icon: string;
  list: string[];
};

export const SkillDetails = ({ category, icon, list }: SkillDetailsProps) => (
  <div className="max-w-[40rem] flex-1 px-4 py-8 rounded-xl bg-secondaryPanel flex flex-col items-center min-w-[20rem]">
    <div className="flex items-center gap-4 mb-4 relative">
      <FontAwesomeIcon
        className="text-primary border-2 border-primary mb-4 p-4 size-[2.5rem] rounded-full"
        icon={iconMapping[icon] || defaultIcon}
      />
      <h3 className="text-center text-textColor text-base font-bold leading-tight">
        {category}
      </h3>
    </div>
    <ul className="flex flex-col gap-1 text-small text-center">
      {list.map((item, idx) => (
        <li
          className="text-textColor mb-1 pb-1 relative after:absolute after:h-px after:w-full after:bottom-0 after:left-0 after:bg-gradient-to-r from-panel via-primary to-panel last-of-type:after:hidden"
          key={idx}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
