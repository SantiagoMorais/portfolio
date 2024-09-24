import { navbar } from "@json/data.json";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { AccordionMenu } from "./accordionMenu";
import { MenuItem } from "./menuItem";

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
    <section className="w-full flex justify-center p-10 md:px-20 md:py-16">
      <div className="max-w-screen-2xl w-full flex items-center flex-col gap-4 md:flex-row md:justify-between">
        <Logo />

        <nav className="flex flex-col items-center gap-4 md:flex-row">
          {isAccordion ? (
            <AccordionMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          ) : (
            <ul className="flex gap-4">
              {navbar.map((item) => (
                <MenuItem key={item.id} name={item.name} />
              ))}
            </ul>
          )}
        </nav>
      </div>
    </section>
  );
};
