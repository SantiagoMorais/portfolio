import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { subtitle } from "@/styles/index";
import { whatIDoList } from "@/utils/lists";

export const WhatIDo = () => (
  <div className="flex w-full flex-col">
    <h2
      className={`${subtitle({
        afterContent: "secondary",
        size: "medium",
        h3: "basic",
      })} text-textColor`}
    >
      O que eu <span className="text-primary">faço</span>
    </h2>
    <div className="flex flex-wrap justify-center gap-10">
      {whatIDoList.map((item) => (
        <div
          key={item.title}
          className="bg-panel flex w-full max-w-[50rem] min-w-[20rem] flex-1 flex-col items-center gap-5 rounded-lg px-5 py-10 pb-5 md:min-w-[30rem]"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-extraLarge text-primary"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-textColor text-center text-base font-bold capitalize">
              {item.title}
            </h4>
            <p className="text-small text-textColor text-center first-letter:capitalize">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
