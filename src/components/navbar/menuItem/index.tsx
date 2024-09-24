import { button } from "@styles/index";

export const MenuItem = ({ name }: { name: string }) => (
  <li className="flex flex-1">
    <button className={button({ afterHover: "primary", className: "text-textColor" })}>{name}</button>
  </li>
);
