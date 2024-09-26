import { navbar } from "@json/data.json";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { AccordionMenu } from "./accordionMenu";
import { MenuItem } from "./menuItem";
import { ThemeToggleButton } from "./themeTogglerButton";
import { Link } from "react-router-dom";
import { button } from "@styles/index";

export const Navbar = () => {
  const [isAccordion, setIsAccordion] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAccordion(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full flex justify-center p-10 md:px-20 md:py-16">
      <div className="max-w-screen-2xl w-full flex items-center flex-col gap-4 md:flex-row md:justify-between">
        <Logo className="text-large first-letter:text-extraLarge" />

        <nav className="flex flex-col items-center gap-4 md:flex-row">
          {isAccordion ? (
            <AccordionMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          ) : (
            <ul className="flex gap-4 items-center">
              <ThemeToggleButton />
              {navbar &&
                navbar.map((item) => (
                  <MenuItem key={item.id} navbarInfo={item}/>
                ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
