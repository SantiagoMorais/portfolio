import { IMenuItemProps } from "@core/interfaces/menu-item-props";
import { button } from "@styles/index";
import { NavLink } from "react-router-dom";

export const MenuItem = ({ navbarInfo }: IMenuItemProps) => (
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
