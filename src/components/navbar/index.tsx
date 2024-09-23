import { navbar } from "@json/data.json";
import { MessageCircleCode } from "lucide-react";
import { button } from "@styles/index";

export const Navbar = () => {
  return (
    <section className="w-full flex justify-center p-5">
      <div className="max-w-screen-2xl w-full flex justify-between items-center">
        <div className="flex">
          <p className="text-medium first-letter:text-large font-extrabold mt-2 cursor-default select-none">
            FS<span className="text-primary">.</span>
          </p>
          <MessageCircleCode className="size-8" />
        </div>
        <ul className="flex gap-16 wrap items-center justify-center">
          {navbar.map((item) => (
            <li key={item.id} className="flex flex-1">
              <button className={button({ afterHover: "primary" })}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
