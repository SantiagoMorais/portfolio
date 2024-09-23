import { navbar } from "@json/data.json";
import { MessageCircleCode } from "lucide-react";

export const Navbar = () => {
  return (
    <section className="w-full flex justify-center p-5">
      <div className="max-w-screen-2xl w-full flex justify-between items-center">
        <div className="flex">
          <p className="text-2xl first-letter:text-4xl font-extrabold mt-2 cursor-default select-none">
            FS<span>.</span>
          </p>
          <MessageCircleCode className="size-8" />
        </div>
        <ul className="flex gap-4 wrap items-center justify-center">
          {navbar.map((item) => (
            <li key={item.id} className="flex flex-1">
                <button className="whitespace-nowrap break-normal px-2 py-1 bg-blue-500 rounded-md text-white duration-300 hover:bg-blue-300">
                    {item.name}
                </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
