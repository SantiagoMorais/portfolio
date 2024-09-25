import { subtitle } from "@styles/index";
import { AboutMeDescription } from "./aboutMeDescription";
import { WhatIDo } from "./whatIDo";
import { Curriculum } from "./curriculum";

export const AboutMe = () => {
  return (
    <section className="bg-secondaryPanel flex flex-col px-10 py-16 w-full gap-5">
      <h2
        className={`${subtitle({ afterContent: "primary", size: "large" })} text-textColor`}
      >
        Sobre <span className="text-primary">mim</span>
      </h2>
      <AboutMeDescription />
      <WhatIDo />
      <Curriculum />
    </section>
  );
};