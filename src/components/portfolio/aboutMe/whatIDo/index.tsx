import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { subtitle } from "@styles/index";
import { whatIDoList } from "utils/lists";

export const WhatIDo = () => (
  <div className="w-full flex flex-col">
    <h2
      className={`${subtitle({
        afterContent: "secondary",
        size: "medium",
        h3: "basic",
      })} text-textColor`}
    >
      O que eu <span className="text-primary">faço</span>
    </h2>
    <div className="flex flex-wrap gap-10 justify-center">
      {whatIDoList.map((item) => (
        <div
          key={item.id}
          className="flex-1 w-full flex flex-col items-center gap-5 min-w-[20rem] max-w-[50rem] pb-5 md:min-w-[30rem] bg-panel px-5 py-10 rounded-lg"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-extraLarge text-primary"
          />
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-center capitalize text-base text-textColor">
              {item.title}
            </h4>
            <p className="first-letter:capitalize text-center text-small text-textColor">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
