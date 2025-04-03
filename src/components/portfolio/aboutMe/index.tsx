import { subtitle } from "@/styles/index";
import { AboutMeDescription } from "./aboutMeDescription";
import { WhatIDo } from "./whatIDo";
import { Curriculum } from "./curriculum";

export const AboutMe = () => (
  <section className="bg-secondaryPanel flex w-full flex-col gap-5 px-5 py-16 md:px-10">
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
