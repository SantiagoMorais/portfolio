import { navbar } from "@json/data.json";
import { SquareMenu } from "lucide-react";
import { button, icon } from "@styles/index";
import { Collapse } from "react-collapse";
import { MenuItem } from "@components/navbar/menuItem";
import { ThemeToggleButton } from "../themeTogglerButton";

export const AccordionMenu = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <>
    <div className="flex items-center justify-center gap-5">
      <ThemeToggleButton />
      <button
        onClick={toggle}
        className={button({
          iconContent: "primary",
          className: "text-textColor",
        })}
      >
        <SquareMenu
          className={isOpen ? icon({ selectedButton: "highlight" }) : icon()}
        />
      </button>
    </div>
    <ul
      className={`flex flex-col items-center rounded-lg bg-secondaryPanel px-4 duration-500 ${
        isOpen && "py-4"
      }`}
    >
      <Collapse isOpened={isOpen}>
        {navbar.map((item) => (
          <MenuItem key={item.id} navbarInfo={item} />
        ))}
      </Collapse>
    </ul>
  </>
);
