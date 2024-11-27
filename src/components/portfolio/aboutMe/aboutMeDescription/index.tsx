import { paragraph } from "@styles/index";
import { aboutMeDescription } from "@json/data.json";

export const AboutMeDescription = () => (
  <div className="flex flex-wrap justify-center gap-x-10">
    {aboutMeDescription.map((item) => (
      <p key={item.id} className={paragraph({ sections: "aboutMe" })}>
        {item.text}
      </p>
    ))}
  </div>
);
