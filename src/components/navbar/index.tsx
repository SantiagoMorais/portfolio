import { navbar } from "@/json/data.json";
import { useEffect, useState } from "react";
import { Logo } from "../ui/logo";
import { AccordionMenu } from "./accordionMenu";
import { MenuItem } from "./menuItem";
import { ThemeToggleButton } from "./themeTogglerButton";
import { Link } from "react-router-dom";

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
    <header className="flex w-full justify-center p-10 md:px-20 md:py-16">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
        <Link
          to="/"
          className="cursor-pointer duration-300 hover:scale-110 hover:opacity-70"
        >
          <Logo className="text-large first-letter:text-extraLarge" />
        </Link>

        <nav className="flex flex-col items-center gap-4 md:flex-row">
          {isAccordion ? (
            <AccordionMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          ) : (
            <ul className="flex items-center gap-4">
              <ThemeToggleButton />
              {navbar &&
                navbar.map((item) => (
                  <MenuItem key={item.id} navbarInfo={item} />
                ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
