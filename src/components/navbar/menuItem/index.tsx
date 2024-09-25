import { button } from "@styles/index";
import { Link } from "react-router-dom";

export const MenuItem = ({
  navbarInfo,
}: {
  navbarInfo: { name: string; id: string; path: string };
}) => (
  <Link to={`/${navbarInfo.path}`}>
    <li className="flex flex-1">
      <button
        className={button({
          afterHover: "primary",
          className: "text-textColor",
        })}
      >
        {navbarInfo.name}
      </button>
    </li>
  </Link>
);
