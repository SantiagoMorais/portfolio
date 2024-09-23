import { navbar } from "@json/data.json";
import { SquareMenu } from "lucide-react";
import { button, icon } from "@styles/index";
import { Collapse } from "react-collapse";
import { MenuItem } from "@components/navbar/menuItem";

export const AccordionMenu = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <>
    <button onClick={toggle} className={button({ iconContent: "primary" })}>
      <SquareMenu
        className={isOpen ? icon({ selectedButton: "highlight" }) : icon()}
      />
    </button>
    <ul
      className={`flex flex-col items-center bg-secondaryPanel px-4 rounded-lg duration-500 ${
        isOpen && "py-4"
      }`}
    >
      <Collapse isOpened={isOpen}>
        {navbar.map((item) => (
          <MenuItem key={item.id} name={item.name} />
        ))}
      </Collapse>
    </ul>
  </>
);
