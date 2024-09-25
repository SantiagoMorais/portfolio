import { button } from "@styles/index";
import { Link } from "react-router-dom";

type MenuItemProps = {
  navbarInfo: {
    name: string;
    id: string;
    path: string;
  };
};

export const MenuItem = ({ navbarInfo }: MenuItemProps) => {
  return (
    <li className="flex flex-1">
      <Link
        to={navbarInfo.path}
        className={button({
          afterHover: "primary",
          className: "text-textColor",
        })}
      >
        {navbarInfo?.name && navbarInfo.name}
      </Link>
    </li>
  );
};
