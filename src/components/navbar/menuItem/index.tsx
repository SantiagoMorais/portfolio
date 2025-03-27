import { button } from "@styles/index";
import { NavLink } from "react-router-dom";

type MenuItemProps = {
  navbarInfo: {
    name: string;
    id: string;
    path: string;
  };
};

export const MenuItem = ({ navbarInfo }: MenuItemProps) => (
  <li className="flex flex-1">
    <NavLink
      to={navbarInfo.path}
      className={({ isActive }) =>
        button({
          afterHover: !isActive ? "primary" : "secondary",
          className: `mx-4 whitespace-nowrap last-of-type:ml-4 last-of-type:mr-0 ${isActive ? "text-primary" : "text-textColor"}`,
        })
      }
    >
      {navbarInfo?.name && navbarInfo.name}
    </NavLink>
  </li>
);
